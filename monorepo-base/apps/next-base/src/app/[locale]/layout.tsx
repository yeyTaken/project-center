import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";

import "../../../public/styles/globals.css";
import { Providers } from "@/lib/providers";
import { routing } from "@/lib/i18n/routing";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Next Base",
  description: "next.js monorepo starter kit",
};

export default async function LocaleLayout({ children, params }: Props) {
  const messages = await getMessages();
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
