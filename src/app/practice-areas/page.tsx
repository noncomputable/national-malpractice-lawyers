export default function PracticeAreas() {
  const practiceAreas = [
    {
      title: "Surgical Errors",
      description: "We represent patients who have suffered harm due to preventable surgical mistakes, including wrong-site surgery, surgical instrument retention, and anesthesia errors.",
      examples: [
        "Wrong-site surgery",
        "Surgical instrument retention",
        "Anesthesia errors",
        "Post-operative complications",
        "Surgical technique errors"
      ]
    },
    {
      title: "Misdiagnosis & Delayed Diagnosis",
      description: "When doctors fail to diagnose or delay diagnosing serious conditions, the consequences can be devastating. We help victims of diagnostic errors seek justice.",
      examples: [
        "Cancer misdiagnosis",
        "Heart attack misdiagnosis",
        "Stroke misdiagnosis",
        "Infectious disease misdiagnosis",
        "Delayed treatment"
      ]
    },
    {
      title: "Birth Injuries",
      description: "We advocate for families affected by preventable birth injuries, helping them secure compensation for medical expenses and ongoing care.",
      examples: [
        "Cerebral palsy",
        "Erb's palsy",
        "Brain damage",
        "Birth asphyxia",
        "Shoulder dystocia"
      ]
    },
    {
      title: "Medication Errors",
      description: "Medication errors can have serious consequences. We represent patients harmed by prescription mistakes, dosage errors, and adverse drug interactions.",
      examples: [
        "Wrong medication",
        "Incorrect dosage",
        "Drug interactions",
        "Allergic reactions",
        "Pharmacy errors"
      ]
    },
    {
      title: "Emergency Room Errors",
      description: "Emergency room mistakes can be life-threatening. We help victims of ER negligence seek compensation for their injuries.",
      examples: [
        "Failure to diagnose",
        "Delayed treatment",
        "Inadequate monitoring",
        "Discharge errors",
        "Triage mistakes"
      ]
    },
    {
      title: "Hospital Negligence",
      description: "We represent patients harmed by hospital negligence, including inadequate staffing, poor supervision, and failure to maintain proper standards of care.",
      examples: [
        "Inadequate staffing",
        "Poor supervision",
        "Infection control failures",
        "Equipment malfunctions",
        "Patient monitoring errors"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Practice Areas</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Specialized legal representation for victims of medical negligence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-semibold mb-4">{area.title}</h2>
                <p className="text-gray-600 mb-6">{area.description}</p>
                
                <h3 className="text-lg font-medium mb-3">Common Cases Include:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {area.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Have You Been a Victim of Medical Malpractice?</h2>
          <p className="text-xl mb-8">
            Our experienced attorneys are here to help you understand your rights and fight for the compensation you deserve.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 