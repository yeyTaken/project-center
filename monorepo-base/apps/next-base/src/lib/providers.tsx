"use client";

import { NextIntlClientProvider } from "next-intl";
import { HeroUIProvider } from "@heroui/react";

import { ThemeProvider } from "./theme";
import { Footer } from "@/components/ui/Footer";

export function Providers({
  children,
  locale,
  messages
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <HeroUIProvider>
          {children}
          <Footer />
        </HeroUIProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
