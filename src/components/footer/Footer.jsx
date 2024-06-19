import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    // Fetch the cookie consent status from the backend
    const fetchCookieConsent = async () => {
      try {
        const response = await fetch('/api/cookie-consent');
        const data = await response.json();
        setCookieConsent(data.status);
      } catch (error) {
        console.error('Error fetching cookie consent:', error);
        setCookieConsent(null);
      }
    };
    fetchCookieConsent();
  }, []);

  const acceptCookies = async () => {
    try {
      await fetch('/api/cookie-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'accepted' }),
      });
      setCookieConsent('accepted');
    } catch (error) {
      console.error('Error accepting cookies:', error);
    }
  };

  const declineCookies = async () => {
    try {
      await fetch('/api/cookie-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'declined' }),
      });
      setCookieConsent('declined');
    } catch (error) {
      console.error('Error declining cookies:', error);
    }
  };

  const handleCookieConsent = () => {
    if (cookieConsent === 'accepted') {
      acceptCookies();
    } else if (cookieConsent === 'declined') {
      declineCookies();
    }
  };

  return (
    <div className="bg-gray-100 mt-40 sm:mt-20 md:mt-40 pt-20">
      <div className="flex justify-center">
        <p className="font-extrabold text-md md:text-2xl text-center">QualityQuest</p>
      </div>
      <div className="flex justify-center mt-8">
        <p className="font-medium sm:text-base md:text-xl">Follow us on our social media platforms</p>
      </div>
      <div className="flex justify-center mt-4">
        <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google text-red-500 text-3xl mx-2"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook text-blue-500 text-3xl mx-2"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-pink-500 text-3xl mx-2"></i>
        </a>
        <button onClick={handleCookieConsent}>
          <i className="fas fa-times text-gray-500 text-3xl mx-2"></i>
        </button>
      </div>

      {cookieConsent === null && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-500 text-white p-4 flex justify-between items-center">
          <p>This website uses cookies to enhance your experience. By continuing to use this site, you consent to our use of cookies.</p>
          <div>
            <button className="bg-purple-500 text-white px-4 py-2 mr-2" onClick={acceptCookies}>
              Accept
            </button>
            <button className="bg-blue-800 text-white px-4 py-2" onClick={declineCookies}>
              Decline
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
