'use client'

import Link from 'next/link'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$49',
      period: '/month',
      description: 'Perfect for beginners',
      features: [
        'Access to basic courses',
        'Email support',
        'Course materials',
        'Community access',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'For serious learners',
      features: [
        'All Basic features',
        'Advanced courses',
        'Priority support',
        '1-on-1 mentoring (2 sessions)',
        'Certificate of completion',
        'Exclusive resources',
      ],
      cta: 'Subscribe Now',
      highlighted: true,
    },
    {
      name: 'Premium',
      price: '$199',
      period: '/month',
      description: 'For professionals',
      features: [
        'All Pro features',
        'Unlimited mentoring',
        'Custom training programs',
        'Job placement assistance',
        'Lifetime access',
        'Priority community support',
        'Exclusive projects',
      ],
      cta: 'Go Premium',
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Choose a Subscription Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-all ${
                plan.highlighted
                  ? 'ring-2 ring-blue-500 shadow-xl md:scale-105'
                  : 'border border-slate-200 dark:border-slate-700'
              } ${
                plan.highlighted
                  ? 'bg-white dark:bg-slate-900'
                  : 'bg-white dark:bg-slate-900'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white py-2 text-center text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {plan.period}
                  </span>
                </div>
                <Link
                  href={`/subscribe/${plan.name.toLowerCase()}`}
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-colors mb-8 ${
                    plan.highlighted
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {plan.cta}
                </Link>
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-400 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
