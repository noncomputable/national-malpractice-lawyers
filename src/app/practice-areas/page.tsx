import Image from "next/image";

export default function PracticeAreas() {
  const practiceAreas = [
    {
      title: "Medical Malpractice",
      description: "Peter Anderson represents patients who have suffered harm due to medical negligence, including surgical errors, diagnostic failures, and treatment mistakes. With over 15 years of experience, he has secured millions in compensation for victims of medical malpractice.",
      icon: "/images/practice-areas/medical-malpractice-areas.jpg",
      examples: [
        "Surgical errors and complications",
        "Misdiagnosis and delayed diagnosis",
        "Birth injuries and obstetric negligence",
        "Medication errors and adverse reactions",
        "Emergency room negligence",
        "Hospital-acquired infections"
      ]
    },
    {
      title: "Federal Tort Claims Act (FTCA) Cases",
      description: "Specialized representation for claims against government healthcare facilities, particularly VA medical centers. Peter has successfully resolved multiple FTCA cases involving diagnostic failures and medical negligence.",
      icon: "/images/practice-areas/ftca-claims-icon.jpg",
      examples: [
        "VA medical center negligence",
        "Government hospital malpractice",
        "Federal healthcare facility errors",
        "Diagnostic failures in VA facilities",
        "Surgical errors in government hospitals",
        "Medication errors in federal facilities"
      ]
    },
    {
      title: "Nursing Home Abuse & Negligence",
      description: "Comprehensive representation for victims of nursing home abuse and negligence across DC, MD, and VA. Peter has extensive experience in nursing home cases and has created legal precedent in understaffing claims.",
      icon: "/images/practice-areas/nursing-home-icon.jpg",
      examples: [
        "Understaffing and neglect",
        "Bed sores and pressure ulcers",
        "Medication errors",
        "Falls and injuries",
        "Dehydration and malnutrition",
        "Physical and emotional abuse"
      ]
    },
    {
      title: "Birth Injuries",
      description: "Representation for families affected by preventable birth injuries. Peter has successfully resolved complex birth injury cases, including a notable $6.5 million settlement in Washington, D.C.",
      icon: "/images/practice-areas/medical-malpractice-areas.jpg",
      examples: [
        "Cerebral palsy",
        "Erb&apos;s palsy and brachial plexus injuries",
        "Brain damage and hypoxia",
        "Birth asphyxia",
        "Shoulder dystocia",
        "Maternal complications"
      ]
    },
    {
      title: "Surgical Errors",
      description: "Legal representation for victims of preventable surgical mistakes and complications. Peter handles cases involving various types of surgical negligence and post-operative complications.",
      icon: "/images/practice-areas/medical-malpractice-areas.jpg",
      examples: [
        "Wrong-site surgery",
        "Surgical instrument retention",
        "Anesthesia errors",
        "Post-operative complications",
        "Surgical technique errors",
        "Infection following surgery"
      ]
    },
    {
      title: "Diagnostic Errors",
      description: "Representation for patients harmed by diagnostic failures, including delayed diagnosis and misdiagnosis of serious medical conditions. Peter has successfully handled cases involving cancer, heart conditions, and other critical diagnoses.",
      icon: "/images/practice-areas/medical-malpractice-areas.jpg",
      examples: [
        "Cancer misdiagnosis and delayed diagnosis",
        "Heart attack and stroke misdiagnosis",
        "Infectious disease diagnostic errors",
        "Radiology interpretation errors",
        "Laboratory testing errors",
        "Delayed treatment due to diagnostic failure"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">Practice Areas</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Specialized legal representation by Peter Anderson for victims of medical negligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                    <Image
                      src={area.icon}
                      alt={`${area.title} icon`}
                      width={64}
                      height={64}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">{area.title}</h2>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">{area.description}</p>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">Common Cases Include:</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  {area.examples.map((example, idx) => (
                    <li key={idx} className="text-lg">{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Jurisdictions */}
        <div className="mt-24 bg-white rounded-2xl p-12 shadow-xl max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Jurisdictions We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Licensed and experienced across multiple states</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Image
                  src="/images/locations/dc-courthouse.jpg"
                  alt="DC Courthouse"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">District of Columbia</h3>
              <p className="text-gray-600 text-lg">Washington, D.C. medical malpractice cases</p>
            </div>
            <div className="text-center">
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Image
                  src="/images/locations/fairfax-va.jpg"
                  alt="Virginia Location"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Virginia</h3>
              <p className="text-gray-600 text-lg">VA medical centers and healthcare facilities</p>
            </div>
            <div className="text-center">
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Image
                  src="/images/locations/va-medical-center.jpg"
                  alt="Medical Center"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Maryland</h3>
              <p className="text-gray-600 text-lg">Maryland medical malpractice and nursing home cases</p>
            </div>
          </div>
        </div>

        {/* Attorney Expertise */}
        <div className="mt-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-12 shadow-xl">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Peter Anderson&apos;s Expertise</h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              With over 15 years of experience in medical malpractice law, Peter Anderson has successfully 
              represented hundreds of clients and secured millions in compensation. 
              He handles cases nationwide with a focus on medical malpractice, FTCA claims, and 
              nursing home abuse.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Practice Area</h3>
                <p className="text-blue-100 text-lg">Nationwide</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Experience</h3>
                <p className="text-blue-100 text-lg">15+ Years</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Contact</h3>
                <p className="text-blue-100 text-lg">peter@nationalmalpracticelawyers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-white rounded-2xl p-12 text-center shadow-xl max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Have You Been a Victim of Medical Malpractice?</h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Peter Anderson is here to help you understand your rights and fight for the compensation you deserve. 
            Contact him today for a free consultation.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-5 rounded-full font-bold text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 