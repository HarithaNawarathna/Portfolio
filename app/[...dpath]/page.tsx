import React from 'react';

interface PageProps {
  params: {
    dpath: string[];
  };
}

function Page({ params }: PageProps) {
  console.log(params);
  
  return (
    <div>
      <div>Catch all routes</div>
      <ul>
        {params.dpath.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
