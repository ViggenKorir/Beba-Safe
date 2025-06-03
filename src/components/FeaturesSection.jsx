import React, { useEffect, useState } from "react";

export function FeaturesSection() {
  const [features, setFeatures] = useState([]);

  // Fetch features from db.json
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await fetch("http://localhost:3001/features");
        const data = await response.json();
        setFeatures(data);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section className="py-12 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Beba Safe?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, title, description }) => (
            <div key={title} className="bg-white rounded-lg shadow-md p-6">
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
