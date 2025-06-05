export default function About() {
  const teamMembers = [
    {
      name: "John Smith",
      title: "Managing Partner",
      bio: "With over 25 years of experience in medical malpractice law, John has successfully represented hundreds of clients and secured millions in compensation.",
      education: "J.D., Harvard Law School"
    },
    {
      name: "Sarah Johnson",
      title: "Senior Attorney",
      bio: "Sarah specializes in complex medical malpractice cases, particularly those involving surgical errors and birth injuries.",
      education: "J.D., Yale Law School"
    },
    {
      name: "Michael Chen",
      title: "Senior Attorney",
      bio: "Michael brings extensive experience in handling misdiagnosis and medication error cases, with a track record of successful outcomes.",
      education: "J.D., Stanford Law School"
    }
  ];

  const achievements = [
    {
      title: "Years of Experience",
      value: "25+",
      description: "Decades of fighting for medical malpractice victims"
    },
    {
      title: "Cases Won",
      value: "500+",
      description: "Successful outcomes for our clients"
    },
    {
      title: "Million Recovered",
      value: "$100M+",
      description: "Total compensation secured for clients"
    },
    {
      title: "Client Satisfaction",
      value: "98%",
      description: "Of clients would recommend our firm"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Firm</h1>
          <p className="text-xl max-w-3xl">
            We are a nationally recognized medical malpractice law firm dedicated to fighting for the rights of patients harmed by medical negligence.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600">
              We are committed to providing exceptional legal representation to victims of medical malpractice,
              ensuring they receive the compensation they deserve while holding healthcare providers accountable
              for their negligence.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{achievement.value}</div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <p className="text-gray-500">{member.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Firm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Experience & Expertise</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Decades of medical malpractice litigation experience</li>
                <li>• Access to top medical experts nationwide</li>
                <li>• Proven track record of successful outcomes</li>
                <li>• Deep understanding of medical procedures and standards</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Client-Focused Approach</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Personalized attention to each case</li>
                <li>• Clear and regular communication</li>
                <li>• Contingency fee basis - no fee unless we win</li>
                <li>• 24/7 availability for our clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Case?</h2>
          <p className="text-xl mb-8">
            Contact us today for a free, confidential consultation with our experienced medical malpractice attorneys.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
} 