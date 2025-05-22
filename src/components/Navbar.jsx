import { motion } from 'framer-motion';
import { FaDumbbell } from 'react-icons/fa';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FaDumbbell className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-secondary">FitLife</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
            <a href="#download" className="text-gray-600 hover:text-primary">Download</a>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}