import React from 'react';
import black from '../../assets/black.png';
import light from '../../assets/light.png';
import heart from '../../assets/heart .png'

const Three = () => {
  return (
    <div className='mx-12 lg:mx-20'>
      <div className="flex flex-col items-center mt-20 space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10 lg:items-stretch">
    <div className="flex flex-col border-4 border-purple-400 rounded-3xl p-6 w-full lg:w-1/3">
      <img src={light} className="mx-auto mb-4"/>
      <div className="flex-grow">
        <p className="text-center">"Being a part of this QA community has been an enriching experience. The collaborative environment encourages knowledge sharing and continuous learning." </p>
      </div>
      <p className="font-medium mt-4 text-center">Kellia - Team Leader</p>
    </div>

    <div className="flex flex-col border-4 border-purple-400 rounded-3xl p-6 w-full lg:w-1/3">
      <img src={black} className="mx-auto mb-4"/>
      <div className="flex-grow">
        <p className="text-center">"Since joining the Quality Assurance Hub, I've seen a significant improvement in my approach to QA. It's a vibrant community that fosters growth and innovation."</p>
      </div>
      <p className="font-medium mt-4 text-center">Emily R., QA Analyst</p>
    </div>

    <div className="flex flex-col border-4 border-purple-400 rounded-3xl p-6 w-full lg:w-1/3">
      <img src={heart} className="mx-auto mb-4"/>
      <div className="flex-grow">
        <p className="text-center">"Quality Assurance Hub is more than just a resource center; it's a thriving community of like-minded individuals who are passionate about quality."</p>
      </div>
      <p className="font-medium mt-4 text-center">Jessica T., Quality Manager</p>
    </div>
  </div></div>
    
  );
}

export default Three;
