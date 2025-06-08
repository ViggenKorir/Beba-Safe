import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export function FeaturesSection() {
  const [features, setFeatures] = useState([]);
  const [error, setError] = useState(false);

  // Fetch features from Supabase
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const { data, error } = await supabase
          .from("features") // Replace "features" with your Supabase table name
          .select("*");

        if (error) {
          throw error;
        }

        setFeatures(data);
      } catch (error) {
        console.error("Error fetching features:", error);
        setError(true);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section className="py-12 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Beba Safe?</h2>
        {error ? (
          <p className="text-center text-red-500">
            Failed to load features. Please try again later.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ id, icon, title, description }) => (
              <div key={id} className="bg-white rounded-lg shadow-md p-6">
                <i className={`${icon} text-4xl text-blue-500 mb-4`} />
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
