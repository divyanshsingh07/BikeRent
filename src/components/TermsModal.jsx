import { Button } from './ui/button';
import { X } from 'lucide-react';

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Terms and Conditions
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Eligibility Requirements</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Must be at least 21 years of age</li>
                <li>Must possess a valid Indian driving license for motorcycles</li>
                <li>Must have at least 2 years of riding experience</li>
                <li>Must provide valid government-issued ID proof</li>
                <li>Must have a valid address proof</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Documentation Required</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Valid driving license (both original and photocopy)</li>
                <li>PAN card or Aadhar card</li>
                <li>Recent passport-size photographs</li>
                <li>Address proof (utility bill, rental agreement, etc.)</li>
                <li>Valid credit/debit card for security deposit</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Rental Terms</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimum rental period: 24 hours</li>
                <li>Security deposit: ₹5,000 - ₹10,000 (refundable)</li>
                <li>Daily rental rates vary based on bike model</li>
                <li>Fuel charges are not included in rental price</li>
                <li>Overtime charges apply for late returns</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Insurance and Liability</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Basic insurance coverage included</li>
                <li>Renter is liable for any damage to the vehicle</li>
                <li>Personal accident insurance available at extra cost</li>
                <li>Renter must report any accidents immediately</li>
                <li>Insurance claims subject to police report</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. Usage Restrictions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>No off-road riding allowed</li>
                <li>No pillion riders without prior permission</li>
                <li>No modification to the vehicle allowed</li>
                <li>Must follow all traffic rules and regulations</li>
                <li>No smoking or consumption of alcohol while riding</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. Maintenance and Repairs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular maintenance provided by company</li>
                <li>Renter must report any mechanical issues</li>
                <li>Emergency roadside assistance available 24/7</li>
                <li>Renter responsible for regular fuel checks</li>
                <li>No unauthorized repairs allowed</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Cancellation Policy</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free cancellation up to 24 hours before pickup</li>
                <li>50% charge for cancellation within 24 hours</li>
                <li>No refund for no-shows</li>
                <li>Early return subject to availability</li>
                <li>Weather-related cancellations handled case by case</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. Additional Charges</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Late return: ₹500 per hour</li>
                <li>Cleaning fee: ₹500 (if bike returned dirty)</li>
                <li>Damage charges as per assessment</li>
                <li>Traffic violation fines borne by renter</li>
                <li>Helmet damage/loss: ₹1,000 per helmet</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 flex justify-end">
            <Button
              onClick={onClose}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal; 