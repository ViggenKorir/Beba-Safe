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
import HomePage from "./pages/HomePage";
import { HeroSection } from "./components/HeroSection";
// import { BookDeliveryForm } from "./pages/BookDelivery";
import OrderConfirmationPage from "./pages/OderConfirmation";
import { MapSection } from "./components/MapSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { OrderCTA } from "./components/OderCTA";
import { Footer } from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import OrderForm from "./pages/OrderForm";
import SignInRedirect from "./pages/SignInError";
import HowItWorks from "./pages/HowItWorks";
import NotFound from "./pages/NotFound";
import ContactUs from "./components/ContactUs";
import AppDownload from "./pages/AppDownload";

const ProtectedRoute = ({ children }) => {
  return <SignedIn>{children}</SignedIn>;
};

function App() {
  return (
    <>
      <Navbar />

      {/* <SignedOut>
        
        </SignedOut>
        <SignedIn>
         
        </SignedIn> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <section className="bg-gradient-to-br from-white to-blue-50 py-12 px-4 sm:px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                <div className="text-center md:text-left">
                  <OrderCTA />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://res.cloudinary.com/dgu9ietkl/image/upload/v1747394826/Nairobi_CBD_fx0vgg.png"
                    alt="Dispatch-PicUp maps image"
                    className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg object-cover"
                  />
                </div>
                <ContactUs />
              </section>
              <FeaturesSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
              <HomePage />
            </div>
          }
        />
        <Route
          path="/download"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
              <AppDownload />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
              <AboutUs />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
              <ContactUs />
            </div>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/request"
          element={
            <ProtectedRoute>
              <OrderForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-confirmation"
          element={
            <ProtectedRoute>
              <OrderConfirmationPage />
            </ProtectedRoute>
          }
        />
        <Route path="/sign-in-error" element={<SignInRedirect />} />
        <Route
          path="/sign-in"
          element={
            <div className="flex items-center justify-center h-screen">
              <SignInButton mode="modal" />
            </div>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
              <HowItWorks />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
