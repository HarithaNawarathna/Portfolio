import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <ul className="list-disc pl-5 mb-6">
        <li className="mb-2">
          <Link href="/" className="text-blue-500 hover:underline">Home</Link>
        </li>
        <li className="mb-2">
          <Link href="/About" className="text-blue-500 hover:underline">About</Link>
        </li>
        <li className="mb-2">
          <Link href="/Contact" className="text-blue-500 hover:underline">Contact</Link>
        </li>
        <li className="mb-2">
          <Link href="/Skills" className="text-blue-500 hover:underline">Skills</Link>
        </li>
      </ul>
      <Link href="https://nextjs.org/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
        NextJS website
      </Link>
    </div>
    
  );
}

export default Home;
