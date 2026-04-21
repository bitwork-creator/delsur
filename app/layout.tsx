import type { Metadata } from 'next'
import { Oswald, DM_Sans } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DELSUR · Diseño Web y Google Ads · Valencia',
  description: 'Diseño, desarrollo y Google Ads para negocios que quieren resultados reales. Sin agencia. Sin plantillas. Desde el sur del mundo.',
  keywords: 'diseño web Valencia, Google Ads Valencia, CRO, Next.js, WordPress, freelance web Valencia',
  authors: [{ name: 'Brenda · DELSUR' }],
  openGraph: {
    title: 'DELSUR · Diseño Web y Google Ads · Valencia',
    description: 'Del sur del mundo, para cualquier lado.',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var s = localStorage.getItem('theme');
                var p = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (s === 'dark' || (!s && p)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${oswald.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  )
}
