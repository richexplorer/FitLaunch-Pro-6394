import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Download() {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Download our app
            </h2>
            <p className="mt-4 text-lg text-red-100">
              Get started on your fitness journey today. Download our app and transform your life with personalized workouts, nutrition tracking, and expert guidance.
            </p>
            <div className="mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
              <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full bg-white text-primary hover:bg-gray-100 transition-colors">
                <FaApple className="h-6 w-6 mr-2" />
                App Store
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full bg-white text-primary hover:bg-gray-100 transition-colors">
                <FaGooglePlay className="h-6 w-6 mr-2" />
                Google Play
              </button>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Fitness App Screenshot"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}