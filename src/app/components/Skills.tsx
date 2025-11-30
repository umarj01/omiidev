'use client'

export default function Skills() {
  const skills = [
    {
      title: 'Cybersecurity Expert',
      description: 'Penetration testing, vulnerability assessment, and security auditing. I help organizations identify and fix security weaknesses.',
      icon: '🔒',
    },
    {
      title: 'Web Developer',
      description: 'Full-stack web development with modern frameworks. Building scalable, secure, and user-friendly applications.',
      icon: '💻',
    },
    {
      title: 'Educator & Mentor',
      description: 'Teaching cybersecurity, web development, and tech skills through courses, tutorials, and mentorship programs.',
      icon: '📚',
    },
  ]

  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Secure cloud solutions and infrastructure setup',
    },
    {
      title: 'Cybersecurity Services',
      description: 'Penetration testing and security audits',
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end application development',
    },
    {
      title: 'Network Automation',
      description: 'Automated network management and monitoring',
    },
    {
      title: 'Data Analytics',
      description: 'Data analysis and visualization solutions',
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Skills & Services Offered
        </h2>

        {/* Main Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
