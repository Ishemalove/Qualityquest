import React, { useState } from 'react';
import correct from '../../assets/correct.png';
import doc from '../../assets/doc.png';
import men from '../../assets/men.png';
import additional from '../../assets/additional.png';
import more from '../../assets/more.png';
import further from '../../assets/further.png';

const Services = () => {
  const images = [
    { src: doc, alt: "Document Service" },
    { src: men, alt: "Men Service" },
    { src: correct, alt: "Correct Service" },
    { src: additional, alt: "Additional Service" },
    { src: more, alt: "More Service" },
    { src: further, alt: "Further Service" },
  ];

  return (
    <div className='mt-16 mx-4 lg:mx-[50px]'>
      <p className='pt-10 font-bold text-2xl text-center lg:text-left'>Our services are the best for you!</p>
      <div className='relative flex items-center justify-center py-10'>
        <button onClick={() => document.getElementById('carousel').scrollBy({ left: -300, behavior: 'smooth' })} className='absolute left-0 p-2 bg-gray-300 rounded-full hover:bg-gray-400'>
          &lt;
        </button>
        <div id='carousel' className='flex overflow-x-scroll scrollbar-hide w-full lg:w-[80%]'>
          {images.map((image, index) => (
            <div key={index} className='flex-shrink-0 w-2/3 sm:w-1/3 lg:w-1/3 h-[50vh] md:h-[60vh] lg:h-[70vh] p-2 md:p-4'>
              <img src={image.src} className='object-cover w-full h-full rounded-[20px]' alt={image.alt} />
            </div>
          ))}
        </div>
        <button onClick={() => document.getElementById('carousel').scrollBy({ left: 300, behavior: 'smooth' })} className='absolute right-0 p-2 bg-gray-300 rounded-full hover:bg-gray-400'>
          &gt;
        </button>
      </div>
      <p className='text-center text-lg mt-6 mx-4'>
        At Quality Assurance Hub, we provide a comprehensive range of services designed to ensure the highest standards of quality for your products. Our experienced team offers thorough testing, detailed documentation, and continuous monitoring to identify and address any issues promptly. We utilize the latest tools and methodologies to deliver precise and reliable results, fostering an environment of excellence and innovation. Join us to benefit from a collaborative community that prioritizes quality and continuous improvement.
      </p>
    </div>
  );
}

export default Services;
