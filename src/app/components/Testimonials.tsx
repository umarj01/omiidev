'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Adeel Khan',
      role: 'Security Manager',
      content: 'Umar\'s penetration testing services helped us identify critical vulnerabilities in our infrastructure. His detailed reports and recommendations were invaluable.',
      avatar: 'AK',
    },
    {
      name: 'Sana Malik',
      role: 'CTO',
      content: 'Working with Umar on our web development project was a great experience. He delivered a scalable, secure, and user-friendly application on time.',
      avatar: 'SM',
    },
    {
      name: 'Faisal Iqbal',
      role: 'Developer',
      content: 'Umar\'s courses on cybersecurity have been incredibly helpful. His teaching style is clear, practical, and engaging. Highly recommended!',
      avatar: 'FI',
    },
    {
      name: 'Zainab Ahmed',
      role: 'Project Lead',
      content: 'Umar\'s mentorship has significantly improved our team\'s understanding of security best practices. A true professional and mentor.',
      avatar: 'ZA',
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          What People Say About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                    {testimonial.avatar}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 italic">
                &quot;{testimonial.content}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
