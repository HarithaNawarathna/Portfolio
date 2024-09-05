import React from 'react';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

export default Page;
