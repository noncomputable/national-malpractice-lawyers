import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "National Medical Malpractice Lawyers | Expert Legal Representation",
  description: "Leading medical malpractice law firm with decades of experience helping victims of medical negligence. Free consultation available 24/7.",
};

interface RootLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-blue-900">National Medical Malpractice Lawyers</div>
              <div className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-blue-900">Home</a>
                <a href="/practice-areas" className="text-gray-700 hover:text-blue-900">Practice Areas</a>
                <a href="/about" className="text-gray-700 hover:text-blue-900">About Us</a>
                <a href="/articles" className="text-gray-700 hover:text-blue-900">Articles</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-900">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/practice-areas" className="hover:text-blue-400">Practice Areas</a></li>
                  <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                  <li><a href="/articles" className="hover:text-blue-400">Articles</a></li>
                  <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p>&copy; {new Date().getFullYear()} National Medical Malpractice Lawyers. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
