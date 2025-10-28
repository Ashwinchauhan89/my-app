import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightsPage = async () => {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return (
    <div>
      Industry Inslights
    </div>
  )
};


export default IndustryInsightsPage