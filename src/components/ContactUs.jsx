import React, { useState } from "react";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to open the pop-up */}
      <button
        onClick={togglePopup}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-999"
      >
        Contact Us
      </button>

      {/* Pop-up */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600">Contact Us</h2>
              <button
                onClick={togglePopup}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <p className="text-gray-700 mb-6">
              Reach out to us via call or email. We're here to help!
            </p>
            <div className="space-y-4">
              {/* Call Option */}
              <a
                href="tel:+254715519432"
                className="flex items-center bg-blue-100 text-blue-600 px-4 py-3 rounded-lg shadow hover:bg-green-300 transition-all duration-300"
              >
                <i className="fas fa-phone-alt mr-3"></i>
                +254 715 519 432 - Contact Ryan
              </a>

              <a
                href="tel:+254712856197"
                className="flex items-center bg-blue-100 text-blue-600 px-4 py-3 rounded-lg shadow hover:bg-green-300 transition-all duration-300"
              >
                <i className="fas fa-phone-alt mr-3"></i>
                +254 712 856 197 - Contact Wayne
              </a>

              {/* Email Option */}
              <a
                href="mailto:support@bebasafe.com"
                className="flex items-center bg-blue-100 text-blue-600 px-4 py-3 rounded-lg shadow hover:bg-red-200 transition-all duration-300"
              >
                <i className="fas fa-envelope mr-3"></i>
                support@bebasafe.com - Email us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* <h1 className="text-3xl font-bold text-center mt-10">
        Need assistance? <br />
        Click on the Contact Us button below to reach out to us!
      </h1> */}
      {/* <br />
      <img src="https://res.cloudinary.com/dgu9ietkl/image/upload/v1747995627/vh8rdjtbiystq5pgo17g.png" 
      alt="arrow indicator"
      className=""
      /> */}
    </>
  );
};

export default ContactUs;
