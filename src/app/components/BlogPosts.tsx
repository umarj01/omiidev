'use client'

import Link from 'next/link'

export default function BlogPosts() {
  const posts = [
    {
      title: 'Active Directory Pentesting Resources (2025 Guide)',
      excerpt: 'A comprehensive guide to Active Directory penetration testing techniques, tools, and best practices.',
      date: 'Jan 15, 2025',
      category: 'Cybersecurity',
      slug: 'active-directory-resources',
    },
    {
      title: 'Cipher\'s Secret Message – TryHackMe Walkthrough',
      excerpt: 'Step-by-step walkthrough of the Cipher\'s Secret Message challenge on TryHackMe platform.',
      date: 'Jan 10, 2025',
      category: 'CTF Writeup',
      slug: 'ciphers-secret-message',
    },
    {
      title: 'Volatility Essentials Walkthrough – Complete Memory Forensics Guide',
      excerpt: 'Learn memory forensics with Volatility 3. A complete guide to analyzing memory dumps and finding malware.',
      date: 'Jan 5, 2025',
      category: 'Forensics',
      slug: 'volatility-essentials',
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 md:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Recent Blog Posts
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
