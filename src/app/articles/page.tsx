export default function Articles() {
  const articles = [
    {
      title: "Understanding Medical Malpractice: A Comprehensive Guide",
      excerpt: "Learn about what constitutes medical malpractice, common types of cases, and how to determine if you have a valid claim.",
      date: "March 15, 2024",
      category: "Medical Malpractice Basics"
    },
    {
      title: "The Impact of Surgical Errors on Patient Outcomes",
      excerpt: "An in-depth analysis of common surgical errors, their consequences, and how to seek compensation for preventable mistakes.",
      date: "March 10, 2024",
      category: "Surgical Errors"
    },
    {
      title: "Misdiagnosis: When Doctors Get It Wrong",
      excerpt: "Understanding the devastating effects of misdiagnosis and delayed diagnosis in medical malpractice cases.",
      date: "March 5, 2024",
      category: "Misdiagnosis"
    },
    {
      title: "Birth Injuries: Protecting Your Family's Rights",
      excerpt: "A guide to understanding birth injuries, their causes, and the legal options available to affected families.",
      date: "February 28, 2024",
      category: "Birth Injuries"
    },
    {
      title: "The Role of Expert Witnesses in Medical Malpractice Cases",
      excerpt: "How medical experts strengthen malpractice claims and help secure fair compensation for victims.",
      date: "February 20, 2024",
      category: "Legal Process"
    },
    {
      title: "Statute of Limitations in Medical Malpractice Cases",
      excerpt: "Understanding the time limits for filing medical malpractice claims and why acting quickly is crucial.",
      date: "February 15, 2024",
      category: "Legal Process"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Medical Malpractice Articles</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Expert insights and valuable information about medical malpractice law
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

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">Need Legal Advice?</h2>
          <p className="text-gray-600 mb-8">
            Our experienced medical malpractice attorneys are here to help you understand your rights
            and guide you through the legal process.
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