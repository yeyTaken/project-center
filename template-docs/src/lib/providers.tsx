"use client";

import { LastUpdated, Layout } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { HeroUIProvider } from "@heroui/react";
import { Anchor } from "nextra/components";
import NextImage from 'next/image'

import Navbar from "@/_components/UI/Navbar";
import Footer from "@/_components/UI/Footer";
import Banner from "@/_components/UI/Banner";
import Search from "@/_components/UI/Search";

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Layout
      banner={<Banner />}
      navbar={<Navbar />}
      pageMap={await getPageMap()}
      docsRepositoryBase="https://github.com/yeytaken"
      lastUpdated={<LastUpdated>Última atualização em:</LastUpdated>}
      search={<Search />}
      footer={<Footer />}
      themeSwitch={{
        dark: "Escuro",
        light: "Claro",
        system: "Sistema"
      }}
      // feedback={{ content: "" }}
      toc={{
        extraContent: (
          <>
            <b className="mt-2 text-xs">Criado por:</b>
            <div className="mt-2 flex gap-2">
              {[
                {
                  url: 'https://github.com/yeytaken',
                  alt: 'Israel R. Jatobá',
                  img: "/images/R.png"
                }
              ].map(o => (
                <Anchor key={o.url} href={o.url}>
                  <NextImage
                    src={o.img}
                    title={o.alt}
                    alt={o.alt}
                    width={32}
                    height={32}
                    className="nextra-border rounded-sm border"
                  />
                </Anchor>
              ))}
            </div>

          </>
        )
      }}
    >
      <HeroUIProvider>
        <div className="pt-24">{children}</div>
      </HeroUIProvider>
    </Layout>
  );
}
