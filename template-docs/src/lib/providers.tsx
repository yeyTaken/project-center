"use client";

import { LastUpdated, Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { HeroUIProvider } from "@heroui/react";

import Navbar from "@/_components/UI/Navbar";
import Footer from "@/_components/UI/Footer";
import Search from "@/_components/UI/Search";
import { CreatedBy } from "@/_components/UI/CreatedBy";

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Layout
      navbar={<Navbar />}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/yeytaken/project-center"
      lastUpdated={<LastUpdated>Última atualização em:</LastUpdated>}
      search={<Search />}
      footer={<Footer />}
      themeSwitch={{
        dark: "Escuro",
        light: "Claro",
        system: "Sistema"
      }}
      editLink="Editar esta página"
      feedback={{
        content: "Dúvidas? Envie seu feedback"
      }}
      toc={{
        float: true,
        backToTop: "Voltar ao topo",
        title: "Conteúdo da página",
        extraContent: (<CreatedBy />)
      }}
    >
      <HeroUIProvider>
        <div className="pt-24">{children}</div>
      </HeroUIProvider>
    </Layout>
  );
}
