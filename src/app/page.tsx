import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Expert Medical Malpractice
              <span className="block text-blue-200">Representation</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Peter Anderson, with over 15 years of experience fighting for victims of medical negligence nationwide
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Free Consultation
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                Meet Peter Anderson
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Attorney */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Meet Peter Anderson</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Medical malpractice attorney handling cases nationwide. 
                  With over 15 years of experience, Peter has secured millions in compensation for victims 
                  of medical negligence.
                </p>
                <div className="space-y-6 mb-10">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 text-lg">Nationwide Practice</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 text-lg">Nationwide case handling</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 text-lg">Specialized in medical malpractice and FTCA claims</span>
                  </div>
                </div>
                <a
                  href="/about"
                  className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors group"
                >
                  Learn More About Peter 
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="text-center">
                <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                                      <Image
                      src="/images/peter-anderson-headshot.jpg"
                      alt="Peter Anderson - Medical Malpractice Attorney"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas with Icons */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Practice Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Specialized legal representation for victims of medical negligence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Medical Malpractice",
                description: "Representing victims of surgical errors, misdiagnosis, birth injuries, and other medical negligence.",
                icon: "/images/practice-areas/medical-malpractice-areas.jpg"
              },
              {
                title: "FTCA Claims",
                description: "Handling Federal Tort Claims Act cases against government healthcare facilities and VA medical centers.",
                icon: "/images/practice-areas/ftca-claims-icon.jpg"
              },
              {
                title: "Nursing Home Abuse",
                description: "Advocating for victims of nursing home negligence and abuse across DC, MD, and VA.",
                icon: "/images/practice-areas/nursing-home-icon.jpg"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <Image
                      src={area.icon}
                      alt={`${area.title} icon`}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">{area.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Our Office</h2>
                <h3 className="text-2xl font-semibold mb-6 text-blue-600">National Malpractice Lawyers</h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Located in Fairfax, Virginia, our office serves clients throughout DC, MD, and VA. 
                  We handle medical malpractice cases nationwide with a focus on the Washington, D.C. metro area.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 text-lg">Fairfax, Virginia Office</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 text-lg">Serving DC, MD, and VA</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700 text-lg">Nationwide Case Handling</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/locations/fairfax-va.jpg"
                    alt="Fairfax, Virginia Office Location"
                    width={500}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Peter Anderson</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">Proven results and dedicated representation for medical malpractice victims</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Experience",
                description: "15+ years of medical malpractice litigation"
              },
              {
                title: "Results",
                description: "Millions recovered for clients including $6.5M birth injury case"
              },
              {
                title: "Expertise",
                description: "Specialized in medical malpractice and FTCA claims"
              },
              {
                title: "Accessibility",
                description: "Email: peter@nationalmalpracticelawyers.com"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Success */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Notable Case Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results for real clients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "DC Birth Injury Case",
                amount: "$6.5 Million",
                description: "Resolved a complex birth injury case in Washington, D.C. involving preventable complications."
              },
              {
                title: "VA Nursing Home Case",
                amount: "$500,000",
                description: "Secured compensation while creating new precedent on understaffing claims in Virginia."
              },
              {
                title: "FTCA Prostate Cancer Case",
                amount: "$900,000",
                description: "Resolved case against VA medical center for failure to diagnose prostate cancer."
              },
              {
                title: "FTCA Sepsis Case",
                amount: "$1.5 Million",
                description: "Settled case against VA medical center for failure to diagnose sepsis."
              }
            ].map((case_, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{case_.title}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">{case_.amount}</p>
                <p className="text-gray-600 leading-relaxed">{case_.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Discuss Your Case?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Contact Peter Anderson today for a free consultation. Email is the best way to reach him: peter@nationalmalpracticelawyers.com
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
