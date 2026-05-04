import { Download, MapPin, Wifi, Calendar } from "lucide-react";
import { siteContent } from "@/data/content";

export const metadata = {
  title: "Experience — Niranjan Gaonkar",
  description: "My professional journey so far.",
};

export default function ExperiencePage() {
  const { experience } = siteContent;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Experience</h1>
          <p className="text-muted text-sm font-medium">My professional journey so far.</p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="pill-btn text-xs mb-1"
        >
          <Download size={13} strokeWidth={2} />
          <span>Resume</span>
        </a>
      </div>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <div className="timeline-container">
        <div className="timeline-line" />
        
        <div className="space-y-12">
          {experience.map((job, idx) => {
            const isCurrent = job.period.toLowerCase().includes("present");
            
            return (
              <div key={idx} className="timeline-item relative">
                {/* Dot */}
                <div className={`timeline-dot ${isCurrent ? "active" : ""}`} />

                {/* Content */}
                <div className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {job.companyHref ? (
                        <a
                          href={job.companyHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-lg hover:text-accent transition-colors duration-200 underline decoration-border underline-offset-4 hover:decoration-accent"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <span className="font-bold text-lg underline decoration-border underline-offset-4">{job.company}</span>
                      )}
                      
                      {isCurrent && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent rounded-full border border-accent/20">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm font-semibold text-foreground/70">{job.role}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-muted">
                    <span className="flex items-center gap-1.5">
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} strokeWidth={2} className="text-muted/60" />
                      {job.location}
                    </span>
                    {job.remote && (
                      <span className="remote-badge bg-accent/5 border-accent/20">
                        <Wifi size={11} strokeWidth={2} />
                        Remote
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 pt-1">
                    {job.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="text-[13px] leading-relaxed text-foreground/60 flex gap-3"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-border flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="mt-24 pt-8 border-t border-dashed border-border">
        <p className="text-center text-xs font-medium text-muted">
          © {siteContent.footer.year} {siteContent.footer.name}
        </p>
      </footer>
    </div>
  );
}
