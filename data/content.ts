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
        "Architected scalable multi-tenant backend systems and event-driven workflows using Node.js, FastAPI, PostgreSQL, MongoDB, SQS, and EventBridge across fintech, analytics, and automation platforms.",
        "Integrated Stripe, Stripe Connect, Razorpay, Salesforce SOQL, Zoho, Twilio, AWS Cognito, Experian, Azure OpenAI, and Pinecone for payments, CRM analytics, authentication, AI workflows, and operational automation.",
        "Designed production-grade full-stack systems with secure RBAC APIs, workflow orchestration engines, AI-powered analytics dashboards, AWS infrastructure, and scalable cloud deployments reducing manual operational overhead.",
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
        "Built AI-driven full-stack applications using Next.js, Node.js, MongoDB, and LLM integrations, delivering scalable frontend systems, backend APIs, and database architectures.",
        "Developed AI chatbots, PDF-based knowledge assistants, and retrieval pipelines enabling contextual search, conversational workflows, and dynamic content generation.",
        "Engineered modular APIs, workflow automation systems, and analytics dashboards supporting operational monitoring and scalable AI-powered platform features.",
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
        date: "2025 – Present",
        description:
          "Multi-tenant receivables automation platform featuring event-driven campaign orchestration, Stripe Connect billing workflows, AI voice collection agents, QuickBooks/Xero sync pipelines, and scalable Next.js dashboards powered by AWS infrastructure.",
        techIcons: ["React", "Typescript", "Cloud", "Analytics", "AI"],
        href: "https://agilereceivables.com",
      },
      {
        name: "GST Manager",
        type: "site",
        date: "2025",
        description:
          "Multi-tenant GST compliance and filing platform with Razorpay payment automation, Socket.io real-time systems, AWS S3 document workflows, RBAC-secured APIs, and scalable full-stack operational dashboards.",
        techIcons: ["React", "Nodejs", "Database", "Payments", "Cloud"],
        href: "https://gstmanager.com",
      },
      {
        name: "Credit Decision",
        type: "site",
        date: "2025",
        description:
          "Credit underwriting and decisioning platform integrating Experian APIs, automated scoring workflows, financial analysis pipelines, and FastAPI-based backend systems for loan processing.",
        techIcons: ["Python", "FastAPI", "Database", "Finance", "Money"],
        href: "#",
      },
      {
        name: "Analytics Platform",
        type: "site",
        date: "2024",
        description:
          "Sales analytics and forecasting platform integrating Salesforce CRM through direct SOQL querying with real-time dashboards, quota tracking, leaderboard systems, RBAC-secured multi-tenant APIs, and reporting automation.",
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
