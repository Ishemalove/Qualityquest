import React, { useState, useEffect } from 'react';
import girl from '../../assets/girl.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className='flex justify-between items-center px-4 sm:px-2 md:px-20'>
        <div className='flex items-center'>
          <img src={girl} className='w-16 sm:w-12 md:w-16' alt='QualityQuest Logo' />
          <p className='ml-2 sm:ml-1 md:ml-4 text-2xl sm:text-xl md:text-3xl font-extrabold'>QualityQuest</p>
        </div>
        <button
          className='block sm:hidden text-gray-800 hover:text-gray-600 focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            className='w-6 h-6 fill-current'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z'
            />
          </svg>
        </button>
        <div className='hidden sm:block'>
          <a className='block sm:inline-block mx-2 sm:mx-1 md:ml-20 text-xl sm:text-base md:text-2xl text-purple-800 font-medium'>
            HOME
          </a>
          <a className='block sm:inline-block mx-2 sm:mx-1 md:ml-20 text-xl sm:text-base md:text-2xl font-medium'>
            SERVICES 
          </a>
          <a className='block sm:inline-block mx-2 sm:mx-1 md:ml-20 text-xl sm:text-base md:text-2xl font-medium'>
            ASSURANCE
          </a>
          <a className='block sm:inline-block mx-2 sm:mx-1 md:ml-20 text-xl sm:text-base md:text-2xl font-medium'>
            STANDARDS
          </a>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-700 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className='flex justify-end p-4'>
          <button onClick={toggleMenu} className='text-white'>
            <svg
              className='w-6 h-6 fill-current'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='mt-10'>
          <a className='block px-4 py-2 text-xl font-medium hover:bg-gray-700'>HOME</a>
          <a className='block px-4 py-2 text-xl font-medium hover:bg-gray-700'>SERVICES</a>
          <a className='block px-4 py-2 text-xl font-medium hover:bg-gray-700'>ASSURANCE</a>
          <a className='block px-4 py-2 text-xl font-medium hover:bg-gray-700'>STANDARDS</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
