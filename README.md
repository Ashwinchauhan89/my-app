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


created by Ashwin Chauhan


# Minor Project Synopsis  
## on  
# **AI CAREER COACH**  
### *Full Stack AI-Powered Career Guidance Platform*

---

### In partial fulfillment of requirements for the degree  
of  
**BACHELOR OF TECHNOLOGY**  
in  
**COMPUTER SCIENCE & ENGINEERING**

---

### Submitted by:
**NAME OF THE STUDENT 1** [University Roll Number]  
**NAME OF THE STUDENT 2** [University Roll Number]  
**NAME OF THE STUDENT 3** [University Roll Number]  
**NAME OF THE STUDENT 4** [University Roll Number]

---

### Under the guidance of  
**PROF. NAME**

**DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING**  
**PRASHANTI INSTITUTE OF TECHNOLOGY & SCIENCE**  
**JULY – DEC 2025**

---

## **Abstract (≈250 Words)**

The AI Career Coach is a comprehensive full-stack web application designed to provide personalized career guidance using artificial intelligence. This project leverages cutting-edge technologies including Next.js for frontend development, Neon DB as a serverless PostgreSQL database, Prisma ORM for database management, Clerk for secure authentication, Inngest for background job processing, Gemini API for AI-powered recommendations, and Shadcn UI components styled with Tailwind CSS.  

The platform addresses the growing need for accessible, personalized career counseling by combining machine learning algorithms with psychological profiling to deliver dynamic career recommendations. Users can upload resumes, receive AI-driven analysis, get personalized career path suggestions, participate in mock interviews, and track their professional development progress. The system provides real-time industry insights updated regularly, skill gap analysis, and tailored learning recommendations, making it an innovative solution for modern career planning and development.

---

## **1. INTRODUCTION (≈250 Words)**

In today's rapidly evolving job market, individuals face unprecedented challenges in making informed career decisions. Traditional career counseling methods are often limited in scale, accessibility, and personalization, leaving many job seekers and students without adequate guidance. The AI Career Coach platform emerges as a transformative solution to this problem, leveraging artificial intelligence and modern web technologies to democratize access to quality career guidance.

The platform combines the power of generative AI with full-stack development practices to create an intelligent system that mimics real-life mentorship and coaching. Built on a foundation of Next.js, a React-based framework enabling server-side rendering and optimal performance, the application provides a seamless user experience while maintaining scalability and efficiency. The integration of advanced AI models, particularly the Gemini API, enables the platform to analyze user data comprehensively and generate context-aware, personalized career suggestions that evolve with market trends and individual user progress.

This project exemplifies the fusion of artificial intelligence and modern web development to solve real-world problems. With its user-centric design, modular architecture, and intelligent recommendation engine, the AI Career Coach serves as both a valuable career tool for end users and a reference implementation demonstrating how emerging technologies can be harnessed to build practical, impactful applications that address significant societal needs in education and professional development.

---

## **2. PROBLEM DOMAIN (≈150 Words)**

The primary challenge addressed by this project is the lack of accessible, personalized, and data-driven career guidance for students and professionals. Traditional career counseling is often expensive, limited in availability, and unable to keep pace with rapidly changing job market dynamics. Many individuals struggle to identify suitable career paths aligned with their skills, interests, and market demands. Additionally, resume optimization, interview preparation, and skill gap identification require expert guidance that is not readily available to everyone.

### **Objectives of the Proposed Work**
- Develop an AI-powered system that provides personalized career recommendations based on individual profiles.  
- Create a scalable platform accessible to users regardless of geographic location or economic status.  
- Implement real-time job market analysis and industry insights.  
- Provide comprehensive tools for resume analysis, skill assessment, and interview preparation.  
- Build a user-friendly interface that makes professional career guidance accessible to all skill levels.  

---

## **3. SOLUTION DOMAIN (≈300 Words)**

The AI Career Coach platform implements a sophisticated full-stack architecture combining multiple modern technologies to deliver comprehensive career guidance. The solution framework encompasses several key components working in harmony to provide an intelligent, responsive user experience.

### **Frontend Architecture**
The frontend is built using **Next.js 15** with **React 19**, providing server-side rendering capabilities and optimal performance through the App Router architecture. The user interface is crafted using **Shadcn UI** components, a collection of accessible React components built with **Radix UI** primitives and styled with **Tailwind CSS**, ensuring a responsive and aesthetically pleasing design that works seamlessly across all devices.

### **Authentication & Security**
User authentication is managed through **Clerk**, a comprehensive authentication service that provides secure sign-up, sign-in, and session management with support for multiple authentication methods including email/password and OAuth providers. This ensures robust security while maintaining ease of use.

### **Database Architecture**
The backend architecture utilizes **Neon DB**, a serverless PostgreSQL database platform with instant provisioning, scale-to-zero functionality, and automatic scaling capabilities. **Prisma ORM** serves as the data modeling and query layer, providing type-safe database access, automated migrations, and streamlined schema management.

### **Background Processing**
Background job processing and asynchronous workflows are handled by **Inngest**, an event-driven workflow engine that enables reliable background task execution without infrastructure overhead. This ensures computationally intensive AI operations do not block the user interface.

### **AI Engine**
The core AI functionality is powered by the **Gemini API** from Google, which analyzes user data including resumes, skills, educational background, and career goals to generate personalized recommendations, conduct skill gap analysis, and provide interview preparation guidance. The system architecture follows event-driven principles where user interactions trigger AI processing workflows that analyze data, generate insights, and store results for continuous learning and personalized improvement.

---

## **4. SYSTEM DOMAIN (≈150 Words)**

The AI Career Coach platform is built on a modern, cloud-native technology stack optimized for performance, scalability, and developer productivity.

### **Core Technologies**
- **Next.js 15 (React 19):** Full-stack framework for server-side rendering and App Router architecture.  
- **Neon DB:** Serverless PostgreSQL database with instant provisioning and automatic scaling.  
- **Prisma ORM:** Type-safe database ORM for structured data modeling and efficient queries.  
- **Clerk Authentication:** Comprehensive authentication and user management system.  
- **Inngest:** Event-driven background job processing platform for reliable asynchronous workflows.  
- **Gemini API:** Google's advanced generative AI model for NLP, resume parsing, and recommendations.  
- **Shadcn UI:** Customizable React component library built on Radix UI primitives.  
- **Tailwind CSS:** Utility-first CSS framework for responsive design.  

**Deployment:** The platform is deployed on **Vercel**, leveraging edge computing and a global CDN for optimal performance. The serverless architecture (Neon DB, Inngest) ensures cost-effectiveness through pay-per-usage billing, while industry-standard tools ensure maintainability and productivity.

---

## **5. APPLICATION DOMAIN (≈100 Words)**

The AI Career Coach platform serves multiple real-world applications and user segments.

### **Primary Users**
- College students seeking post-graduation career guidance.  
- Professionals transitioning careers or seeking advancement.  
- Job seekers requiring resume optimization and interview preparation.  
- Educational institutions providing scalable career counseling.  

### **Key Applications**
- Resume analysis with AI-powered improvement suggestions.  
- Mock interview preparation with intelligent feedback.  
- Personalized career path recommendations based on skills and market trends.  
- Real-time industry insights and job market analysis (updated every 7 days).  
- Skill gap identification with tailored learning resource recommendations.  
- Professional development progress tracking.  

---

## **6. EXPECTED OUTCOME (≈70 Words)**

Upon successful implementation, the following outcomes are expected:
- Fully functional web application with secure authentication and personalized profiles.  
- AI-powered resume analysis with actionable feedback.  
- Intelligent career path recommendation engine.  
- Mock interview simulation with AI-generated questions and evaluation.  
- Real-time industry insights dashboard.  
- Skill gap analysis with learning resource recommendations.  
- Scalable architecture supporting thousands of concurrent users.  
- Intuitive, accessible user interface.  
- Background job processing for AI operations.  
- Comprehensive user progress tracking system.  

---

## **7. REFERENCES**

1. Google AI for Developers. (2025). *Gemini API Documentation.* [https://ai.google.dev/gemini-api/docs](https://ai.google.dev/gemini-api/docs)  
2. Vercel. (2025). *Next.js Documentation – App Router.* [https://nextjs.org/docs](https://nextjs.org/docs)  
3. Clerk Inc. (2025). *Clerk Authentication for Next.js.* [https://clerk.com/docs/nextjs](https://clerk.com/docs/nextjs)  
4. Neon. (2025). *Neon Serverless Postgres Documentation.* [https://neon.tech/docs](https://neon.tech/docs)  
5. Prisma. (2025). *Prisma ORM Documentation.* [https://www.prisma.io/docs](https://www.prisma.io/docs)  
6. Inngest. (2025). *Inngest Workflow Engine Documentation.* [https://www.inngest.com/docs](https://www.inngest.com/docs)  
7. Shadcn. (2025). *Shadcn UI Component Library.* [https://ui.shadcn.com](https://ui.shadcn.com)  
8. Tailwind Labs. (2025). *Tailwind CSS Documentation.* [https://tailwindcss.com/docs](https://tailwindcss.com/docs)  
9. Agarwal, P. (2025). *AI Career Coach GitHub Repository.* [https://github.com/piyush-eon/ai-career-coach](https://github.com/piyush-eon/ai-career-coach)  
10. *International Research Journal of Modernization in Engineering Technology and Science.* (2024). *SENSEAI – AI Career Coach: A Full Stack Implementation Study.* IRJMETS Journal.  

---

> **Note:** This synopsis is prepared following the guidelines provided by *Prashanti Institute of Technology & Science* for Minor Project submission. All sections follow the prescribed word limits and formatting requirements.
