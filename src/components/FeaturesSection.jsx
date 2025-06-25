import React from "react";

export function FeaturesSection() {
  // Hardcoded features
  const features = [
    {
      id: 1,
      icon: "fas fa-shield-alt",
      title: "Secure Deliveries",
      description: "Your packages are handled with care every step of the way.",
    },
    {
      id: 2,
      icon: "fas fa-clock",
      title: "Timely Service",
      description: "We ensure your deliveries are always on time.",
    },
    {
      id:3,
      icon:"fas fa-house",
      title:"Convenience",
      description:"Make oders from the comfort of your devices anywhere you are"
    }
  ];

  return (
    <section className="py-12 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Beba Safe?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ id, icon, title, description }) => (
            <div key={id} className="bg-white rounded-lg shadow-md p-6">
              <i className={`${icon} text-4xl text-blue-500 mb-4`} />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
