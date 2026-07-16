import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";


export const ensureUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const email = user.emailAddresses?.[0]?.emailAddress;

  if (!email) {
    throw new Error("User email not found");
  }

  const name = [user.firstName, user.lastName].filter(Boolean).join(" ") || null;

  return await db.user.upsert({
    where: {
      clerkUserId: user.id,
    },
    update: {
      name,
      imageUrl: user.imageUrl,
      email,
    },
    create: {
      clerkUserId: user.id,
      name,
      imageUrl: user.imageUrl,
      email,
    },
  });
};

export const checkUser = ensureUser;

