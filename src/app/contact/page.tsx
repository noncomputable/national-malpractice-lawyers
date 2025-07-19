export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Peter Anderson</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Get in touch with Peter Anderson for a free consultation about your medical malpractice case
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Peter Anderson</h3>
                  <p className="text-gray-600 mb-1">Medical Malpractice Attorney</p>
                  <p className="text-gray-600 mb-1">National Malpractice Lawyers</p>
                  <p className="text-gray-600">Nationwide Medical Malpractice Attorney</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Email (Preferred Contact Method)</h4>
                  <a 
                    href="mailto:peter@nationalmalpracticelawyers.com" 
                    className="text-blue-900 hover:text-blue-700 font-medium"
                  >
                    peter@nationalmalpracticelawyers.com
                  </a>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Practice Areas</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Medical Malpractice</li>
                    <li>• FTCA Claims (Government Healthcare)</li>
                    <li>• Nursing Home Abuse & Negligence</li>
                    <li>• Birth Injuries</li>
                    <li>• Surgical Errors</li>
                    <li>• Diagnostic Errors</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-600">15+ years of medical malpractice litigation</p>
                  <p className="text-gray-600">Millions recovered for clients</p>
                  <p className="text-gray-600">Nationwide case handling</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6">Send Peter a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="case" className="block text-sm font-medium text-gray-700 mb-1">
                    Case Type
                  </label>
                  <select
                    id="case"
                    name="case"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a case type</option>
                    <option value="medical-malpractice">Medical Malpractice</option>
                    <option value="ftca-claim">FTCA Claim (Government Healthcare)</option>
                    <option value="nursing-home-abuse">Nursing Home Abuse & Negligence</option>
                    <option value="birth-injury">Birth Injury</option>
                    <option value="surgical-error">Surgical Error</option>
                    <option value="diagnostic-error">Diagnostic Error</option>
                    <option value="medication-error">Medication Error</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State Where Incident Occurred
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a state</option>
                    <option value="dc">District of Columbia</option>
                    <option value="md">Maryland</option>
                    <option value="va">Virginia</option>
                    <option value="other">Other State</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Brief Description of Your Case
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please provide a brief description of what happened and when..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Send Message to Peter
                </button>
              </form>
            </div>
          </div>

          {/* Free Consultation Info */}
          <div className="mt-12 bg-blue-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Free Consultation</h2>
            <p className="text-xl mb-6">
              Peter Anderson offers free, confidential consultations for medical malpractice cases. 
              He will review your case and explain your legal options without any obligation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">No Fee Unless We Win</h3>
                <p>Contingency fee basis - you pay nothing unless we recover compensation</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Confidential</h3>
                <p>All consultations are completely confidential</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Nationwide</h3>
                <p>Handles cases nationwide</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-center text-gray-600">
            <p className="mb-4">
              By submitting this form, you agree to our privacy policy and consent to being contacted by Peter Anderson.
            </p>
            <p>
              This form does not create an attorney-client relationship. Please do not include any confidential information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 