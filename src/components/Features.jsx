import { motion } from 'framer-motion';
import { FaHeartbeat, FaApple, FaChartLine, FaUsers } from 'react-icons/fa';

const features = [
  {
    name: 'Personalized Workouts',
    description: 'AI-powered workout plans tailored to your goals and fitness level',
    icon: FaHeartbeat,
  },
  {
    name: 'Nutrition Tracking',
    description: 'Track your meals and get personalized nutrition recommendations',
    icon: FaApple,
  },
  {
    name: 'Progress Tracking',
    description: 'Monitor your progress with detailed analytics and insights',
    icon: FaChartLine,
  },
  {
    name: 'Community Support',
    description: 'Join a community of fitness enthusiasts and share your journey',
    icon: FaUsers,
  },
];

export default function Features() {
  return (
    <div id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Our comprehensive features help you stay on track and achieve your fitness goals
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <feature.icon className="mx-auto h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}