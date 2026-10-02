// Centralized Static Data Source for TechTide Corporate LLP

export const ServicesData = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web & Custom Software Engineering",
    category: "Development",
    shortDesc: "High-performance web applications built with Next.js, React, Node.js, and serverless architectures.",
    fullDesc: "We build scalable, secure, and resilient web software designed for high traffic and enterprise performance. From modern headless web platforms to complex internal business portals, our engineering team ensures lightning-fast load speeds, SEO optimization, and seamless user experiences.",
    icon: "CodeIcon",
    image: "/assets/Api.webp",
    features: [
      "Next.js SSG & App Router Architecture",
      "Headless CMS Integration (Sanity, Strapi)",
      "High-Availability Cloud Hosting (AWS, Hetzner, Vercel)",
      "REST & GraphQL API Engineering",
      "Sub-second Load Speeds & Core Web Vitals Optimization",
    ],
    outcomes: [
      "Up to 4x faster page load times",
      "99.9% application uptime guarantee",
      "Higher Google search rankings & organic conversions",
    ],
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    title: "Mobile App Development",
    category: "Development",
    shortDesc: "Cross-platform iOS and Android mobile apps engineered for fluid performance and offline usability.",
    fullDesc: "Reach your users on mobile with native-grade iOS and Android apps built with React Native and Flutter. We craft intuitive user interfaces, secure biometric authentication, offline synchronization, and push notification ecosystems.",
    icon: "DeviceMobileIcon",
    image: "/assets/lead-generation-service-in-pan-india-digital-marketing-1000x1000.webp",
    features: [
      "Single Codebase iOS & Android Apps",
      "Biometric Security & Encrypted Local Storage",
      "Real-time Push Notifications & Deep Linking",
      "Offline-first Architecture with Sync",
      "App Store & Google Play Publishing",
    ],
    outcomes: [
      "4.8+ App Store rating design standards",
      "Reduced development cost by up to 40% with cross-platform build",
      "Seamless backend API integration",
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    category: "Automation",
    shortDesc: "Intelligent agent systems, custom LLM pipelines, and automated business workflows.",
    fullDesc: "Transform manual business operations into automated digital workflows. We build custom AI assistants, automated document processors, customer support bots, and system-to-system integrations.",
    icon: "CpuIcon",
    image: "/assets/Automation.webp",
    features: [
      "Custom RAG & Enterprise Search Pipelines",
      "LLM Agent Integration (OpenAI, Claude, Llama)",
      "Automated Lead & CRM Workflows",
      "Web Scrapers & Data Extraction Bots",
      "API Orchestration & Webhooks",
    ],
    outcomes: [
      "70% reduction in manual data entry tasks",
      "24/7 instant response customer support bots",
      "Accelerated sales pipeline processing",
    ],
  },
  {
    id: "saas-engineering",
    slug: "saas-engineering",
    title: "SaaS Product Engineering",
    category: "Development",
    shortDesc: "End-to-end multi-tenant SaaS architecture, subscription billing, and scale infrastructure.",
    fullDesc: "Turn your product vision into a scalable enterprise SaaS. We architect multi-tenant databases, Stripe/Razorpay subscription engines, RBAC permission models, and analytics dashboards.",
    icon: "RocketLaunchIcon",
    image: "/assets/SAAS Image (1).webp",
    features: [
      "Multi-tenant Database Architecture",
      "Stripe & International Payment Gateways",
      "Role-Based Access Control (RBAC)",
      "Usage-based Billing & Metering",
      "User Analytics & Admin Dashboards",
    ],
    outcomes: [
      "Rapid MVP launch in 8-12 weeks",
      "Scalable infrastructure ready for 100k+ active users",
      "Enterprise SOC2-ready security patterns",
    ],
  },
  {
    id: "seo-marketing",
    slug: "seo-marketing",
    title: "SEO & Growth Marketing",
    category: "Marketing",
    shortDesc: "Technical SEO audits, programmatic content engines, and data-driven lead generation.",
    fullDesc: "Dominate search results and convert organic traffic into qualified sales opportunities. Our technical SEO strategies combine schema optimization, keyword strategy, and landing page conversion design.",
    icon: "TrendUpIcon",
    image: "/assets/SEO Marketing.webp",
    features: [
      "Full Technical SEO Audit & Remediation",
      "Programmatic SEO Page Generation",
      "Keyword Strategy & Competitor Analysis",
      "Conversion Rate Optimization (CRO)",
      "Schema Markup & Structured Data",
    ],
    outcomes: [
      "3x to 5x increase in qualified inbound leads",
      "Higher domain authority & search ranking",
      "Lower cost-per-acquisition (CPA)",
    ],
  },
  {
    id: "cloud-infrastructure",
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure & DevOps",
    category: "Business Growth",
    shortDesc: "Containerized deployments, serverless architecture, CI/CD pipelines, and 99.9% uptime SLA.",
    fullDesc: "Ensure your infrastructure is automated, cost-efficient, and bulletproof. We configure Docker, Kubernetes, Nginx, AWS, GCP, and automated CI/CD deployments for zero-downtime releases.",
    icon: "CloudIcon",
    image: "/assets/Ongoing Maintenance & Support.webp",
    features: [
      "Automated CI/CD Deployment Pipelines",
      "Docker & Kubernetes Container Orchestration",
      "Cloud Security & Firewall Hardening",
      "Serverless & Auto-scaling Setup",
      "24/7 Monitoring & Automated Backups",
    ],
    outcomes: [
      "Zero-downtime deployment releases",
      "Optimized cloud server bill by up to 30%",
      "Automated disaster recovery protocols",
    ],
  },
];

export const BlogData = [
  {
    slug: "nextjs-16-static-export-guide",
    title: "Why Next.js 16 Static Export Is The Ultimate Setup For Speed & SEO",
    excerpt: "Explore how pre-rendering static HTML pages provides unmatched load performance, zero server downtime, and optimal search ranking.",
    content: "Static site generation (SSG) in Next.js 16 combines pre-rendered HTML speed with rich interactive client components...",
    date: "Sep 24, 2026",
    readTime: "5 min read",
    category: "Engineering",
    image: "/assets/SEO.webp",
    author: "Rohan Kapoor",
  },
  {
    slug: "building-ai-agents-for-enterprise-workflows",
    title: "How Enterprise Companies Are Saving 100+ Hours With Custom AI Agents",
    excerpt: "A practical breakdown of integrating LLM workflows, automated data extraction, and CRM webhooks for corporate teams.",
    content: "Custom AI agents automate routine enterprise tasks ranging from lead scoring to automated email response engines...",
    date: "Sep 18, 2026",
    readTime: "7 min read",
    category: "AI & Automation",
    image: "/assets/Automation.webp",
    author: "Sneha Reddi",
  },
  {
    slug: "saas-multi-tenant-database-architecture",
    title: "Architecting Multi-Tenant SaaS Systems For Scale & Security",
    excerpt: "Key design patterns for database isolation, role-based access control (RBAC), and subscription metering in modern web software.",
    content: "Multi-tenant database architectures ensure privacy and security while keeping infrastructure costs manageable...",
    date: "Sep 10, 2026",
    readTime: "6 min read",
    category: "SaaS",
    image: "/assets/Dashboard-Growth.webp",
    author: "Rohan Kapoor",
  },
];

export const ProjectsData = [
  {
    id: "raynova-tech",
    title: "Raynova Tech Cloud Platform",
    category: "SaaS Engineering",
    desc: "Multi-tenant cloud management platform built with Next.js static export & microservices backend.",
    image: "/assets/raynova-tech.webp",
    tags: ["Next.js", "Tailwind CSS", "AWS"],
  },
  {
    id: "aura-commerce",
    title: "Aura Commerce Storefront",
    category: "Web & E-Commerce",
    desc: "Headless e-commerce storefront delivering sub-second page loads and 45% higher checkout conversions.",
    image: "/assets/aura-commerce.webp",
    tags: ["Headless CMS", "Stripe", "GraphQL"],
  },
  {
    id: "sereniva-ai",
    title: "Sereniva Healthcare AI",
    category: "AI & Automation",
    desc: "Automated patient intake and records categorization powered by custom LLM agent pipelines.",
    image: "/assets/sereniva.webp",
    tags: ["AI Agents", "Python", "React Native"],
  },
  {
    id: "nexus-portal",
    title: "Nexus Enterprise Portal",
    category: "Custom Software",
    desc: "Internal enterprise portal managing real-time analytics, permissions, and automated reporting.",
    image: "/assets/nexus.webp",
    tags: ["React 19", "Node.js", "Docker"],
  },
];

export const LeadershipData = [
  {
    id: "rohan-kapoor",
    name: "Rohan Kapoor",
    role: "Managing Director & CEO",
    bio: "12+ years leading enterprise digital transformations and cloud architecture strategies.",
    image: "/assets/businesswoman-working-laptop.jpg (1).webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "rohan@techtide.co",
  },
  {
    id: "sneha-reddi",
    name: "Sneha Reddi",
    role: "Chief Technology Officer",
    bio: "Former Principal Architect specializing in full-stack Next.js systems, AI automation & cloud DevOps.",
    image: "/assets/top-viewtop-view-manager-employee-doing-teamwork-business-office-looking-charts-laptop-display.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "sneha@techtide.co",
  },
  {
    id: "wade-warren",
    name: "Wade Warren",
    role: "Marketing Coordinator",
    bio: "Strategic marketing professional with 8+ years driving digital growth.",
    image: "/assets/branding-strategy-marketing-business-graphic-design.webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "wade@techtide.co",
  },
  {
    id: "bessie-cooper",
    name: "Bessie Cooper",
    role: "Web Designer",
    bio: "Award-winning UI/UX designer crafting beautiful, user-centric interfaces.",
    image: "/assets/businesswoman-working-laptop.jpg (1).webp",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "bessie@techtide.co",
  },
];

export const TestimonialsData = [
  {
    id: "raynova",
    quote:
      "TechTide completely transformed our web application. The sub-second static load times tripled our organic conversions within the first 60 days of launch.",
    author: "Vikram Mehta",
    role: "CTO, Raynova Technologies",
    company: "Raynova Tech",
    rating: 5,
  },
  {
    id: "aura",
    quote:
      "The AI automation system designed by TechTide streamlined our entire inbound lead processing workflow. Our team saves over 25 hours every single week.",
    author: "Ananya Sharma",
    role: "VP of Product, Aura Commerce",
    company: "Aura Commerce",
    rating: 5,
  },
  {
    id: "sereniva",
    quote:
      "Outstanding engineering quality and communication. They shipped our complex multi-tenant SaaS MVP 2 weeks ahead of our scheduled investor demo.",
    author: "David Miller",
    role: "Founder, Sereniva Cloud",
    company: "Sereniva",
    rating: 5,
  },
];

export const TechStackData = [
  { name: "React", icon: "/assets/react-logo.svg", category: "UI Library" },
  { name: "Next.js", icon: "/assets/next.js-logo.svg", category: "Frontend & SSR" },
  { name: "WordPress", icon: "/assets/wordpress-logo.svg", category: "CMS" },
  { name: "MongoDB", icon: "/assets/mongodb-logo.svg", category: "Database" },
  { name: "Express.js", icon: "/assets/express-js-logo.svg", category: "Backend Framework" },
  { name: "Node.js", icon: "/assets/nodejs-logo.svg", category: "Backend Runtime" },
  { name: "TypeScript", icon: "/assets/typescript-logo.svg", category: "Type Safety" },
  { name: "AWS", icon: "/assets/aws-logo.svg", category: "Infrastructure" },
  { name: "Claude", icon: "/assets/claude-ai-logo.svg", category: "AI & LLMs" },
  { name: "Stripe", icon: "/assets/stripe-logo.svg", category: "Payments" },
  { name: "React Native", icon: "/assets/react-native-logo.svg", category: "Mobile Apps" },
];

export const HowWeWorkData = [
  {
    num: "01",
    title: "Discovery & Architecture",
    desc: "We analyze your business goals, target audience, technical requirements, and system architecture to design a bulletproof execution plan.",
    icon: "MagnifyingGlassIcon",
  },
  {
    num: "02",
    title: "Agile Development Sprints",
    desc: "Our engineers build your solution in rapid, transparent 2-week sprints with continuous staging previews and feedback loops.",
    icon: "CodeIcon",
  },
  {
    num: "03",
    title: "Testing & Launch Export",
    desc: "Rigorous QA testing, accessibility verification, core web vitals optimization, and static deployment to high-availability CDN nodes.",
    icon: "RocketLaunchIcon",
  },
  {
    num: "04",
    title: "Scale & Ongoing Optimization",
    desc: "We monitor performance, continuously optimize conversion rates, and implement feature enhancements as your user base grows.",
    icon: "TrendUpIcon",
  },
];

export const WhyChooseUsData = [
  {
    title: "Agile Development Cycles",
    desc: "Fast 2-week sprint cadences with complete transparency, daily updates, and continuous integration deployments.",
    icon: "LightningIcon",
  },
  {
    title: "Senior Engineering Talent",
    desc: "Work directly with battle-tested software architects and developers — no junior handoffs or offshore outsourcing traps.",
    icon: "UsersThreeIcon",
  },
  {
    title: "Enterprise SLA & Security",
    desc: "Strict adherence to SOC2 and OWASP web security standards, automated code audits, and guaranteed 99.9% uptime SLA.",
    icon: "ShieldCheckIcon",
  },
  {
    title: "Clean, Maintainable Codebase",
    desc: "Well-documented, fully modular React/Next.js and backend code that your internal team can easily scale and maintain.",
    icon: "CodeIcon",
  },
  {
    title: "Data-Driven ROI Focus",
    desc: "We measure success by performance metrics, user conversion rates, and revenue impact — not just lines of code.",
    icon: "TrendUpIcon",
  },
  {
    title: "Dedicated Support & SLA",
    desc: "Post-launch maintenance, 24/7 incident response, and proactive system upgrades to keep your stack cutting-edge.",
    icon: "HeadsetIcon",
  },
];

export const NavbarServicesData = [
  {
    title: "Web & Custom Software",
    desc: "Tailored web applications built with Next.js, React & scalable cloud architecture.",
    href: "/services/web-development",
    iconName: "CodeIcon",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android apps crafted for maximum user engagement.",
    href: "/services/mobile-apps",
    iconName: "DeviceMobileIcon",
  },
  {
    title: "AI & Automation Systems",
    desc: "Intelligent workflows, chatbot integration, and automated enterprise operations.",
    href: "/services/ai-automation",
    iconName: "CpuIcon",
  },
  {
    title: "SaaS Product Engineering",
    desc: "End-to-end multi-tenant SaaS architecture from product design to high availability.",
    href: "/services/saas-engineering",
    iconName: "RocketLaunchIcon",
  },
  {
    title: "SEO & Growth Marketing",
    desc: "Data-driven organic strategy, conversion optimization, and brand scaling.",
    href: "/services/seo-marketing",
    iconName: "TrendUpIcon",
  },
  {
    title: "Cloud & DevOps Infrastructure",
    desc: "CI/CD pipelines, AWS/GCP migration, serverless design, and 99.9% uptime SLA.",
    href: "/services/cloud-infrastructure",
    iconName: "CloudIcon",
  },
];

export const NavbarAboutData = [
  {
    title: "About TechTide",
    desc: "Learn about our journey, culture, and core mission.",
    href: "/about",
    iconName: "BuildingsIcon",
  },
  {
    title: "Company Profile",
    desc: "Legal details, global reach, and corporate structure.",
    href: "/company-profile",
    iconName: "TargetIcon",
  },
  {
    title: "Leadership Team",
    desc: "Meet the strategists and engineers powering TechTide.",
    href: "/about#leadership",
    iconName: "UsersThreeIcon",
  },
];
