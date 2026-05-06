import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  ReactIcon,
  Typescript01Icon,
  CloudIcon,
  PresentationBarChart01Icon,
  Robot01Icon,
  Database01Icon,
  CreditCardIcon,
  PythonIcon,
  ZapIcon,
  TrendingUp,
  Money01Icon,
  Refresh01Icon,
  Notebook01Icon,
  AiBrain01Icon
} from "@hugeicons/core-free-icons";
import SectionLabel from "@/components/SectionLabel";
import { siteContent } from "@/data/content";

const techIconMap: Record<string, { icon: any; color: string }> = {
  "React": { icon: ReactIcon, color: "#61DAFB" },
  "Typescript": { icon: Typescript01Icon, color: "#3178C6" },
  "Cloud": { icon: CloudIcon, color: "#00a1ff" },
  "Analytics": { icon: PresentationBarChart01Icon, color: "#FF9800" },
  "AI": { icon: Robot01Icon, color: "#8A2BE2" },
  "Nodejs": { icon: Database01Icon, color: "#8CC84B" },
  "Database": { icon: Database01Icon, color: "#336791" },
  "Payments": { icon: CreditCardIcon, color: "#635BFF" },
  "Python": { icon: PythonIcon, color: "#3776AB" },
  "FastAPI": { icon: ZapIcon, color: "#009688" },
  "Finance": { icon: TrendingUp, color: "#4CAF50" },
  "Money": { icon: Money01Icon, color: "#FFD700" },
  "Sync": { icon: Refresh01Icon, color: "#00BCD4" },
  "Learning": { icon: Notebook01Icon, color: "#FFC107" },
  "Brain": { icon: AiBrain01Icon, color: "#E91E63" }
};

export const metadata = {
  title: "Projects — Niranjan Gaonkar",
  description: "Things I've built, shipped, and sometimes abandoned.",
};

const typeColors: Record<string, string> = {
  site: "type-badge",
  bot: "type-badge",
  pkg: "type-badge",
  repo: "type-badge",
};

export default function ProjectsPage() {
  const { projects, footer } = siteContent;

  return (
    <div
      className="max-w-2xl mx-auto px-6 py-12"
      style={{ color: "var(--foreground)" }}
    >
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <h1
        className="font-bold mb-3 leading-tight"
        style={{
          fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
          letterSpacing: "-0.025em",
        }}
      >
        Projects
      </h1>
      <p
        className="text-sm mb-12"
        style={{ color: "var(--foreground-muted)" }}
      >
        Things I&apos;ve built, shipped, and sometimes abandoned.
      </p>

      {/* ── Featured ─────────────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel text="FEATURED" />

        <div>
          {projects.featured.map((project, idx) => (
            <div key={idx}>
              {/* Project row */}
              <div className="py-1">
                {/* Name row */}
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  {project.href && project.href !== "#" ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-base flex items-center gap-1.5 group"
                      style={{ color: "var(--foreground)" }}
                    >
                      {project.name}
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={14}
                        strokeWidth={1.8}
                        className="opacity-40 group-hover:opacity-100 transition-opacity text-muted"
                        color="currentColor"
                      />
                    </a>
                  ) : (
                    <span
                      className="font-semibold text-base flex items-center gap-1.5"
                      style={{ color: "var(--foreground)" }}
                    >
                      {project.name}
                    </span>
                  )}
                  <span className={typeColors[project.type]}>{project.type}</span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {project.date}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--foreground-muted)", lineHeight: "1.65" }}
                >
                  {project.description}
                </p>

                {/* Tech icons */}
                {project.techIcons.length > 0 && (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.techIcons.map((icon, iIdx) => (
                      <span
                        key={iIdx}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-sm"
                        style={{
                          background: "var(--pill-hover)",
                          border: "1px solid var(--border)",
                        }}
                        title={icon}
                      >
                        {techIconMap[icon] ? (
                          <HugeiconsIcon icon={techIconMap[icon].icon} size={14} color={techIconMap[icon].color} />
                        ) : (
                          icon
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Dashed separator (not after last) */}
              {idx < projects.featured.length - 1 && (
                <hr className="dashed-sep" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Other ────────────────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel text="OTHER" />

        <div>
          {projects.other.map((project, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between py-1 gap-4">
                {/* Left: name */}
                {project.href && project.href !== "#" ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm flex items-center gap-1.5 group"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.name}
                  </a>
                ) : (
                  <span
                    className="font-medium text-sm flex items-center gap-1.5"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.name}
                  </span>
                )}

                {/* Right: type + date + arrow */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={typeColors[project.type]}>{project.type}</span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {project.date}
                  </span>
                  {project.href && project.href !== "#" ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-40 hover:opacity-100 transition-opacity text-muted flex items-center justify-center"
                    >
                      <HugeiconsIcon icon={ArrowUpRight01Icon} size={13} strokeWidth={1.8} />
                    </a>
                  ) : (
                    <div style={{ width: 13, height: 13 }} />
                  )}
                </div>
              </div>

              {/* Dashed separator */}
              {idx < projects.other.length - 1 && (
                <hr className="dashed-sep" style={{ margin: "0.5rem 0" }} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
