import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What is the Quality Assurance Hub?",
      answer: "The Quality Assurance Hub is a platform for QA professionals to share knowledge and improve their skills.A Quality Assurance (QA) Hub typically refers to a centralized platform, community, or department within an organization that is dedicated to ensuring the quality of products or services. It serves as a focal point for all quality-related activities, processes, and resources."
    },
    {
      question: "How can I join the community?",
      answer: "You can join the community by signing up on our website and participating in the forums and discussions. You can also click on the join us button at the top of the page to welcome yourself in a quality assurance community where our services meets perfection for our customers"
    },
    {
      question: "What resources are available?",
      answer: "We provide a variety of resources including articles, tutorials, and a discussion forum to help QA professionals.At QualityQuest, we are dedicated to helping you achieve excellence in quality assurance. Explore our comprehensive resources tailored to meet your quality assurance needs and elevate your processes to the next level."
    },
    {
      question: "How does your app help with bug tracking?",
      answer: "Our app offers an advanced bug tracking system that allows users to log, track, and manage bugs efficiently. The system is designed to improve communication between team members and ensure that issues are resolved promptly.Our app provides a centralized platform where you can track and manage all bugs and issues in one place. This ensures that all team members have visibility into the status of bugs and can collaborate effectively to resolve them."
    },
    {
      question: "Can your app integrate with other tools?",
      answer: "Yes, our app can integrate with a variety of other tools commonly used in QA processes, such as JIRA, Slack, and GitHub. This helps streamline workflows and improve productivity.As a manager at QualityQuest, I'm pleased to inform you that our bug tracking app is designed with integration capabilities to seamlessly connect with a variety of other tools commonly used in software development processes."
    },
    {
      question: "What makes your app different from other QA tools?",
      answer: "Our app stands out due to its user-friendly interface, comprehensive feature set, and strong emphasis on community support. It’s designed to be intuitive and easy to use, even for those who are new to quality assurance.By offering a unique blend of user-centric design, agile-friendly features, advanced analytics, flexible integrations, enhanced security measures, and exceptional customer support, our bug tracking app sets a new standard in quality assurance tools. Experience the difference with our website and revolutionize your bug tracking process today!"
    }
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-200 mt-16 mx-[50px] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-6">
        {questions.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100">
            <div
              className="font-bold text-xl"
              onClick={() => handleQuestionClick(index)}
            >
              {item.question}
            </div>
            {activeIndex === index && (
              <div className="mt-4 text-lg text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
