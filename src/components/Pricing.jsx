import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const plans = [
  {
    name: 'Basic',
    price: '9.99',
    features: [
      'Personalized workout plans',
      'Basic nutrition tracking',
      'Progress monitoring',
      'Community access'
    ]
  },
  {
    name: 'Pro',
    price: '19.99',
    featured: true,
    features: [
      'Everything in Basic',
      'Advanced analytics',
      'Personal coach',
      'Custom meal plans',
      'Priority support'
    ]
  },
  {
    name: 'Elite',
    price: '29.99',
    features: [
      'Everything in Pro',
      'Live training sessions',
      'Nutrition consultation',
      'Exclusive content',
      'Family account'
    ]
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Select the perfect plan for your fitness journey
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.featured ? 'transform scale-105 bg-white' : 'bg-white'
              }`}
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-center text-gray-900">
                  {plan.name}
                </h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-5xl font-extrabold">${plan.price}</span>
                  <span className="ml-2 text-xl font-medium text-gray-500 self-end">
                    /month
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <FaCheck className="h-5 w-5 text-primary" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className={`w-full py-3 px-6 rounded-full text-center font-medium ${
                    plan.featured
                      ? 'bg-primary text-white hover:bg-red-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  } transition-colors`}>
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}