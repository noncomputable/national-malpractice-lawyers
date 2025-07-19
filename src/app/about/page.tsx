import Image from "next/image";

export default function About() {
  const experience = [
    {
      title: "Trial Attorney",
      company: "National Malpractice Lawyers",
      period: "Dec 2023 - Present",
      location: "Fairfax, VA · Remote",
      description: "Litigate medical malpractice and FTCA claims in Virginia and nationwide."
    },
    {
      title: "Mass Tort Common Benefit Attorney",
      company: "Chaffin Luhana LLP",
      period: "Jan 2023 - Nov 2023",
      location: "Fairfax, VA · Remote",
      description: "Performed common benefit work for Hair Relaxer and Paraquat multi-district litigations. Participated in science committee for Hair Relaxer MDL. Drafted summary judgment and Daubert briefs for Paraquat MDL."
    },
    {
      title: "Managing Partner",
      company: "Morgan & Morgan, P.A.",
      period: "Apr 2021 - Jan 2023",
      location: "Washington, District of Columbia",
      description: "Resolved DC birth injury case for $6.5 million. Resolved Virginia nursing home case for $500,000, creating new precedent on understaffing claims. Oversaw growth of Morgan & Morgan's first DC office."
    },
    {
      title: "Partner, Founder, and Head of Nursing Home Abuse Dept.",
      company: "KBA Attorneys",
      period: "Mar 2018 - Apr 2021",
      location: "Washington D.C.",
      description: "Created and managed nursing home abuse department. Resolved FTCA cases with U.S. government: $900,000 for VA medical center failure to diagnose prostate cancer, $1.5 million for failure to diagnose sepsis. Achieved over $5,000,000 in settlements for clients in 2020."
    },
    {
      title: "Associate Attorney",
      company: "Grenier Law Group",
      period: "Oct 2015 - Mar 2018",
      location: "Washington D.C.",
      description: "Assisted managing partner with catastrophic injury cases including Navy Yard Shooting litigation and plane crash case. Independently settled numerous nursing home negligence cases in DC, MD, and VA."
    },
    {
      title: "Associate Attorney",
      company: "Ashcraft & Gerel, LLP",
      period: "Jul 2010 - Oct 2015",
      location: "Washington D.C. Metro Area",
      description: "Litigated nursing home negligence, mass disaster, and mass tort matters nationally. Assisted partners in litigating claims from Upper Big Branch Mine Disaster and Granuflo multi-district litigation."
    }
  ];

  const education = [
    {
      school: "The George Washington University Law School",
      degree: "Juris Doctor, Law",
      period: "2006 - 2009",
      activities: "Student Bar Association - Director of Minority Affairs, Criminal Law Society, Sports and Entertainment Law Society"
    },
    {
      school: "University of Michigan",
      degree: "B.A., Psychology",
      period: "2002 - 2005",
      activities: "Phi Alpha Delta Pre-law fraternity, President of Mixed Initiative student group",
      honors: "National Dean's List 2004-2005, University Honors April 2003 and December 2005"
    }
  ];

  const achievements = [
    {
      title: "Years of Experience",
      value: "15+",
      description: "Decades of fighting for medical malpractice victims"
    },
    {
      title: "States Licensed",
      value: "3",
      description: "DC, MD, and VA with nationwide case handling"
    },
    {
      title: "Million Recovered",
      value: "$15M+",
      description: "Total compensation secured for clients"
    },
    {
      title: "Notable Cases",
      value: "100+",
      description: "Medical malpractice and FTCA cases handled"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">About Peter Anderson</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl leading-relaxed">
              Medical malpractice attorney with over 15 years of experience 
              representing victims of medical negligence nationwide. Specialized in medical malpractice 
              and Federal Tort Claims Act (FTCA) cases.
            </p>
          </div>
        </div>
      </section>

      {/* Attorney Profile */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Peter Anderson</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Peter Anderson is a dedicated medical malpractice attorney who has spent over 15 years 
                  fighting for the rights of patients harmed by medical negligence nationwide. 
                  He handles cases nationwide and has secured millions in compensation for his clients.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Peter specializes in medical malpractice litigation and Federal Tort Claims Act (FTCA) 
                  cases, particularly those involving VA medical centers and government healthcare facilities. 
                  His experience includes complex birth injury cases, nursing home negligence, surgical errors, 
                  and diagnostic failures.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Contact Information</h3>
                  <p className="text-gray-700 mb-3 text-lg">
                    <strong>Email:</strong> peter@nationalmalpracticelawyers.com
                  </p>
                  <p className="text-gray-700 mb-3 text-lg">
                    <strong>Firm:</strong> National Malpractice Lawyers
                  </p>
                  <p className="text-gray-700 text-lg">
                    <strong>Practice:</strong> Nationwide medical malpractice cases
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-96 h-96 mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/peter-anderson-headshot.jpg"
                    alt="Peter Anderson - Medical Malpractice Attorney"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Environment */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Office Environment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Professional facilities designed for client comfort and confidentiality</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/images/office/offer-exterior.jpg"
                alt="Office Environment"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/images/office/conference-room.jpg"
                alt="Office Environment"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src="/images/office/reception-area.jpg"
                alt="Office Environment"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Professional Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Proven track record of success in medical malpractice litigation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-blue-600 mb-4">{achievement.value}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Education</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Academic excellence and professional development</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{edu.school}</h3>
                <p className="text-blue-600 font-bold text-lg mb-3">{edu.degree}</p>
                <p className="text-gray-600 mb-3 text-lg">{edu.period}</p>
                <p className="text-gray-600 mb-3">{edu.activities}</p>
                {edu.honors && (
                  <p className="text-gray-700 font-semibold bg-yellow-50 p-3 rounded-lg">{edu.honors}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive legal experience across multiple prestigious firms</p>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <span className="text-blue-600 font-bold text-lg">{exp.period}</span>
                </div>
                <p className="text-blue-600 font-bold text-lg mb-3">{exp.company}</p>
                <p className="text-gray-600 mb-4 text-lg">{exp.location}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Cases */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Notable Case Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results that make a difference in clients&apos; lives</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">DC Birth Injury Case</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$6.5 Million</p>
              <p className="text-gray-700 leading-relaxed">Resolved complex birth injury case in Washington, D.C. involving preventable complications.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">VA Nursing Home Case</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$500,000</p>
              <p className="text-gray-700 leading-relaxed">Secured compensation while creating new precedent on understaffing claims in Virginia.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">FTCA Prostate Cancer Case</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$900,000</p>
              <p className="text-gray-700 leading-relaxed">Resolved case against VA medical center for failure to diagnose prostate cancer.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">FTCA Sepsis Case</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$1.5 Million</p>
              <p className="text-gray-700 leading-relaxed">Settled case against VA medical center for failure to diagnose sepsis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Discuss Your Case?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Contact Peter Anderson today for a free, confidential consultation. 
            Email is the best way to reach him: peter@nationalmalpracticelawyers.com
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
} 