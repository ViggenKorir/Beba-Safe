// src/components/FeaturesSection.tsx
const features = [
    {
      icon: "fas fa-rocket",
      title: "Speed & Efficiency",
      description: "Optimized routes and experienced couriers ensure fast deliveries.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security & Reliability",
      description: "Your packages are handled with care every step of the way.",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Nairobi-Wide Coverage",
      description: "We cover the entire Nairobi CBD.",
    },
  ];
  
  export function FeaturesSection() {
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
  