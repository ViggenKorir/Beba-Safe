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
import AppDownload from "./pages/AppDownload";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ children }) => {
  return <SignedIn>{children}</SignedIn>;
};

function App() {
  return (
    <div className="min-h-screen bg-white font-['Work Sans','Noto Sans',sans-serif]">
      <Navbar />

      <Routes>
        {/* Home */}
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
                    alt="Nairobi map"
                    className="rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-md object-cover"
                  />
                </div>
              </section>
              <FeaturesSection />
              <ContactUs />
              <Footer />
            </>
          }
        />

        {/* Simple Wrapper Pages */}
        {[
          { path: "/home", Component: HomePage },
          { path: "/download", Component: AppDownload },
          { path: "/about", Component: AboutUs },
          { path: "/contact", Component: ContactUs },
          { path: "/how-it-works", Component: HowItWorks },
        ].map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
                <Component />
              </div>
            }
          />
        ))}

        {/* Protected Routes */}
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

        {/* Sign-in */}
        <Route path="/sign-in-error" element={<SignInRedirect />} />
        <Route
          path="/sign-in"
          element={
            <div className="flex items-center justify-center h-screen bg-gray-50">
              <SignInButton mode="modal" />
            </div>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
