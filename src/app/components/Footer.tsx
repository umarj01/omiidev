'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Platform: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Courses', href: '/courses' },
    ],
    Resources: [
      { label: 'Downloads', href: '/downloads' },
      { label: 'VU Study Material', href: '/vu-study-material' },
      { label: 'Tools', href: '/tools' },
      { label: 'Documentation', href: '/docs' },
    ],
    Tools: [
      { label: 'Web Development', href: '/service/web-development' },
      { label: 'Cloud Infrastructure', href: '/service/cloud-infrastructure' },
      { label: 'Cybersecurity', href: '/service/cybersecurity' },
      { label: 'Analytics', href: '/service/analytics' },
    ],
    Contact: [
      { label: 'Email', href: 'mailto:hi@omii.dev' },
      { label: 'GitHub', href: 'https://github.com/evildevill' },
      { label: 'Twitter', href: 'https://twitter.com/hackerwasii' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/hackerwasii' },
    ],
  }

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden">
                <span className="text-white font-bold text-sm">UJ</span>
              </div>
              <span className="text-lg font-bold text-white">Umar Javaid</span>
            </Link>
            <p className="text-sm text-slate-400">
              Cybersecurity expert, web developer, and educator.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} Umar Javaid. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
