import { Head } from 'nextra/components'

import '../../public/styles/globals.css'
import { Providers } from '@/lib/providers';

export const metadata = {
  metadataBase: new URL('https://example.com/'),
  applicationName: 'Template Docs',
  appleWebApp: {
    title: 'Template Docs'
  },
  title: {
    default: "Template Docs",
    template: `Template Docs — %s`,
  },
  authors: [
    { name: "Israel R. Jatobá", url: "https://github.com/yeytaken" }
  ],
  creator: "Israel R. Jatobá",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'Template Docs',
    locale: 'en_US',
    type: 'website'
  },
  keywords: [
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
    <html lang="pt" dir="ltr" suppressHydrationWarning >
      <Head
        backgroundColor={{
          dark: '#000000',
          light: '#ffffff'
        }}
      />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}