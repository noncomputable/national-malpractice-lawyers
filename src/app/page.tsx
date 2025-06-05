import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-center mb-4">Expert Medical Malpractice Representation</h1>
            <p className="text-xl text-gray-600 text-center mb-8">
              We&apos;re dedicated to helping victims of medical negligence get the compensation they deserve
            </p>
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Surgical Errors",
                description: "Representing victims of preventable surgical mistakes and complications."
              },
              {
                title: "Misdiagnosis",
                description: "Fighting for patients harmed by delayed or incorrect diagnoses."
              },
              {
                title: "Birth Injuries",
                description: "Advocating for families affected by preventable birth injuries."
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Firm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Experience",
                description: "Over 25 years of medical malpractice litigation"
              },
              {
                title: "Results",
                description: "Millions recovered for our clients"
              },
              {
                title: "Resources",
                description: "Access to top medical experts nationwide"
              },
              {
                title: "Support",
                description: "24/7 availability for our clients"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Success */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Surgical Error Case",
                amount: "$2.5 Million",
                description: "Recovered for a patient who suffered complications from a preventable surgical error."
              },
              {
                title: "Misdiagnosis Case",
                amount: "$1.8 Million",
                description: "Secured for a family affected by a delayed cancer diagnosis."
              }
            ].map((case_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{case_.title}</h3>
                <p className="text-2xl font-bold text-blue-900 mb-3">{case_.amount}</p>
                <p className="text-gray-600">{case_.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Case?</h2>
          <p className="text-lg text-gray-600">
            Don&apos;t wait to get the help you deserve. Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
}
