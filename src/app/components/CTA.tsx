'use client'

import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Enhance Your Tech Skills?
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of students learning cybersecurity, web development, and advanced tech skills from industry experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
          >
            View Plans
          </Link>
          <Link
            href="mailto:hi@omii.dev"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
