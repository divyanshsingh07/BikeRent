import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer id="contact" className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-600 dark:text-blue-400">Moto</span> Rent
            </h3>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Your trusted partner for motorcycle rentals. Quality bikes, competitive prices, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/arsh.singh.773124" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/arshthakur07/" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://x.com/Arshthakur07" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Home</a>
              </li>
              <li>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>About Us</a>
              </li>
              <li>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Services</a>
              </li>
              <li>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>+91 95175 93294</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>info@motorent.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1" />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  123 Ram Path<br />
                  Ayodhya<br />
                  Uttar Pradesh - 224123
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} mt-12 pt-8 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>&copy; {new Date().getFullYear()} Moto Rent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;