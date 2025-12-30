import type { MetaRecord } from "nextra";
import { AiFillDiscord } from "react-icons/ai";
import { FaHome, FaUpload } from "react-icons/fa";

const index = (
  <span style={{ display: "flex", alignItems: "center" }}>
    <FaHome style={{ marginRight: "0.5em" }} />
    Introdução
  </span>
);

const docsCloneGuide = (
  <span style={{ display: "flex", alignItems: "center" }}>
    <FaUpload style={{ marginRight: "0.5em" }} />
    Instalação
  </span>
);

const discord = (
  <span style={{ display: "flex", alignItems: "center" }}>
    <AiFillDiscord style={{ marginRight: "0.5em" }} />
    Discord
  </span>
);

export default {
  index: {
    title: index,
  },

  _: {
    type: "separator",
    title: "Geral",
  },

  "docs-clone-guide": {
    title: docsCloneGuide,
  },

  __: {
    type: "separator",
    title: "Outros",
  },

  "discord-link": {
    title: discord,
    href: "/discord",
  },
} satisfies MetaRecord;
