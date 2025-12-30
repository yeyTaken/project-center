import { Navbar as NextraNavbar } from "nextra-theme-docs";


function TemplateDocs() {
  return (
    <>
      {/* <GiElephant size={28} /> */}
      <span className="text-2xl" style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Template Docs
      </span>
    </>
  );
}




export default function Navbar() {
  return (
    <NextraNavbar
      logo={<TemplateDocs />}
      align="left"
      projectLink="https://github.com/yeytaken/"
      chatLink="https://discord.gg/"
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-medium shadow-lg backdrop-blur-md border border-foreground/20 bg-white/40 dark:bg-background/40 z-50"
    />
  )
}