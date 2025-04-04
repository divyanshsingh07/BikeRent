import { Button } from './ui/button';
import { X } from 'lucide-react';

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Content */}
          <div className="mt-3">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Moto Rent
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Story
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Founded in 2020, Moto Rent has been at the forefront of the bike rental industry. 
                  We started with a simple mission: to make quality bikes accessible to everyone, 
                  whether they're commuting to work, exploring the city, or embarking on an adventure.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to providing sustainable, affordable, and convenient bike rental 
                  solutions. Our goal is to promote eco-friendly transportation while making biking 
                  accessible to all skill levels.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium quality bikes maintained to the highest standards
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Flexible rental options (hourly, daily, weekly)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 customer support
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competitive pricing
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Our Commitment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're dedicated to providing exceptional service and ensuring your safety. 
                  Our bikes undergo regular maintenance and safety checks, and we provide 
                  all necessary safety equipment with every rental.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-end">
              <Button
                onClick={onClose}
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal; 