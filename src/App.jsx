import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

// Components
import { Navbar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import OrderConfirmationPage from "./pages/OderConfirmation";
import { FeaturesSection } from "./components/FeaturesSection";
import { OrderCTA } from "./components/OderCTA";
import { Footer } from "./components/Footer";
import ContactUs from "./components/ContactUs";

// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import OrderForm from "./pages/OrderForm";
import SignInRedirect from "./pages/SignInError";
import HowItWorks from "./pages/HowItWorks";
import ReferralPage from "./pages/ReferralPage.jsx";
import AppDownload from "./pages/AppDownload";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ children }) => {
  return <SignedIn>{children}</SignedIn>;
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-hidden">
              <HeroSection />
              <section className="relative py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-2 md:pr-12 mr-3.5">
                      <OrderCTA />
                    </div>
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-3xl"></div>
                      <img
                        src="https://res.cloudinary.com/dgu9ietkl/image/upload/v1747394826/Nairobi_CBD_fx0vgg.png"
                        alt="Dispatch-PicUp maps image"
                        className="relative rounded-2xl w-full shadow-2xl transform hover:scale-105 transition-transform duration-300 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <ContactUs />
              </div>
              <FeaturesSection />
              <Footer />
            </div>
          }
        />

        <Route
          path="/home"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-white py-12">
              <HomePage />
            </div>
          }
        />

        <Route
          path="/download"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-white py-12">
              <AppDownload />
            </div>
          }
        />

        <Route
          path="/about"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-50 to-white py-12">
              <AboutUs />
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-white py-12">
              <ContactUs />
            </div>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <div className="bg-gray-50 min-h-screen">
                <AdminDashboard />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <div className="bg-gray-50 min-h-screen">
                <UserDashboard />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/request"
          element={
            <ProtectedRoute>
              <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-12">
                <OrderForm />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-confirmation"
          element={
            <ProtectedRoute>
              <div className="bg-gradient-to-br from-green-50 to-white min-h-screen py-12">
                <OrderConfirmationPage />
              </div>
            </ProtectedRoute>
          }
        />

        <Route
          path="/sign-in"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
              <div className="p-8 bg-white rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <SignInButton mode="modal" />
              </div>
            </div>
          }
        />

        <Route
          path="/how-it-works"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-white py-12">
              <HowItWorks />
            </div>
          }
        />

        <Route
          path="/refer"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-white py-12">
              <ReferralPage />
            </div>
          }
        />

        <Route path="/sign-in-error" element={<SignInRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
