import './globals.css'
import { Toaster } from "sonner"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ConvexClientProvider } from '@/components/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yestion',
  description: 'Notion Clone',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo_dark.svg",
        href: "/logo_dark.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo_light.svg",
        href: "/logo_light.svg"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey='yestion-theme'
          >
            <Toaster position='bottom-center' />
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
