export default function Articles() {
  const articles = [
    {
      title: "Understanding Medical Malpractice: Your Rights as a Patient",
      excerpt: "Learn about what constitutes medical malpractice, the elements required to prove negligence, and how to determine if you have a valid claim. Understanding your rights is the first step toward justice.",
      date: "March 15, 2024",
      category: "Medical Malpractice Basics"
    },
    {
      title: "FTCA Claims: Suing the Government for Medical Negligence",
      excerpt: "Federal Tort Claims Act cases involve unique procedures and challenges. Learn about filing claims against VA medical centers and other government healthcare facilities.",
      date: "March 10, 2024",
      category: "FTCA Claims"
    },
    {
      title: "Birth Injuries: When Medical Negligence Affects Newborns",
      excerpt: "Birth injuries can have lifelong consequences for families. Understanding the causes, types of injuries, and legal options available to affected families.",
      date: "March 5, 2024",
      category: "Birth Injuries"
    },
    {
      title: "Nursing Home Abuse: Recognizing and Addressing Neglect",
      excerpt: "Nursing home abuse and neglect are unfortunately common. Learn to recognize the signs of abuse and understand your legal rights when a loved one has been harmed.",
      date: "February 28, 2024",
      category: "Nursing Home Abuse"
    },
    {
      title: "Surgical Errors: When Preventable Mistakes Cause Harm",
      excerpt: "Surgical errors can be devastating for patients and families. Understanding common surgical mistakes and how to seek compensation for preventable complications.",
      date: "February 20, 2024",
      category: "Surgical Errors"
    },
    {
      title: "Diagnostic Errors: The Hidden Epidemic in Healthcare",
      excerpt: "Misdiagnosis and delayed diagnosis affect millions of patients annually. Learn about common diagnostic errors and their potentially devastating consequences.",
      date: "February 15, 2024",
      category: "Diagnostic Errors"
    },
    {
      title: "The Role of Expert Witnesses in Medical Malpractice Cases",
      excerpt: "Medical expert witnesses are crucial in proving medical malpractice claims. Understanding how experts strengthen cases and help secure fair compensation.",
      date: "February 10, 2024",
      category: "Legal Process"
    },
    {
      title: "Statute of Limitations: Time Limits for Medical Malpractice Claims",
      excerpt: "Medical malpractice claims have strict time limits that vary by state. Understanding these deadlines and why acting quickly is crucial for your case.",
      date: "February 5, 2024",
      category: "Legal Process"
    },
    {
      title: "Medication Errors: When Prescription Mistakes Cause Harm",
      excerpt: "Medication errors are among the most common types of medical malpractice. Learn about prescription mistakes, dosage errors, and adverse drug interactions.",
      date: "January 30, 2024",
      category: "Medication Errors"
    },
    {
      title: "Emergency Room Negligence: When Urgent Care Goes Wrong",
      excerpt: "Emergency room errors can be life-threatening. Understanding common ER mistakes and how to seek compensation for emergency care negligence.",
      date: "January 25, 2024",
      category: "Emergency Room Errors"
    },
    {
      title: "Hospital-Acquired Infections: When Medical Care Causes Harm",
      excerpt: "Hospital-acquired infections are often preventable. Learn about the causes, consequences, and legal options when infections result from medical negligence.",
      date: "January 20, 2024",
      category: "Hospital Negligence"
    },
    {
      title: "Choosing the Right Medical Malpractice Attorney",
      excerpt: "Selecting the right attorney is crucial for your medical malpractice case. Learn what to look for and questions to ask when choosing legal representation.",
      date: "January 15, 2024",
      category: "Legal Process"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Medical Malpractice Articles</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Expert insights and valuable information about medical malpractice law by Peter Anderson
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{article.category}</div>
                <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Attorney Information */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">About the Author</h2>
            <p className="text-xl mb-6">
              Peter Anderson is a medical malpractice attorney with over 15 years of experience representing 
              victims of medical negligence. He handles cases nationwide and 
              has secured millions in compensation for his clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">Specializations</h3>
                <p>Medical Malpractice, FTCA Claims, Nursing Home Abuse</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <p>15+ Years of Medical Malpractice Litigation</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p>peter@nationalmalpracticelawyers.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Need Legal Advice?</h2>
          <p className="text-gray-600 mb-8">
            Peter Anderson is here to help you understand your rights and guide you through the legal process. 
            Contact him today for a free consultation about your medical malpractice case.
          </p>
          <a
            href="/contact"
            className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
} 