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
  icon: string; // lucide-react icon component name
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
  techIcons: string[]; // emoji or label for now
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
            text: "I like making things for the web. TypeScript is my main thing. Most of my time goes into shipping full-stack apps, integrating AI pipelines, and occasionally wrangling AWS infrastructure (I fix it tho). Currently building at ",
          },
          { text: "CubikTech", href: "https://cubiktech.in" },
          { text: "." },
        ],
      },
      {
        segments: [
          {
            text: "Outside of code, I'm usually ",
          },
          { text: "thinking", href: "https://x.com" },
          {
            text: " about random stuff that somehow always ends up as a side project, or getting ",
          },
          { text: "lost", href: "https://github.com/niranjansgitbuh" },
          {
            text: " in a rabbit hole. Big fan of story-driven ",
          },
          { text: "games", href: "#" },
          {
            text: " and always has music ",
          },
          { text: "playing", href: "#" },
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
      href: "mailto:niranjangaonkar@example.com",
      icon: "Mail",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/niranjangaonkar",
      icon: "Linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/niranjansgitbuh",
      icon: "Github",
    },
    {
      label: "Meeting",
      href: "https://cal.com/niranjan",
      icon: "Calendar",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/91XXXXXXXXXX",
      icon: "MessageCircle",
    },
  ],

  experience: [
    {
      company: "CubikTech",
      companyHref: "https://cubiktech.in",
      role: "Software Engineer",
      period: "Jan 2025 – Present",
      location: "Bicholim, Goa, India",
      remote: true,
      bullets: [
        "Led full-stack development and AWS deployment of a GST services platform, architecting scalable backend APIs (Node.js, PostgreSQL) with Razorpay payment integration and secure JWT-based authentication.",
        "Built a multi-tenant analytics platform integrating Salesforce data for pipeline forecasting and revenue insights, designing modular backend services with RBAC and automated sync pipelines using cron jobs.",
        "Owned frontend architecture for an AI-driven receivables platform using Next.js — implemented high-performance data tables (TanStack Table) and a visual workflow builder (XYFlow), with AWS Cognito MFA auth.",
        "Developed an AI-powered analytics system for Blinkit, Instamart, and Zepto integrations with ingestion pipelines (CSV/Excel), deduplication, batch upserts to Supabase, and conversational analytics via Azure OpenAI and Pinecone.",
        "Engineered multiple full-stack SaaS platforms with AI-driven analytics, vector search, and workflow automation that significantly reduced manual processing time.",
      ],
    },
    {
      company: "xAGI",
      role: "Software Engineer",
      period: "Sep 2023 – Jan 2025",
      location: "Remote",
      remote: true,
      bullets: [
        "Advanced AI technology through full-stack development, building products that showcase front-end refinement and back-end power.",
        "Contributed to AI-driven product features, combining React/Next.js front-ends with robust backend services.",
        "Collaborated on cross-functional teams to ship production-quality software in fast-paced, research-driven environment.",
      ],
    },
    {
      company: "WeframeTech",
      role: "Full-stack Developer Intern",
      period: "Jul 2023 – Aug 2023",
      location: "Remote",
      remote: true,
      bullets: [
        "Built and shipped features using Next.js and Tailwind CSS during a focused 2-month internship.",
        "Gained hands-on experience with modern frontend tooling and production deployment workflows.",
      ],
    },
  ],

  projects: {
    featured: [
      {
        name: "Agile Receivables",
        type: "site",
        date: "March 2025",
        description:
          "AI-driven receivables management platform with visual workflow builder, high-performance data tables, and MFA-based authentication. Built for enterprise AR operations.",
        techIcons: ["⚛️", "🟦", "🗄️", "☁️", "🤖"],
        href: "#",
      },
      {
        name: "GST Manager",
        type: "site",
        date: "January 2025",
        description:
          "End-to-end SaaS platform for GST services with scalable backend APIs, Razorpay payment integration, webhook-based transaction handling, and cross-platform frontend.",
        techIcons: ["⚛️", "🟩", "🐘", "💳", "☁️"],
        href: "#",
      },
      {
        name: "Workweek",
        type: "site",
        date: "November 2024",
        description:
          "Multi-tenant revenue & sales intelligence platform integrating Salesforce data for pipeline forecasting with RBAC, automated sync pipelines, and modular backend services.",
        techIcons: ["⚛️", "🟩", "🐘", "🔄", "📊"],
        href: "#",
      },
      {
        name: "AI Analytics System",
        type: "site",
        date: "September 2024",
        description:
          "Conversational analytics system for quick commerce (Blinkit, Instamart, Zepto) with CSV/Excel ingestion pipelines, vector search via Pinecone, and Azure OpenAI integration.",
        techIcons: ["⚛️", "🟦", "🤖", "🔍", "🗃️"],
        href: "#",
      },
    ],
    other: [
      {
        name: "Portfolio v1",
        type: "site",
        date: "April 2024",
        href: "#",
      },
      {
        name: "Discord Bot Framework",
        type: "bot",
        date: "June 2023",
        href: "#",
      },
      {
        name: "React Component Library",
        type: "pkg",
        date: "March 2023",
        href: "#",
      },
      {
        name: "CLI Toolbox",
        type: "repo",
        date: "January 2023",
        href: "#",
      },
      {
        name: "Next.js Boilerplate",
        type: "repo",
        date: "October 2022",
        href: "#",
      },
    ],
  },

  contact: {
    segments: [
      { text: "Wanna chat? Hit me up on " },
      { text: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX" },
      { text: " or " },
      { text: "LinkedIn", href: "https://www.linkedin.com/in/niranjangaonkar" },
      {
        text: ". You could also go the formal route with ",
      },
      { text: "email", href: "mailto:niranjangaonkar@example.com" },
      { text: " or " },
      { text: "schedule a meeting", href: "https://cal.com/niranjan" },
      { text: " if that's more your style." },
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
