// Server component — renders a blocking script before paint to prevent FOUC
export default function ThemeScript() {
  const script = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch(e) {}
})();
`.trim();

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
