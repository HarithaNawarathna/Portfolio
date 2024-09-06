import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haritha's Portfolio",
  description: "Modern & Minimalist JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${opensans.className} flex flex-col min-h-screen`}>
        {/* Header */}
        <header className="bg-blue-600 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Haritha's Portfolio</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:text-red-300">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-red-300">About</a>
                </li>
                <li>
                  <a href="/skills" className="hover:text-red-300">Skills</a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-red-300">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Haritha's Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
