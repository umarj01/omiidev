
import type { Metadata } from 'next'
import './globals.css'
import Nav from './nav'
import { ThemeProvider } from 'next-themes'
import ModeToggle from '@/components/ui/darkMode'

export const metadata: Metadata = {
  title: 'Umar Javaid - Cybersecurity Expert, Web Developer & Educator',
  description: 'I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity. Explore my blog and portfolio for projects, tutorials, and industry knowledge.',
  keywords: 'Umar Javaid, cybersecurity expert, web developer, ethical hacker, security educator, tech mentor, pentester, researcher, full stack developer',
  authors: [{ name: 'Umar Javaid' }],
  creator: 'Umar Javaid',
  publisher: 'Umar Javaid',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'Umar Javaid - Cybersecurity Expert, Web Developer & Educator',
    description: 'I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity.',
    url: 'https://omii.dev',
    siteName: 'Umar Javaid',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umar Javaid - Cybersecurity Expert, Web Developer & Educator',
    description: 'I am a developer, pentester, and researcher sharing insights on technology, software development, and cybersecurity.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-20 ">
      <body className="antialiased  dark:bg-slate-950">
     
     <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
<Nav/>

        {children}
     </ThemeProvider>
        
       
      </body>
    </html>
  )
}