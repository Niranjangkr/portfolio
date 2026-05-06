import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import { siteContent } from "@/data/content";

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
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-base flex items-center gap-1.5 group"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.name}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.8}
                      className="opacity-40 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--foreground-muted)" }}
                    />
                  </a>
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
                        {icon}
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
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-sm flex items-center gap-1.5 group"
                  style={{ color: "var(--foreground)" }}
                >
                  {project.name}
                </a>

                {/* Right: type + date + arrow */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={typeColors[project.type]}>{project.type}</span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {project.date}
                  </span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-40 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    <ArrowUpRight size={13} strokeWidth={1.8} />
                  </a>
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
