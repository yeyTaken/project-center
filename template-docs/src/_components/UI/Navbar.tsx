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
    />
  )
}