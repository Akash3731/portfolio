import type { WorkData } from "@/lib/types";

// Website covers are 16:10 screenshots of each live site's hero (Ace Deuce: its entry-screen logo).
// Platforms without a public site use illustrated covers (components/ui/illustrations).
// Custom CMS cover: free Unsplash photo by Rashmi Shukla (Unsplash License).

export const homeWork: WorkData = {
  title: "Selected work",
  filters: [
    { id: "all", label: "All" },
    { id: "web", label: "Websites" },
    { id: "plat", label: "Platforms" },
  ],
  projects: [
    {
      id: "stenergy",
      name: "ST Energy",
      category: "web",
      type: "Battery storage",
      org: "Adveria Digital, 2026",
      url: "stenergy.in",
      image: "/home/work/stenergy-hero.webp",
      gradient: ["#4A3A18", "#17120A"],
      brief:
        "ST Energy needed a site that explains its LFP battery storage range, from 5 kWh home units to 5 MWh containers, clearly enough for homeowners, C&I buyers and utilities.",
      part:
        "Built the full site with a product page for each of five products, three service pages, an insights article and a contact form. Developed a Three.js product explorer where visitors double-click to drill down from container to rack, pack, module and cell.",
      features: [
        "3D drill-down explorer with spec sheets for each container, rack, pack and cell",
        "Product pages for Dawn, Day, Dusk, Energy Pack and Energy Cell",
        "Full technical specification tables for every battery system",
        "Service pages for EPC, energy management and O&M",
        "Insights section with a long-form article on LFP battery degradation",
      ],
      stack: "Next.js, React, Three.js, React Three Fiber, Tailwind CSS",
    },
    {
      id: "poleplus",
      name: "PolePlus",
      category: "plat",
      type: "Asset management and IT helpdesk",
      org: "Baranwal, 2024 to 2026",
      gradient: ["#17403A", "#0B1F1C"],
      brief:
        "An enterprise needed one system to track IT assets across departments, route requests through department and IT approval, and keep helpdesk tickets within SLAs that count working hours only.",
      part: "Co-built PolePlus with one other developer: asset inventory and lifecycle, two-level requisitions and a helpdesk with eight department-scoped roles. Its SLA engine counts business time only, puts VIP users first and escalates overdue tickets by email, SMS and push through background workers.",
      features: [
        "Asset lifecycle from procurement to disposal, with warranty and end-of-life alerts",
        "Requisitions approved by the department head, then the IT head, then fulfilled",
        "SLA clocks that skip holidays, weekends, breaks and on-hold time",
        "Three-tier escalation: warning, imminent breach and breached",
        "Audit log of every action with before and after values",
      ],
      stack: "React, TypeScript, Node.js, Express, SQL Server, Redis, BullMQ",
    },
    {
      id: "uno",
      name: "UNO Chargers",
      category: "web",
      type: "EV charging",
      org: "Adveria Digital, 2026",
      url: "unochargers.com",
      image: "/home/work/uno-hero.webp",
      gradient: ["#4A1F1A", "#190B0A"],
      brief:
        "UNO Chargers, the EV charging division of Success Engineers, needed a product site presenting its AC and DC charger range, charging software and mobile app to homes and fleets.",
      part:
        "Built an eight-page site covering AC and DC chargers, the charging software, mobile app, company story and contact. Developed a model switcher that moves across chargers from 3.3 kW to 240 kW, plus comparison tables of specs for each range.",
      features: [
        "Charger switcher across 3.3 kW and 7.4 kW AC and 30 to 240 kW DC models",
        "Side-by-side comparison tables for the AC and DC charger lines",
        "Software page covering monitoring, billing and analytics dashboards",
        "Mobile app page with features for RFID access and charging history",
        "Admin CMS with page editor, media library and SEO panel",
      ],
      stack: "Next.js, React, Prisma, PostgreSQL, Tailwind CSS",
    },
    {
      id: "besto",
      name: "BestoClinic",
      category: "plat",
      type: "Dental clinic SaaS",
      org: "Baranwal, 2024 to 2026",
      gradient: ["#1F3F2A", "#0C1A11"],
      brief:
        "Dental clinics were running scheduling, consultations, billing, inventory and HR on separate tools and paper, with no central way to onboard clinics or manage their subscriptions.",
      part: "Built a multi-tenant platform where every clinic gets its own database, serving 14 roles across a staff web app, a patient portal and a mobile app. Background workers handle reminders, automatic invoicing, AI scan analysis and subscription billing.",
      features: [
        "Smart patient queue with priorities, tokens and automatic room assignment",
        "Digital consultations with tooth charting, prescriptions and care reminders",
        "GST invoicing, payments, ledgers and cash-register reconciliation",
        "Telemedicine video calls with encrypted rooms and chat",
        "AI dental scans analysed in the background and reviewed by a doctor",
        "Inventory that deducts the materials used in each consultation",
      ],
      stack: "React, React Native (Expo), Node.js, MongoDB, Redis, BullMQ, Socket.IO",
    },
    {
      id: "ajaan",
      name: "Ajaan Baug",
      category: "web",
      type: "Real estate",
      org: "Adveria Digital, 2026",
      url: "ajaanbaug.com",
      image: "/home/work/ajaan-hero.webp",
      gradient: ["#3B4226", "#15180D"],
      brief:
        "Jambhalkar Construction needed a launch site for Ajaan Baug, a 2 BHK project in Alandi, Pune, that turns interest into brochure downloads and site visit requests.",
      part:
        "Built a single-page launch site covering the story, homes, specifications, amenities and location. Developed a numbered apartment cutaway for specifications, a tabbed landmark explorer with a map, and enquiry forms that send leads to Google Sheets.",
      features: [
        "Interactive 2 BHK cutaway with eight numbered specification points",
        "Location explorer with tabs for schools, hospitals, temples and metro",
        "Embedded Google Map alongside distances to nearby landmarks",
        "Site visit form with weekend, weekday or brochure-only choices",
        "Brochure download modal that records each lead in Google Sheets",
      ],
      stack: "Next.js, React, Lenis, Tailwind CSS",
    },
    {
      id: "acadmea",
      name: "Acadmea",
      category: "plat",
      type: "Exam preparation platform",
      org: "Baranwal, 2024 to 2026",
      gradient: ["#2A3F1C", "#10190B"],
      brief:
        "Students preparing for exams like JEE, NEET, UPSC and government recruitment needed one place for exam-specific study plans, mock tests with real analysis, past papers, e-books and current affairs.",
      part: "Built the React admin panel, the Expo mobile app and the Node.js API behind both. A central question bank grades every mock test automatically, and Razorpay course plans decide which tests and resources each student can open.",
      features: [
        "Question bank with bulk import, difficulty levels and per-question accuracy",
        "Five-step mock test builder with drag-and-drop ordering and scheduling",
        "Instant results with subject-wise scores, accuracy and time per question",
        "Course plans with quotas for tests, e-books and past papers",
        "Current affairs publishing with scheduled posts",
      ],
      stack: "React, Redux Toolkit, React Native (Expo), Node.js, MongoDB, Razorpay",
    },
    {
      id: "siddhi",
      name: "Siddhi Steel Furniture",
      category: "web",
      type: "Institutional furniture",
      org: "Freelance",
      url: "siddhisteelfurniture.com",
      image: "/home/work/siddhi-hero.webp",
      gradient: ["#28405A", "#0E1722"],
      brief:
        "Siddhi Steel Furniture, a Mumbai manufacturer that has furnished 700+ schools since 1985, needed its full catalogue online so institutions could shortlist and enquire.",
      part:
        "Built a catalogue site with products, our work, workshop, clients, about and contact pages, plus a page for every model. Developed enquiry and catalogue-download flows that log leads to Google Sheets, with WhatsApp as a one-tap alternative.",
      features: [
        "125+ products in eleven ranges, each with its own SSF model page",
        "Enquire on any product, prefilled into a single enquiry form",
        "Our Work gallery of real installations filtered by type of space",
        "Workshop page tracing a bench from raw steel to powder coating",
        "Leads and catalogue requests sent to Google Sheets or WhatsApp",
      ],
      stack: "Next.js, React, Lenis, Google Sheets",
    },
    {
      id: "naukri",
      name: "CallForNaukri",
      category: "plat",
      type: "Hiring platform",
      org: "Baranwal, 2024 to 2026",
      url: "callfornaukri.com",
      gradient: ["#1E2A5C", "#0C1230"],
      brief:
        "Bring job seekers, recruitment vendors and employers onto one hiring platform, where companies post jobs and track candidates while job seekers search, apply and prepare.",
      part: "Built the employer side: company onboarding with role-based team access, stage-based hiring pipelines and bulk job creation from Excel. Hiring runs on a credit-based subscription paid through Razorpay, with scheduled jobs keeping credits, listings and plans in order.",
      features: [
        "Company onboarding with role-based team access",
        "Stage-based hiring pipelines from applied to hired",
        "Bulk job creation from an Excel sheet",
        "Credit-based subscriptions paid through Razorpay",
        "Monthly credit resets, auto-expiring listings with renewal reminders, and downgrades after the grace period",
      ],
      stack: "Node.js, Express, Cron jobs, Razorpay, Role-based access",
    },
    {
      id: "acedeuce",
      name: "Ace Deuce",
      category: "web",
      type: "Fashion label",
      org: "Freelance",
      url: "ace-deuce.world",
      image: "/home/work/acedeuce-hero.webp",
      gradient: ["#3A2B52", "#140F1E"],
      brief:
        "Give a wearable-art label a store as distinctive as its clothes: themed collections rooted in neo-gachore futurism, alongside one-of-one statement sets and limited streetwear drops.",
      part:
        "Built the online store around collections and drops, so every release can be explored on its own. One-of-one pieces and limited runs are tracked down to the size, with cart, checkout and customer accounts throughout.",
      features: [
        "Collections presented as themed releases, not just product grids",
        "One-of-one statement sets and limited streetwear in the same catalogue",
        "Stock tracked per size, down to a single piece",
        "Cart, checkout and customer accounts",
      ],
      stack: "Next.js, Supabase, Cart and checkout, Customer accounts",
    },
    {
      id: "stelec",
      name: "ST Electricals",
      category: "web",
      type: "Power infrastructure",
      org: "Adveria Digital, 2026",
      url: "stelectricals.com",
      image: "/home/work/stelec-hero.webp",
      gradient: ["#1D3550", "#0B1522"],
      brief:
        "ST Electricals, a power infrastructure contractor established in 1998, needed a corporate site presenting its history, services and transmission and substation projects.",
      part:
        "Built the corporate site with home, about, services, projects, blogs and contact pages. Developed a company timeline from 1976 to the present, project showcases with detail modals, and an admin CMS for editing pages, blog posts, media and SEO.",
      features: [
        "Company timeline running from 1976 through the founding in 1998 to today",
        "Featured project cards for T-02, T-14, T-73 and others with detail modals",
        "Services page covering transmission lines, substations and contracting",
        "Blog with technical case studies, such as a 308 km line execution",
        "Admin CMS with blog editor, media library and SEO scoring",
      ],
      stack: "Next.js, React, Prisma, PostgreSQL, Tailwind CSS",
    },
    {
      id: "sector24",
      name: "Sector 24 Films",
      category: "web",
      type: "Production house",
      org: "Freelance",
      url: "sector24.in",
      image: "/home/work/sector24-hero.webp",
      gradient: ["#3A3632", "#141210"],
      brief:
        "Give a production house that shoots short films, brand content, concerts, artist gigs and commercials one place to present the full range of its work.",
      part:
        "Built a work-first portfolio where every project is grouped by production type, so a client looking for a concert film or a commercial sees that kind of work first. Enquiries are organised the same way, by the kind of shoot.",
      features: [
        "Work grouped by production type: films, brand content, concerts, artist gigs and commercials",
        "Video-led pages that put the footage ahead of the copy",
        "Enquiries sorted by the kind of production a client needs",
      ],
      stack: "Next.js, Video-led portfolio, Enquiry forms",
    },
    {
      id: "cms",
      name: "Custom CMS",
      category: "plat",
      type: "Publishing tool",
      org: "Adveria Digital, 2026",
      image: "/home/work/cms-cover.webp",
      gradient: ["#2F3A1A", "#12170A"],
      brief:
        "A client team wanted to rewrite and publish any page of their website on their own, without waiting on a developer, and to know whether each change was good for search.",
      part:
        "Designed and built a CMS where every page, section and field of the site can be edited, alongside a blog, media library and team access. Wrote a rule-based SEO engine that scores each page and post live as the team types.",
      features: [
        "Page editor that exposes every section and field of the live site",
        "Blog editor for writing, editing and publishing posts by slug",
        "Rule-based SEO score for each page and post, updated while typing",
        "SEO overview that shows the score of every page and post in one view",
        "Media library with uploads, plus login-protected team accounts",
      ],
      stack: "Next.js, React, Prisma, JWT auth",
    },
    {
      id: "jyoti",
      name: "Jyoti Group",
      category: "web",
      type: "Heat treatment",
      org: "Adveria Digital, 2026",
      image: "/home/work/jyoti-hero.webp",
      gradient: ["#55301A", "#1C0F08"],
      brief:
        "Jyoti Group, an ISO 9001 and IATF certified heat treatment company, needed to replace its legacy WordPress site with one that sets out its processes and six plants in detail.",
      part:
        "Built a new site with pages for services, infrastructure, furnaces, quality and contact, plus a detail page for each of seven heat treatment processes. Developed an admin CMS with a page editor, media library and SEO tools so the team can update content.",
      features: [
        "Detail pages for seven processes, from vacuum and nitriding to cryogenic",
        "Infrastructure page with per-plant furnace and equipment tables",
        "Furnaces carousel covering seven furnace types, from vacuum to rotary",
        "Quality page listing metallurgy lab equipment for Pune and Chennai",
        "Offices directory for seven locations, with a brochure request form",
      ],
      stack: "Next.js, React, Prisma, PostgreSQL, Tailwind CSS",
    },
  ],
};
