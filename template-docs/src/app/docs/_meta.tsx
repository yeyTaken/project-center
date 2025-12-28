import type { MetaRecord } from "nextra";
import { AiFillDiscord } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

const index = (
  <span style={{ display: "flex", alignItems: "center" }}>
    <FaHome style={{ marginRight: "0.5em" }} />
    Introdução
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
    theme: {
      footer: false,
      navbar: true,
    },
  },

  _: {
    type: "separator",
    title: "Outros",
  },

  "discord-link": {
    title: discord,
    href: "/discord",
  },
} satisfies MetaRecord;
