/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";

const FAQ = () => {
  const [showAnswers, setShowAnswers] = useState(Array(3).fill(false)); // Initial state for 3 questions

  const toggleAnswer = (index: number) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <div>
      <section>
        <div className="justify-center mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* TEXT DIV */}
          <div className="mx-auto flex max-w-[550px] flex-col items-center justify-center px-6 text-center lg:max-w-[800px] lg:px-10">
            <h1 className="mx-auto text-center font-bold text md:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h1>
            <p className="font-inter mt-4 max-w-[600px] px-5 text-center text-base font-light text-[#71717A] lg:max-w-[500px] lg:">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
            </p>
          </div>

          {/* FAQs */}
          <div className="mt-10 flex w-full flex-col">
            {/* FAQ BLOCKS */}
            {[0, 1, 2].map((index) => (
              <div key={index}>
                <div className="relative my-3 w-full rounded-md px-12 py-8">
                  <div className="max-w-[700px]">
                    <h2 className="font-bold text text-xl">
                      {index === 0 && "How we started our first journey?"}
                      {index === 1 && "How can I donate money here?"}
                      {index === 2 && "How can I be a member"}
                    </h2>
                    {showAnswers[index] && (
                      <p className="font-inter mt-4 text-base font-light text-gray-500">
                        {index === 0 &&
                          "We embarked on our inaugural journey with a simple yet powerful vision — to make a positive impact on the lives of those in need. Inspired by the spirit of compassion, our founders recognized the importance of collective efforts in bringing about meaningful change. They started by reaching out to local communities, understanding their challenges, and identifying ways to address them. Through the support of early donors who shared our passion for making a difference, we took our first steps toward creating a platform that unites people for a common cause. It was this shared commitment that laid the foundation for our journey, and today, we continue to stride forward, driven by the belief that every contribution, no matter how small, has the potential to create a ripple effect of positive change"}
                        {index === 1 &&
                          "To donate money on our website, visit [YourWebsite.com] and explore the causes we support. Choose a cause, select your donation amount, and click on the 'Donate' button. Enter your information securely, review the details, and confirm your donation. Shortly after, you'll receive a confirmation email with updates on how your contribution contributes to the cause. Thank you for joining us in making a positive impact!"}
                        {index === 2 && "Becoming a member is easy and rewarding! Simply visit our website and look for the  Fill out the membership form with your basic information, such as name and email. You may also have the option to choose a membership tier or specify your areas of interest. Complete the process by following any additional instructions provided. As a member, you'll enjoy exclusive benefits, stay updated on our initiatives, and have the opportunity to actively participate in the positive changes we're making. Thank you for considering membership – we look forward to welcoming you to our community!"}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => toggleAnswer(index)}
                    className={`absolute right-5 top-9 focus:outline-none ${
                      showAnswers[index] ? 'text-white bg-black' : 'text-black bg-white'
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="12" fill={showAnswers[index] ? 'black' : 'white'}></circle>
                      <path
                        d="M7.05078 12H16.9508"
                        stroke={showAnswers[index] ? 'white' : 'black'}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                {index < 2 && (
                  <div className="mx-12 border border-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
