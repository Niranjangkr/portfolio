// ─── TypeScript interfaces ───────────────────────────────────────────────────

export interface AboutSegment {
  text: string;
  href?: string; // if present, this segment is a green link
}

export interface AboutParagraph {
  segments: AboutSegment[];
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string; // hugeicons icon component name
}

export interface Experience {
  company: string;
  companyHref?: string;
  role: string;
  period: string;
  location: string;
  remote: boolean;
  bullets: string[];
}

export interface FeaturedProject {
  name: string;
  type: "site" | "bot" | "pkg" | "repo";
  date: string;
  description: string;
  techIcons: string[]; // mapped to Hugeicons in projects page
  href: string;
}

export interface OtherProject {
  name: string;
  type: "site" | "bot" | "pkg" | "repo";
  date: string;
  href: string;
}

export interface NowPlaying {
  track: string;
  artist: string;
  playCount?: number;
}

export interface ContactSection {
  segments: AboutSegment[];
  nowPlaying: NowPlaying;
}

export interface SiteContent {
  personal: {
    name: string;
    firstName: string;
    tagline: string;
    about: AboutParagraph[];
  };
  links: ContactLink[];
  experience: Experience[];
  projects: {
    featured: FeaturedProject[];
    other: OtherProject[];
  };
  contact: ContactSection;
  footer: {
    year: number;
    name: string;
  };
}

// ─── Site content — single source of truth ───────────────────────────────────

export const siteContent: SiteContent = {
  personal: {
    name: "Niranjan Gaonkar",
    firstName: "Niranjan",
    tagline: "I build cool stuff.",
    about: [
      {
        segments: [
          {
            text: "I'm a full-stack engineer focused on building scalable SaaS products, AI-powered workflows, and data-intensive platforms. My work spans frontend systems, backend architecture, analytics pipelines, and cloud infrastructure — usually shipping products end-to-end from idea to production. ",
          },
          {
            text: "Currently building at ",
          },
          {
            text: "CubikTech",
            href: "https://cubiktech.com",
          },
          {
            text: ", where I work on fintech platforms, receivables systems, inventory analytics, and automation products integrating services like Stripe, Salesforce, idspay, Zoho, and OpenAI.",
          },
        ],
      },
      {
        segments: [
          {
            text: "Outside of code, I'm usually ",
          },
          { text: "thinking", href: "https://x.com/NiranjanGaonka7" },
          {
            text: " about random stuff that somehow always ends up as a side project, or getting ",
          },
          { text: "lost", href: "https://github.com/Niranjangkr" },
          {
            text: " in a rabbit hole. Big fan of story-driven ",
          },
          { text: "games", href: "https://store.steampowered.com/app/13600/Prince_of_Persia_The_Sands_of_Time/" },
          {
            text: " and always has music ",
          },
          { text: "playing", href: "https://open.spotify.com/playlist/02uOQLQYKlV3IhSysjX8HP#" },
          {
            text: " in the background. Currently based in Goa, India.",
          },
        ],
      },
    ],
  },

  links: [
    {
      label: "Email",
      href: "mailto:niranjangaonkar.09@gmail.com",
      icon: "Mail",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/niranjan-gaonkar/",
      icon: "Linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/Niranjangkr",
      icon: "Github",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919673558251",
      icon: "MessageCircle",
    },
  ],

  experience: [
    {
      company: "CubikTech",
      companyHref: "https://cubiktech.com",
      role: "Software Engineer",
      period: "Jan 2025 – Present",
      location: "Bicholim, Goa, India",
      remote: true,
      bullets: [
        "Led end-to-end development of multiple fintech, analytics, and automation platforms across frontend, backend, infrastructure, and deployment layers using Next.js, FastAPI, PostgreSQL, AWS, and Railway.",
        "Architected scalable multi-tenant systems integrating Stripe, Razorpay, Salesforce, Zoho, Experian, Azure OpenAI, and Pinecone for payments, analytics, workflow automation, and credit decisioning.",
        "Built AI-powered analytics platforms with ingestion pipelines for CSV/Excel data, vector search, conversational querying, and real-time dashboards for inventory and receivables workflows.",
        "Designed production-ready frontend systems with Next.js App Router, React Query, Redux Toolkit, and React Flow while implementing secure auth flows using AWS Cognito with MFA.",
      ],
    },
    {
      company: "xAGI",
      companyHref: "https://xagi.in/",
      role: "Software Engineer",
      period: "Sep 2023 – Jan 2025",
      location: "Remote",
      remote: true,
      bullets: [
        "Built AI-driven web applications using Next.js, Node.js, and MongoDB, delivering full-stack product features across frontend systems, backend APIs, and database architecture.",
        "Developed AI chatbots, PDF interaction systems, and retrieval-based workflows using LLM integrations for contextual search and conversational interfaces.",
        "Engineered modular APIs and automation pipelines supporting dynamic content generation, workflow orchestration, and scalable user-centric platforms.",
        "Designed admin dashboards and analytics systems for monitoring users, platform activity, AI workflows, and operational insights.",
      ],
    },
    {
      company: "WeframeTech",
      companyHref: "https://weframetech.com/",
      role: "Full-stack Developer Intern",
      period: "Jul 2023 – Aug 2023",
      location: "Remote",
      remote: true,
      bullets: [
        "Developed responsive UI components and dashboards using React and Chart.js for internal analytics workflows.",
        "Implemented Zustand-based state management and contributed to frontend architecture improvements during a fast-paced startup internship.",
      ],
    },
  ],

  projects: {
    featured: [
      {
        name: "Agile Receivables",
        type: "site",
        date: "2025",
        description:
          "Enterprise receivables automation platform with AI-driven workflows, visual campaign orchestration, MFA-secured authentication, and large-scale analytics dashboards built using Next.js, React Flow, and AWS services.",
        techIcons: ["React", "Typescript", "Cloud", "Analytics", "AI"],
        href: "https://agilereceivables.com",
      },
      {
        name: "GST Manager",
        type: "site",
        date: "2025",
        description:
          "Full-stack GST services platform with Razorpay payments, Zoho automations, RBAC workflows, and scalable backend systems for compliance tracking and service lifecycle management.",
        techIcons: ["React", "Nodejs", "Database", "Payments", "Cloud"],
        href: "https://gstmanager.com",
      },
      {
        name: "Kreditfin",
        type: "site",
        date: "2025",
        description:
          "Credit underwriting and decisioning platform integrating Experian APIs, automated scoring workflows, financial analysis pipelines, and FastAPI-based backend systems for loan processing.",
        techIcons: ["Python", "FastAPI", "Database", "Finance", "Money"],
        href: "https://kreditfin-frontend.vercel.app/",
      },
      {
        name: "Workweek Analytics",
        type: "site",
        date: "2024",
        description:
          "Sales and revenue analytics platform integrating Salesforce data with real-time dashboards, forecasting systems, SOQL-powered querying, RBAC, and multi-tenant backend architecture.",
        techIcons: ["React", "Nodejs", "Analytics", "Cloud", "Sync"],
        href: "#",
      },
      {
        name: "Startup Nalanda",
        type: "site",
        date: "2024",
        description:
          "AI-powered learning platform generating structured courses, quizzes, and learning resources dynamically using LLM pipelines, Supabase, and scalable full-stack workflows.",
        techIcons: ["React", "AI", "Learning", "Cloud", "Brain"],
        href: "#",
      },
    ],

    other: [
      {
        name: "Favcy Navigator",
        type: "site",
        date: "2024",
        href: "#",
      },
      {
        name: "WishFerry",
        type: "site",
        date: "2024",
        href: "https://wishferry.vercel.app",
      },
      {
        name: "PitchPerfectAI",
        type: "site",
        date: "2024",
        href: "#",
      },
      {
        name: "FavcyHive: AI Workplace Assistant",
        type: "site",
        date: "2024",
        href: "https://favcyhive.vercel.app/",
      },
      {
        name: "Receivables & Inventory Analytics",
        type: "site",
        date: "2025",
        href: "https://inventory.cubiktech.com",
      },
      {
        name: "Clappety",
        type: "site",
        date: "2024",
        href: "#",
      },
    ],
  },

  contact: {
    segments: [
      { text: "Wanna chat? Hit me up on " },
      { text: "WhatsApp", href: "https://wa.me/919673558251" },
      { text: " or " },
      { text: "LinkedIn", href: "https://www.linkedin.com/in/niranjan-gaonkar/" },
      {
        text: ". You could also go the formal route with ",
      },
      { text: "email", href: "mailto:niranjangaonkar.09@gmail.com" },

    ],
    nowPlaying: {
      track: "Blinding Lights",
      artist: "The Weeknd",
      playCount: 3,
    },
  },

  footer: {
    year: 2026,
    name: "Niranjan Gaonkar",
  },
};
