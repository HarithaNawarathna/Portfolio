import React from 'react';
import Image from 'next/image';
import img1 from '../public/Profile_img.jpg';

const Home: React.FC = () => {
  console.log(img1);
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Hey There
      </h1>
      <div className="flex justify-center mb-6">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <Image src={img1} alt="Profile Image" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default Home;
