import React from "react";
import { Footer } from "../components/Footer";

const HowItWorks = () => {
  const steps = [
    { id: 1, description: "Sign up and create your account." },
    { id: 2, description: "Choose your delivery or pickup service." },
    { id: 3, description: "Get in touch with your delivery person." },
    { id: 4, description: "Receive your package securely and on time." },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto text-center px-6">
        <h3 className="text-4xl font-extrabold text-blue-600 mb-12">
          How It Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-2xl font-bold">
                {i + 1}
              </div>
              <p className="mt-6 text-lg text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div><br />
	  <br />
	  <br />
      <Footer />
    </section>
  );
};

export default HowItWorks;
