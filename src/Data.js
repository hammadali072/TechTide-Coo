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
    tagline: "High-performance full-stack web applications engineered for sub-second speed, SEO, and enterprise scalability.",
    stats: [
      { value: "4x", label: "Faster page loads" },
      { value: "99.9%", label: "Uptime guarantee" },
      { value: "<1s", label: "Average Core Web Vitals" },
    ],
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
    benefits: [
      {
        icon: "LightningIcon",
        title: "Sub-Second Performance",
        desc: "Serverless edge rendering and optimized asset delivery for instant interactions and higher conversions.",
      },
      {
        icon: "ShieldCheckIcon",
        title: "Enterprise Grade Security",
        desc: "Rigorous input sanitization, OWASP compliance, and zero-trust authentication workflows.",
      },
      {
        icon: "ArrowsClockwiseIcon",
        title: "Headless CMS Agility",
        desc: "Editorial teams publish freely through Sanity or Strapi without requiring developer deployments.",
      },
      {
        icon: "ChartLineUpIcon",
        title: "Search Engine Dominance",
        desc: "Engineered from the ground up with structured schema validation and high organic indexation.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Architecture & Discovery",
        desc: "We audit domain requirements, map user flows, and plan the tech stack, API boundaries, and database schema.",
      },
      {
        num: "02",
        title: "UI/UX & Component System",
        desc: "Interactive Figma design systems converted into responsive, accessible, atomic Tailwind CSS components.",
      },
      {
        num: "03",
        title: "Full-Stack Engineering",
        desc: "Next.js App Router implementation with type-safe APIs, caching layers, and automated unit testing.",
      },
      {
        num: "04",
        title: "Deployment & Optimization",
        desc: "Staging rollout, Lighthouse 95+ performance tuning, automated CI/CD pipeline, and zero-downtime DNS cutover.",
      },
    ],
    deliverables: [
      "Full production source code & Git repository",
      "Headless CMS configured with custom content models",
      "Production deployment pipeline on Vercel or AWS",
      "Core Web Vitals & technical SEO compliance audit",
      "Architecture documentation & engineering handover",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Sanity CMS"],
    faqs: [
      {
        question: "How long does a custom web engineering project typically take?",
        answer: "Most production web applications are delivered in 6 to 12 weeks depending on scope, third-party integrations, and whether a headless CMS or custom backend is required.",
      },
      {
        question: "Can you modernize or rebuild an existing legacy website?",
        answer: "Yes. We frequently migrate legacy WordPress, PHP, or monolithic systems into modern Next.js and headless stacks while preserving all existing SEO equity and URLs.",
      },
      {
        question: "How do you ensure sub-second page load times?",
        answer: "We utilize static generation (SSG), server-side rendering at the edge, WebP image compression, automated asset bundling, and minimal third-party script overhead.",
      },
      {
        question: "Do we retain full ownership of the source code?",
        answer: "100%. Upon project completion, all intellectual property, Git repositories, designs, and deployment credentials belong entirely to your company.",
      },
    ],
    relatedSlugs: ["saas-engineering", "mobile-apps", "cloud-infrastructure"],
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
    tagline: "Native-grade iOS & Android applications engineered for fluid 60 FPS performance and offline reliability.",
    stats: [
      { value: "40%", label: "Development cost saved" },
      { value: "4.8+", label: "App Store design rating" },
      { value: "60 FPS", label: "Fluid frame rate standard" },
    ],
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
    benefits: [
      {
        icon: "DeviceMobileIcon",
        title: "Single Codebase Velocity",
        desc: "Build once and deploy seamlessly to both Apple App Store and Google Play Store without duplicate teams.",
      },
      {
        icon: "LockKeyIcon",
        title: "Biometric Security",
        desc: "Hardware-backed FaceID, TouchID, and encrypted on-device keychain storage for sensitive credentials.",
      },
      {
        icon: "ArrowsClockwiseIcon",
        title: "Offline-First Sync",
        desc: "Local SQLite storage ensuring uninterrupted user workflow even during patchy network connections.",
      },
      {
        icon: "SparkleIcon",
        title: "Push Notification Ecosystem",
        desc: "Custom notification strategies and segmented automated triggers that dramatically lift user retention.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Mobile UX Wireframing",
        desc: "Platform-specific Human Interface Guidelines and Material Design wireframes optimized for thumb ergonomics.",
      },
      {
        num: "02",
        title: "Cross-Platform Build",
        desc: "React Native engineering with native bridge bindings, state management, and smooth screen transitions.",
      },
      {
        num: "03",
        title: "Device & Stress Testing",
        desc: "Rigorous testing across physical iOS and Android viewports, low-connectivity throttling, and memory profiles.",
      },
      {
        num: "04",
        title: "Store Submission & Launch",
        desc: "Full management of Apple App Store Review and Google Play Console guidelines, certificates, and release tracks.",
      },
    ],
    deliverables: [
      "Compiled iOS (.ipa) & Android (.aab) binaries",
      "Cross-platform React Native source repository",
      "Store asset kit (icons, splash screens, privacy manifests)",
      "Push notification service setup (Firebase/OneSignal)",
      "Offline sync test suite & release documentation",
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Expo", "Firebase", "Redux Toolkit", "SQLite"],
    faqs: [
      {
        question: "Should we build cross-platform or native iOS and Android apps?",
        answer: "For over 90% of business and consumer applications, modern cross-platform frameworks like React Native deliver identical 60 FPS performance while cutting development and maintenance costs by 40%.",
      },
      {
        question: "Do you handle the Apple App Store and Google Play Store submission?",
        answer: "Yes. We manage certificates, privacy manifests, screenshots, app descriptions, and address any reviewer inquiries until your application is approved and live.",
      },
      {
        question: "Can the app function when users lose internet connection?",
        answer: "Yes. We design offline-first databases that cache user interactions locally and sync seamlessly with the backend once connectivity resumes.",
      },
      {
        question: "How do you handle post-launch mobile updates?",
        answer: "We support over-the-air (OTA) updates for JavaScript bundles so critical bug fixes and content updates can be pushed without waiting for app store review delays.",
      },
    ],
    relatedSlugs: ["web-development", "saas-engineering", "cloud-infrastructure"],
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
    tagline: "Intelligent LLM pipelines, autonomous agent systems, and automated enterprise workflows.",
    stats: [
      { value: "70%", label: "Manual task reduction" },
      { value: "24/7", label: "Autonomous response time" },
      { value: "10x", label: "Data extraction speed" },
    ],
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
    benefits: [
      {
        icon: "RobotIcon",
        title: "Enterprise RAG Pipelines",
        desc: "Connect private corporate knowledge bases securely to leading LLMs without exposing confidential data.",
      },
      {
        icon: "LightningIcon",
        title: "Workflow Orchestration",
        desc: "Eliminate repetitive paperwork, CRM data hygiene chores, and invoice reconciliation across departments.",
      },
      {
        icon: "DatabaseIcon",
        title: "Intelligent Data Extraction",
        desc: "Extract structured data instantly from PDFs, emails, spreadsheets, and scanned receipts with high accuracy.",
      },
      {
        icon: "ShieldCheckIcon",
        title: "PII Redaction & Guardrails",
        desc: "Strict compliance guardrails ensuring sensitive customer details and credentials never leak to public models.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Operational Bottleneck Audit",
        desc: "We analyze team time logs, identify repetitive manual bottlenecks, and calculate ROI for target workflows.",
      },
      {
        num: "02",
        title: "Pipeline & Agent Architecture",
        desc: "Vector database indexing, context window optimization, and prompt engineering with evaluation benchmarks.",
      },
      {
        num: "03",
        title: "System Integration",
        desc: "Connecting AI agents into your CRM, ERP, Slack, ticketing systems, and transactional databases.",
      },
      {
        num: "04",
        title: "Human-in-the-Loop Rollout",
        desc: "Staged deployment with review interfaces, accuracy monitoring, and fallback routing for edge cases.",
      },
    ],
    deliverables: [
      "Production-ready AI agent or workflow pipeline",
      "Vector database & embeddings configuration",
      "Webhook & CRM integration connectors",
      "Accuracy evaluation dataset & benchmark report",
      "Operator manual and guardrail guidelines",
    ],
    technologies: ["Python", "LangChain", "OpenAI API", "Claude Anthropic", "Pinecone", "n8n", "FastAPI"],
    faqs: [
      {
        question: "Is our proprietary company data used to train public AI models?",
        answer: "Never. We use enterprise API agreements and self-hosted vector databases where zero customer data is retained or used for foundational model training.",
      },
      {
        question: "What kind of tasks can be automated with AI workflows?",
        answer: "Customer support triage, sales lead enrichment, invoice data extraction, document summarization, automated compliance checks, and cross-system database syncs.",
      },
      {
        question: "How accurate are custom RAG and LLM systems?",
        answer: "By grounding responses in your validated documentation and employing multi-step verification checks, we routinely achieve 95%+ precision on domain queries.",
      },
      {
        question: "Can the automation connect to our existing tools?",
        answer: "Yes. We connect with HubSpot, Salesforce, Slack, Notion, Airtable, Google Workspace, and any platform offering a REST API or webhook interface.",
      },
    ],
    relatedSlugs: ["saas-engineering", "web-development", "cloud-infrastructure"],
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
    tagline: "End-to-end multi-tenant SaaS architecture engineered to scale from MVP to thousands of paying accounts.",
    stats: [
      { value: "8-12 wks", label: "MVP launch timeline" },
      { value: "100k+", label: "Concurrent user scale" },
      { value: "SOC2", label: "Security compliance standard" },
    ],
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
    benefits: [
      {
        icon: "RocketLaunchIcon",
        title: "Multi-Tenant Isolation",
        desc: "Robust data partitioning, schema isolation, and tenant-scoped security controls protecting customer data.",
      },
      {
        icon: "LockKeyIcon",
        title: "Complex Billing Models",
        desc: "Seat-based, usage-metered, and tiered subscription billing powered by Stripe with customer self-serve portals.",
      },
      {
        icon: "UsersThreeIcon",
        title: "Granular RBAC",
        desc: "Enterprise role permissions, invite flows, team workspaces, and SSO / SAML readiness for high-ACV deals.",
      },
      {
        icon: "ChartLineUpIcon",
        title: "Real-Time Telemetry",
        desc: "Built-in user analytics, churn telemetry, revenue metrics, and super-admin management dashboards.",
      },
    ],
    process: [
      {
        num: "01",
        title: "SaaS Product Blueprint",
        desc: "Specification of pricing tiers, data partitioning strategy, user roles, and core product journey wireframes.",
      },
      {
        num: "02",
        title: "Foundation & Auth Setup",
        desc: "Multi-tenant auth, workspace scoping, database indexing, and Stripe webhook infrastructure.",
      },
      {
        num: "03",
        title: "Core Feature Engineering",
        desc: "Rapid sprint-based delivery of domain features, background task queues, and team collaboration tools.",
      },
      {
        num: "04",
        title: "Launch & Load Testing",
        desc: "Automated test suites, simulated concurrency stress testing, monitoring setup, and production launch.",
      },
    ],
    deliverables: [
      "Complete multi-tenant SaaS codebase",
      "Stripe subscription & customer portal integration",
      "Super-admin dashboard & tenant management portal",
      "Database migration scripts & seed factories",
      "Production deployment on auto-scaling cloud",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe", "Redis", "Docker", "Tailwind CSS"],
    faqs: [
      {
        question: "How fast can you build and launch an MVP SaaS product?",
        answer: "Our standard MVP delivery timeline is 8 to 12 weeks. We prioritize core monetization features and user onboarding so you can validate with real paying customers quickly.",
      },
      {
        question: "How do you handle multi-tenant data privacy?",
        answer: "We employ tenant-isolated row-level security (RLS) and schema scoping so tenant data can never bleed across accounts, meeting enterprise compliance standards.",
      },
      {
        question: "Can we support both recurring subscriptions and usage-based billing?",
        answer: "Yes. We configure Stripe billing meters and webhooks to support flat-rate plans, per-seat pricing, and variable usage consumption with automated proration.",
      },
      {
        question: "Is the architecture ready for high user traffic?",
        answer: "Our SaaS architectures are built on stateless containers, Redis caching, and indexed PostgreSQL instances capable of supporting 100k+ active users effortlessly.",
      },
    ],
    relatedSlugs: ["web-development", "cloud-infrastructure", "ai-automation"],
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
    tagline: "Technical SEO audits, programmatic content infrastructure, and data-driven organic customer acquisition.",
    stats: [
      { value: "3x-5x", label: "Inbound lead increase" },
      { value: "100%", label: "Technical SEO pass rate" },
      { value: "Top 3", label: "Target search position" },
    ],
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
    benefits: [
      {
        icon: "ChartLineUpIcon",
        title: "Programmatic Landing Pages",
        desc: "Safely scale your indexed footprint with high-quality templated landing pages and dynamic structured schema.",
      },
      {
        icon: "LightningIcon",
        title: "Technical Hygiene Fixes",
        desc: "Crawl budget optimization, canonical resolution, internal link graph cleanup, and instant Google indexing.",
      },
      {
        icon: "GraphIcon",
        title: "Conversion Architecture",
        desc: "Turn organic traffic into booked discovery calls with friction-free lead capture UX and trust elements.",
      },
      {
        icon: "GlobeIcon",
        title: "Competitor Displacement",
        desc: "Identify and exploit high-intent search gaps where your company can systematically outrank incumbents.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Technical & Content Audit",
        desc: "Exhaustive crawl analysis identifying indexation blockers, thin content, broken links, and schema gaps.",
      },
      {
        num: "02",
        title: "Keyword & Intent Mapping",
        desc: "Clustering commercial intent keywords and structuring optimal URL hierarchies and internal link maps.",
      },
      {
        num: "03",
        title: "On-Page & Schema Implementation",
        desc: "Structured JSON-LD schema injection, metadata automation, semantic HTML fixes, and Core Web Vitals tuning.",
      },
      {
        num: "04",
        title: "Rank Tracking & Iteration",
        desc: "Continuous monitoring via Google Search Console and analytics with quarterly growth reviews.",
      },
    ],
    deliverables: [
      "Comprehensive technical SEO diagnostic report",
      "Clean JSON-LD schema implementation",
      "Programmatic page generation templates",
      "Target keyword map and content roadmap",
      "Google Analytics 4 & Search Console configuration",
    ],
    technologies: ["Google Search Console", "Ahrefs", "Semrush", "Screaming Frog", "Schema.org", "Next.js SEO", "GA4"],
    faqs: [
      {
        question: "How soon can we expect organic search ranking improvements?",
        answer: "Technical fixes and indexation corrections often show positive crawl signals within 2 to 4 weeks, with significant organic traffic and keyword improvements scaling at the 3 to 6 month mark.",
      },
      {
        question: "What is programmatic SEO?",
        answer: "Programmatic SEO generates hundreds of unique, high-intent landing pages using structured databases (e.g. integrations, location pages, or industry solutions) that capture long-tail organic search volume.",
      },
      {
        question: "How do you measure SEO success?",
        answer: "We track organic impressions, top-10 keyword positions, organic CTR, and most importantly, qualified conversion events and form inquiries.",
      },
      {
        question: "Do you also optimize existing blog posts and content?",
        answer: "Yes. We perform content gap audits, update outdated statistics, optimize heading hierarchies, and insert high-value internal links to boost authority.",
      },
    ],
    relatedSlugs: ["web-development", "saas-engineering", "mobile-apps"],
  },
  {
    id: "cloud-infrastructure",
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure & DevOps",
    category: "Infrastructure",
    shortDesc: "Containerized deployments, serverless architecture, CI/CD pipelines, and 99.9% uptime SLA.",
    fullDesc: "Ensure your infrastructure is automated, cost-efficient, and bulletproof. We configure Docker, Kubernetes, Nginx, AWS, GCP, and automated CI/CD deployments for zero-downtime releases.",
    icon: "CloudIcon",
    image: "/assets/Ongoing Maintenance & Support.webp",
    tagline: "Automated CI/CD pipelines, containerized orchestration, and cost-optimized cloud architectures.",
    stats: [
      { value: "99.9%", label: "Uptime SLA standard" },
      { value: "30%", label: "Cloud spend reduction" },
      { value: "0", label: "Downtime during deployments" },
    ],
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
    benefits: [
      {
        icon: "CloudIcon",
        title: "Zero-Downtime Releases",
        desc: "Blue-green and canary deployment pipelines that release updates without disrupting active user sessions.",
      },
      {
        icon: "ShieldCheckIcon",
        title: "Hardened Security Bastion",
        desc: "VPC network segmentation, TLS enforcement, WAF firewalls, and least-privilege IAM access policies.",
      },
      {
        icon: "HardDrivesIcon",
        title: "Container Orchestration",
        desc: "Docker and Kubernetes setups that auto-scale during peak traffic surges and scale down during quiet hours.",
      },
      {
        icon: "InfinityIcon",
        title: "Disaster Recovery Protocols",
        desc: "Automated database snapshotting, multi-region replication, and verified 15-minute recovery point objectives.",
      },
    ],
    process: [
      {
        num: "01",
        title: "Infrastructure & Security Audit",
        desc: "Reviewing current topology, security vulnerabilities, single points of failure, and cloud billing waste.",
      },
      {
        num: "02",
        title: "IaC & Pipeline Design",
        desc: "Codifying infrastructure with Terraform / Docker and designing GitHub Actions CI/CD workflows.",
      },
      {
        num: "03",
        title: "Zero-Downtime Migration",
        desc: "Staged database replication, SSL provisioning, health checks, and zero-loss production traffic cutover.",
      },
      {
        num: "04",
        title: "Telemetry & SRE Setup",
        desc: "Deploying Prometheus, Grafana, and automated alert thresholds for proactive incident prevention.",
      },
    ],
    deliverables: [
      "Infrastructure as Code (Terraform / Docker Compose)",
      "Automated GitHub Actions CI/CD pipelines",
      "Centralized logging and metrics dashboard",
      "Hardened firewall and IAM configuration",
      "Disaster recovery runbook and rollback plan",
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Nginx", "PostgreSQL"],
    faqs: [
      {
        question: "Can you help reduce our existing AWS or cloud hosting bill?",
        answer: "Yes. Our cloud audits typically identify 20% to 35% in monthly savings by right-sizing instances, eliminating idle provisioned capacity, and implementing auto-scaling.",
      },
      {
        question: "How do you achieve zero-downtime deployments?",
        answer: "We use containerized blue-green and rolling deployments with health checks. New versions must pass internal verification before incoming traffic is routed to them.",
      },
      {
        question: "Which cloud providers do you support?",
        answer: "We have deep engineering experience with Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, DigitalOcean, and dedicated Hetzner clusters.",
      },
      {
        question: "What happens if a server fails in the middle of the night?",
        answer: "Our architectures feature self-healing auto-recovery where failed containers or nodes are instantly replaced, paired with 24/7 automated alerting to on-call engineers.",
      },
    ],
    relatedSlugs: ["saas-engineering", "web-development", "ai-automation"],
  },
];

// Replace the existing `BlogData` export in src/Data.js with this block.
// Optional helpers are included at the bottom.

export const BlogData = [
  {
    slug: "nextjs-16-static-export-guide",
    title: "Why Next.js 16 Static Export Is The Ultimate Setup For Speed & SEO",
    excerpt:
      "Explore how pre-rendering static HTML pages provides unmatched load performance, zero server downtime, and optimal search ranking.",
    date: "Sep 24, 2026",
    readTime: "5 min read",
    category: "Engineering",
    image: "/assets/SEO.webp",
    author: "Rohan Kapoor",
    authorRole: "Managing Director & CEO",
    authorBio:
      "12+ years leading enterprise digital transformations and cloud architecture strategies.",
    tags: ["Next.js", "Static Export", "Core Web Vitals", "SEO"],
    keyTakeaways: [
      "Static export ships pre-rendered HTML to a CDN, so there is no server to crash or scale.",
      "Faster first paint and stable layouts directly improve Core Web Vitals and rankings.",
      "Interactive pieces stay possible through small client components and external APIs.",
      "Hosting costs drop sharply because you only pay for storage and bandwidth.",
    ],
    content: [
      {
        type: "paragraph",
        text: "Most marketing sites, company profiles and content hubs do not need a server rendering every request. They need to be fast, reliable and easy for search engines to understand. Next.js static export gives you exactly that: every page is built once, at deploy time, and served as plain files from a CDN.",
      },
      { type: "heading", id: "what-is-static-export", text: "What Static Export Actually Does", level: 2 },
      {
        type: "paragraph",
        text: "When you set the output mode to export, the build step crawls your routes, renders each one to HTML, and writes the result to an output folder. Dynamic routes are expanded ahead of time using generateStaticParams, so a blog with fifty posts becomes fifty ready-made pages.",
      },
      {
        type: "code",
        language: "javascript",
        code: "// next.config.mjs\nconst nextConfig = {\n  output: \"export\",\n  trailingSlash: true,\n  images: { unoptimized: true },\n};\n\nexport default nextConfig;",
      },
      {
        type: "callout",
        title: "Good to know",
        text: "Static export has no runtime server. Features such as cookies, request headers, API routes and on-demand revalidation are unavailable, so plan forms and data fetching around external services.",
      },
      { type: "heading", id: "speed-and-core-web-vitals", text: "Speed and Core Web Vitals", level: 2 },
      {
        type: "paragraph",
        text: "Because the HTML already exists, the browser receives meaningful content on the very first response. There is no waiting on database queries or server-side rendering, which keeps Time to First Byte tiny and Largest Contentful Paint predictable.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Time to First Byte is limited only by CDN edge latency.",
          "Largest Contentful Paint improves when the hero image and text are in the initial HTML.",
          "Cumulative Layout Shift stays low when image dimensions are declared up front.",
          "JavaScript is limited to the components that truly need interactivity.",
        ],
      },
      { type: "heading", id: "seo-advantages", text: "SEO Advantages You Get For Free", level: 2 },
      {
        type: "paragraph",
        text: "Crawlers love complete HTML. Titles, descriptions, headings, structured data and internal links are all present without executing JavaScript, so indexing is faster and more reliable. Combined with per-page metadata, each URL becomes a clean, self-describing document.",
      },
      {
        type: "quote",
        text: "The fastest request is the one your server never has to handle.",
        cite: "Rohan Kapoor, TechTide",
      },
      { type: "heading", id: "reliability-and-cost", text: "Reliability and Cost", level: 2 },
      {
        type: "paragraph",
        text: "A static site has no application server to patch, scale or restart. Traffic spikes are absorbed by the CDN, and a failed deploy simply leaves the previous version live. For most business sites this removes an entire category of incidents and cuts hosting bills dramatically.",
      },
      { type: "heading", id: "keeping-it-interactive", text: "Keeping It Interactive", level: 2 },
      {
        type: "paragraph",
        text: "Static does not mean lifeless. Mark only the interactive parts as client components, such as carousels, accordions and forms, and send data to a CRM, email service or serverless endpoint.",
      },
      {
        type: "list",
        style: "number",
        items: [
          "Keep pages as server components and render them at build time.",
          "Add use client only to components that need state or browser APIs.",
          "Post forms to an external endpoint through an environment variable.",
          "Rebuild and redeploy when content changes, or trigger builds from a CMS webhook.",
        ],
      },
      { type: "heading", id: "when-not-to-use-it", text: "When Not To Use It", level: 2 },
      {
        type: "paragraph",
        text: "If your product depends on per-user pages, real-time data or frequent content edits by non-technical teams without a build pipeline, a hybrid or server-rendered setup is the better fit. For marketing sites, documentation and blogs, static export is hard to beat.",
      },
    ],
    relatedSlugs: [
      "saas-multi-tenant-database-architecture",
      "building-ai-agents-for-enterprise-workflows",
    ],
  },
  {
    slug: "building-ai-agents-for-enterprise-workflows",
    title: "How Enterprise Companies Are Saving 100+ Hours With Custom AI Agents",
    excerpt:
      "A practical breakdown of integrating LLM workflows, automated data extraction, and CRM webhooks for corporate teams.",
    date: "Sep 18, 2026",
    readTime: "7 min read",
    category: "AI & Automation",
    image: "/assets/Automation.webp",
    author: "Sneha Reddi",
    authorRole: "Chief Technology Officer",
    authorBio:
      "Former Principal Architect specializing in full-stack Next.js systems, AI automation & cloud DevOps.",
    tags: ["AI Agents", "LLM", "Automation", "CRM"],
    keyTakeaways: [
      "Start with one repetitive, rules-heavy workflow rather than a general assistant.",
      "Combine an LLM with structured tools, validation and human approval for reliability.",
      "Webhooks connect agents to CRMs, inboxes and internal systems without manual steps.",
      "Measure hours saved and error rates from day one to prove ROI.",
    ],
    content: [
      {
        type: "paragraph",
        text: "Enterprise teams spend a surprising share of their week copying data between tools, triaging inboxes and qualifying leads. Custom AI agents turn those repeatable tasks into background workflows, giving people their time back for work that needs judgement.",
      },
      { type: "heading", id: "what-is-an-ai-agent", text: "What An AI Agent Really Is", level: 2 },
      {
        type: "paragraph",
        text: "An agent is more than a chatbot. It is a language model wrapped with tools it can call, rules it must follow and memory of the task at hand. It reads an input, decides which action to take, executes it through an API, and checks the result before moving on.",
      },
      { type: "heading", id: "high-value-use-cases", text: "High-Value Use Cases", level: 2 },
      {
        type: "list",
        style: "bullet",
        items: [
          "Lead scoring and routing based on form answers and company data.",
          "Automated first-response emails with human review for edge cases.",
          "Document processing: invoices, contracts and onboarding forms.",
          "Support triage that tags, summarizes and escalates tickets.",
          "Web data extraction that feeds clean records into the CRM.",
        ],
      },
      {
        type: "callout",
        title: "Pick one workflow first",
        text: "Teams that launch a single, well-scoped agent usually see value in weeks. Teams that start with a do-everything assistant tend to stall on accuracy and trust.",
      },
      { type: "heading", id: "reference-architecture", text: "A Reference Architecture", level: 2 },
      {
        type: "paragraph",
        text: "A dependable setup has four layers: a trigger such as a webhook or schedule, an orchestration layer that manages steps and retries, the model with a clear system prompt and tool definitions, and an output layer that writes to the CRM, database or inbox.",
      },
      {
        type: "code",
        language: "javascript",
        code: "// Simplified webhook handler\nexport async function handleNewLead(payload) {\n  const lead = validate(payload);          // schema check\n  const score = await agent.scoreLead(lead); // LLM + tools\n  if (score.confidence < 0.7) {\n    return queueForHumanReview(lead, score);\n  }\n  await crm.updateLead(lead.id, { score: score.value });\n}",
      },
      { type: "heading", id: "reliability-and-guardrails", text: "Reliability and Guardrails", level: 2 },
      {
        type: "paragraph",
        text: "Production agents need guardrails. Validate inputs and outputs against schemas, log every decision, limit which tools each agent may call, and route low-confidence results to a person. These controls are what separate a demo from a system your team trusts.",
      },
      {
        type: "quote",
        text: "Automation earns trust when every action is explainable and reversible.",
        cite: "Sneha Reddi, TechTide",
      },
      { type: "heading", id: "measuring-roi", text: "Measuring ROI", level: 2 },
      {
        type: "list",
        style: "number",
        items: [
          "Baseline the manual process: hours per week and error rate.",
          "Track tasks completed automatically versus escalated.",
          "Compare turnaround time before and after deployment.",
          "Review monthly and expand to the next workflow.",
        ],
      },
      {
        type: "paragraph",
        text: "Across the teams we work with, consolidating even three or four repetitive workflows routinely frees well over a hundred hours a month, with faster response times as a welcome side effect.",
      },
    ],
    relatedSlugs: [
      "nextjs-16-static-export-guide",
      "saas-multi-tenant-database-architecture",
    ],
  },
  {
    slug: "saas-multi-tenant-database-architecture",
    title: "Architecting Multi-Tenant SaaS Systems For Scale & Security",
    excerpt:
      "Key design patterns for database isolation, role-based access control (RBAC), and subscription metering in modern web software.",
    date: "Sep 10, 2026",
    readTime: "6 min read",
    category: "SaaS",
    image: "/assets/Dashboard-Growth.webp",
    author: "Rohan Kapoor",
    authorRole: "Managing Director & CEO",
    authorBio:
      "12+ years leading enterprise digital transformations and cloud architecture strategies.",
    tags: ["SaaS", "Multi-Tenancy", "RBAC", "Billing"],
    keyTakeaways: [
      "Choose a tenancy model early; it shapes cost, security and migration effort.",
      "Enforce tenant isolation in the data layer, not only in application code.",
      "Model roles and permissions separately from users for flexible RBAC.",
      "Meter usage at the event level so billing stays accurate as you scale.",
    ],
    content: [
      {
        type: "paragraph",
        text: "Multi-tenancy lets one application serve many customers while keeping their data separate. Done well, it lowers infrastructure cost and speeds up releases. Done poorly, it creates data leaks and painful migrations. These are the decisions that matter most.",
      },
      { type: "heading", id: "choosing-a-tenancy-model", text: "Choosing a Tenancy Model", level: 2 },
      {
        type: "paragraph",
        text: "There are three common approaches, each balancing isolation against cost and operational complexity.",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Shared database, shared schema: every row carries a tenant identifier. Cheapest and simplest to scale, but isolation relies on discipline.",
          "Shared database, separate schemas: stronger separation with moderate overhead, useful for mid-sized customers.",
          "Separate database per tenant: maximum isolation and easy per-customer backup, at higher cost and operational load.",
        ],
      },
      {
        type: "callout",
        title: "Rule of thumb",
        text: "Start with a shared schema and a tenant_id on every table, and design so that high-value enterprise tenants can later be moved to dedicated databases.",
      },
      { type: "heading", id: "enforcing-isolation", text: "Enforcing Tenant Isolation", level: 2 },
      {
        type: "paragraph",
        text: "Never trust every query to remember the tenant filter. Push enforcement down into the database with row-level security or a data-access layer that injects the tenant context automatically. Add automated tests that attempt cross-tenant reads and must fail.",
      },
      {
        type: "code",
        language: "sql",
        code: "-- PostgreSQL row-level security example\nALTER TABLE projects ENABLE ROW LEVEL SECURITY;\n\nCREATE POLICY tenant_isolation ON projects\n  USING (tenant_id = current_setting('app.tenant_id')::uuid);",
      },
      { type: "heading", id: "rbac-design", text: "Role-Based Access Control", level: 2 },
      {
        type: "paragraph",
        text: "Keep users, roles and permissions as separate concepts. Users hold roles within a tenant, roles bundle permissions, and permissions describe actions on resources. This makes it simple to add custom roles for enterprise customers without changing code.",
      },
      {
        type: "list",
        style: "number",
        items: [
          "Define permissions as verbs on resources, such as invoice.read or member.invite.",
          "Group permissions into roles like Owner, Admin, Member and Viewer.",
          "Scope role assignments to a tenant so one user can have different roles in different organizations.",
          "Check permissions on the server for every sensitive action.",
        ],
      },
      { type: "heading", id: "subscription-metering", text: "Subscription Metering and Billing", level: 2 },
      {
        type: "paragraph",
        text: "Usage-based pricing needs trustworthy numbers. Record usage as immutable events, aggregate them per billing period, and sync totals to your payment provider. Keep plan limits in configuration so product and sales teams can adjust packages without a deploy.",
      },
      {
        type: "quote",
        text: "If you cannot explain an invoice line from raw events, your metering is not finished.",
        cite: "Rohan Kapoor, TechTide",
      },
      { type: "heading", id: "scaling-and-observability", text: "Scaling and Observability", level: 2 },
      {
        type: "paragraph",
        text: "Watch for noisy neighbours: one heavy tenant slowing everyone else. Add per-tenant rate limits, query timeouts and dashboards that break metrics down by tenant. These signals tell you when it is time to shard or move a customer to dedicated resources.",
      },
    ],
    relatedSlugs: [
      "building-ai-agents-for-enterprise-workflows",
      "nextjs-16-static-export-guide",
    ],
  },
];

// ---- Optional helpers (place in src/lib/blog.js or below BlogData) ----

export const getPostBySlug = (slug) => BlogData.find((p) => p.slug === slug);

export const getRelatedPosts = (post, limit = 3) =>
  (post.relatedSlugs || [])
    .map((s) => BlogData.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, limit);


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

export const NavbarServicesMegaMenu = [
  {
    groups: [
      {
        category: "DEVELOPMENT",
        items: [
          { title: "Web Application Development", href: "/services/web-development" },
          { title: "Mobile App Development", href: "/services/mobile-apps" },
          { title: "SaaS Product Development", href: "/services/saas-engineering" },
          { title: "Custom Software Development", href: "/services/web-development" },
          { title: "E-Commerce Development", href: "/services/web-development" },
        ],
      },
      {
        category: "DESIGN",
        items: [
          { title: "UI/UX Design", href: "/services/web-development" },
          { title: "Brand Identity", href: "/services/seo-marketing" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        category: "AI & AUTOMATION",
        items: [
          { title: "AI Automation", href: "/services/ai-automation" },
          { title: "Machine Learning", href: "/services/ai-automation" },
          { title: "Generative AI", href: "/services/ai-automation" },
          { title: "API Integration & Workflow Automation", href: "/services/ai-automation" },
        ],
      },
      {
        category: "SUPPORT",
        items: [
          { title: "Ongoing Maintenance & Support", href: "/services/cloud-infrastructure" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        category: "BUSINESS GROWTH",
        items: [
          { title: "Lead Generation Systems", href: "/services/seo-marketing" },
          { title: "Sales Funnel & Customer Journey Design", href: "/services/seo-marketing" },
          { title: "Marketing + Sales Alignment", href: "/services/seo-marketing" },
          { title: "Automation & CRM Integration", href: "/services/ai-automation" },
          { title: "Growth Audits & Scaling Strategy", href: "/services/seo-marketing" },
          { title: "Tech-Driven Business Consulting", href: "/services/cloud-infrastructure" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        category: "MARKETING EXPERTISE",
        items: [
          { title: "SEO & Organic Growth", href: "/services/seo-marketing" },
          { title: "Conversion-Optimized Websites & Funnels", href: "/services/web-development" },
          { title: "Content & Landing Page Strategy", href: "/services/seo-marketing" },
          { title: "Paid Ads Strategy", href: "/services/seo-marketing" },
          { title: "Brand Positioning & Messaging", href: "/services/seo-marketing" },
          { title: "Analytics, Tracking & CRO", href: "/services/seo-marketing" },
        ],
      },
    ],
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
    title: "Leadership Team",
    desc: "Meet the strategists and engineers powering TechTide.",
    href: "/about#leadership",
    iconName: "UsersThreeIcon",
  },
];
