import { siteContent } from "@/data/content";

export default function Footer() {
  return (
    <footer className="w-full mt-20 pb-10">
      <div className="w-full border-t border-dashed border-border/60 mb-8" />
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs font-medium text-muted">
          © {siteContent.footer.year} {siteContent.footer.name}
        </p>
      </div>
    </footer>
  );
}
