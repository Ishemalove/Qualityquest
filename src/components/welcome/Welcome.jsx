import React from 'react';
import qi from '../../assets/qi.png';
import { Link } from 'react-router-dom';



const Welcome = () => {
  return (
      <div className='container mx-auto px-4 lg:mx-20'>
      <div className='flex flex-col lg:flex-row items-center justify-between'>
        <div className='border-2 border-gray-500 w-full lg:w-[780px] h-auto lg:h-[380px] rounded-3xl mt-20 lg:mt-60 shadow-lg shadow-purple-500/50 p-6 lg:p-10'>
          <div className='font-medium text-lg'>
            <p>Welcome to our Quality Assurance Hub! Here, we are dedicated to</p>
            <p>ensuring excellence and precision in every project. Our passionate</p>
            <p>professionals are committed to upholding the highest standards,</p>
            <p>driven by a shared goal of delivering perfection. Together, we can</p>
            <p>achieve remarkable results and set new benchmarks in quality assurance.</p>
           <button  className='mt-4 p-4 lg:p-6 bg-purple-500 rounded-2xl text-white font-medium'><Link to={"/login"}>Join us</Link></button>
          </div>
        </div>
        <div className='mt-10 lg:mt-0 lg:ml-4'>
          <img src={qi} className='w-full lg:w-[700px] h-auto lg:h-[500px] object-cover' alt='Quality Assurance' />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
