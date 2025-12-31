import { Head } from 'nextra/components'

import '../../public/styles/globals.css'
import { Providers } from '@/lib/providers';
import { settings } from '@/lib';

export const metadata = {
  metadataBase: new URL(settings.links.site),
  applicationName: settings.name,
  description: "Documentação oficial do template de docs feito com Nextra.",
  appleWebApp: {
    title: settings.name
  },
  title: {
    default: settings.name,
    template: `${settings.name} — %s`,
  },
  authors: [
    { name: settings.author, url: "https://github.com/yeytaken" }
  ],
  creator: settings.author,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: settings.name,
    locale: 'pt_BR',
    type: 'website'
  },
  keywords: [
    settings.name,
    'Nextra',
    'Next.js',
    'React',
    'JavaScript',
    'MDX',
    'Markdown',
    'Static Site Generator'
  ],
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="pt" dir="ltr" suppressHydrationWarning>
      <Head
        backgroundColor={{
          dark: '#000000',
          light: '#ffffff'
        }}
      />
      <body>
        <div className="min-h-screen w-full relative">
          {/* Background */}
          <div
            className="
    pointer-events-none fixed inset-0 z-0
    dark:opacity-[0.1]
    dark:brightness-100
  "
            style={{
              backgroundImage: `
      linear-gradient(to right, #e7e5e4 1px, transparent 1px),
      linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
    `,
              backgroundSize: "20px 20px",
              maskImage: `
      repeating-linear-gradient(
        to right,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      repeating-linear-gradient(
        to bottom,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
    `,
              WebkitMaskImage: `
      repeating-linear-gradient(
        to right,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      repeating-linear-gradient(
        to bottom,
        black 0px,
        black 3px,
        transparent 3px,
        transparent 8px
      ),
      radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
    `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />


          {/* Conteúdo real */}
          <div className="relative z-10">
            <Providers>{children}</Providers>
          </div>
        </div>
      </body>
    </html>
  )
}
