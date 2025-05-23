// src/pages/HomePage.jsx
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
  } from "@clerk/clerk-react";
  import { useNavigate } from "react-router-dom";
  // import { OrderCTA } from "src/components/OderCTA";
  
  export default function HomePage() {
    const navigate = useNavigate();
  
    const features = [
      {
        icon: "fa-truck-fast",
        title: "Speed & Accuracy",
        desc: "We deliver on time, every time — even in Nairobi’s busy traffic.",
      },
      {
        icon: "fa-shield-halved",
        title: "Safety First",
        desc: "Your items are insured and handled with utmost care.",
      },
      {
        icon: "fa-mobile-screen-button",
        title: "Track in Real-Time",
        desc: "Know exactly where your delivery is at all times via live tracking.",
      },
    ];
  
    const steps = [
      "Sign up or log in",
      "Fill pickup & delivery details",
      "Confirm & pay via M-Pesa",
      "Track your delivery in real-time",
    ];
  
    const testimonials = [
      {
        name: "Angela M.",
        review: "Super fast delivery! I got my documents across town in 25 minutes.",
      },
      {
        name: "Brian K.",
        review: "Loved the real-time tracking and the friendly support.",
      },
      {
        name: "Susan N.",
        review: "Much cheaper than other services, and they showed up on time!",
      },
    ];
  
    return (
      <>
        {/* Auth Header */}
        <header className="bg-blue-100 p-4 flex justify-between items-center shadow-sm">
          <h1 className="text-3xl font-bold text-blue-700">Beba Safe</h1>
          <div className="space-x-3">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="bg-blue-200 py-16 text-center">
          <h2 className="text-5xl font-bold text-blue-800 mb-4">
            Reliable Goods Delivery in Nairobi CBD
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-6">
            Beba Safe is your smart solution for quick, secure and affordable package delivery around town.
          </p>
          <button
            onClick={() => navigate("/request")}
            className="bg-blue-600 hover:bg-blue-800 text-white py-3 px-6 rounded-xl font-semibold"
          >
            Request a Delivery
          </button>
        </section>

        <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* <OrderCTA /> */}
    </div>
  
        {/* Why Choose Us */}
        <section className="py-12 bg-white text-center">
          <h3 className="text-3xl font-bold mb-10">Why Beba Safe?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <i className={`fas ${f.icon} text-4xl text-blue-500 mb-4`} />
                <h4 className="text-xl font-semibold">{f.title}</h4>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* How It Works */}
        <section className="bg-gray-100 py-16 text-center">
          <h3 className="text-3xl font-bold mb-10">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
            {steps.map((step, i) => (
              <div key={i} className="p-4 bg-white rounded shadow">
                <span className="text-3xl font-bold text-blue-500">{i + 1}</span>
                <p className="mt-4 text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Map Preview */}
        <section className="py-12">
          <h3 className="text-2xl font-bold text-center mb-6">Live Coverage Area</h3>
          <div className="mx-auto max-w-5xl">
            <iframe
              title="map"
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
              allowFullScreen
              // src={`https://www.google.com/maps/embed/v1/place?q=Nairobi+CBD&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}
            />
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="bg-white py-16 text-center">
          <h3 className="text-3xl font-bold mb-10">Happy Customers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 p-6 rounded shadow-md">
                <p className="italic text-gray-700">"{t.review}"</p>
                <p className="mt-4 font-semibold text-blue-700">- {t.name}</p>
              </div>
            ))}
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center py-6">
          <p>&copy; {new Date().getFullYear()} Beba Safe. All rights reserved.</p>
        </footer>
      </>
    );
  }
  