const About = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">Moto Rent</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Your trusted partner in motorcycle rentals, providing quality bikes and exceptional service since 2010.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Story */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Founded in 2010, Moto Rent has grown from a small local business to a leading motorcycle rental service. 
              Our journey began with a simple mission: to provide riders with reliable, well-maintained motorcycles 
              and exceptional customer service.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              We strive to make motorcycle riding accessible to everyone by offering competitive rates, 
              comprehensive insurance options, and a diverse fleet of bikes. Our commitment to safety and 
              customer satisfaction drives everything we do.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Well-maintained fleet of motorcycles
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Competitive rental rates
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
                Comprehensive insurance options
              </li>
            </ul>
          </div>

          {/* Our Values */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Safety First
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Customer Satisfaction
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Quality Service
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Environmental Responsibility
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 