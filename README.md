This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



### Directory Structure
```markdown
My-app/
│
├── actions/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   │   └── [[...sign-in]]/
│   │   ├── sign-up/
│   │   │   └── [[...sign-up]]/
│   │   └── layout.js
│   ├── (main)/
│   │   ├── ai-cover-letter/
│   │   │   ├── [id]/
│   │   │   ├── _components/
│   │   │   ├── new/
│   │   │   └── page.jsx
│   │   ├── dashboard/
│   │   │   ├── _component/
│   │   │   ├── layout.js
│   │   │   └── page.jsx
│   │   ├── interview/
│   │   │   ├── _components/
│   │   │   ├── mock/
│   │   │   ├── layout.js
│   │   │   └── page.jsx
│   │   ├── onboarding/
│   │   │   ├── _components/
│   │   │   └── page.jsx
│   │   ├── resume/
│   │   │   ├── _components/
│   │   │   └── page.jsx
│   │   └── layout.jsx
│   ├── api/
│   │   └── inngest/
│   ├── lib/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.jsx
│   └── page.js
├── components/
│   ├── ui/
│   ├── header.jsx
│   ├── hero.jsx
│   └── theme-provider.jsx
├── data/
├── hooks/
├── lib/
│   ├── inngest/
│   ├── checkUser.js
│   ├── prisma.js
│   └── utils.js
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── public/
│   ├── banner.jpeg
│   ├── banner2.jpeg
│   ├── banner3.jpeg
│   └── logo.png
├── .eslintrc.json
├── .gitignore
├── README.md
├── components.json
├── eslint.config.mjs
├── jsconfig.json
├── middleware.js
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tailwind.config.mjs

```