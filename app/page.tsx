import {
  Mail,
  Link2,
  GitBranch,
  Calendar,
  MessageCircle,
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import Signature from "@/components/Signature";
import { siteContent } from "@/data/content";
import type { AboutSegment } from "@/data/content";

// Map icon string names to lucide components
const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Mail,
  Linkedin: Link2,
  Github: GitBranch,
  Calendar,
  MessageCircle,
};

function RichText({ segments }: { segments: AboutSegment[] }) {
  return (
    <>
      {segments.map((seg, i) =>
        seg.href ? (
          <a key={i} href={seg.href} className="green-link" target="_blank" rel="noopener noreferrer">
            {seg.text}
          </a>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

export default function Home() {
  const { personal, links, contact, footer } = siteContent;

  return (
    <div
      className="max-w-2xl mx-auto px-6 py-12"
      style={{ color: "var(--foreground)" }}
    >
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h1
          className="font-bold mb-3 leading-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 2.75rem)",
            letterSpacing: "-0.025em",
          }}
        >
          Hi, I&apos;m {personal.firstName}
        </h1>
        <p
          className="text-lg"
          style={{ color: "var(--foreground-muted)" }}
        >
          I build <span className="cool-underline" style={{ color: "var(--foreground)" }}>cool</span> stuff.
        </p>
      </section>

      {/* ── Contact buttons ───────────────────────────────────────────────── */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-2">
          {links.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                className="pill-btn"
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                {Icon && <Icon size={14} strokeWidth={1.8} />}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <SectionLabel text="ABOUT" />
        <div
          className="space-y-4 text-sm leading-relaxed"
          style={{ color: "var(--foreground)", lineHeight: "1.75" }}
        >
          {personal.about.map((para, i) => (
            <p key={i}>
              <RichText segments={para.segments} />
            </p>
          ))}
        </div>
      </section>

      {/* ── Signature ────────────────────────────────────────────────────── */}
      <section className="mb-12">
        <Signature name={personal.firstName} />
      </section>


      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section className="mb-12">
        <SectionLabel text="CONTACT" />
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--foreground)", lineHeight: "1.75" }}
        >
          <RichText segments={contact.segments} />
        </p>
      </section>

    </div>
  );
}
