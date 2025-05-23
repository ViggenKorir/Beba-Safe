import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import DashboardButton from "./DashBoardButton";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-600 shadow-lg text-white" : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a
          href="/"
          className={`flex items-center text-xl font-bold ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          <img
            src="src/assets/BebaSafe Logo.png"
            alt="BebaSafe Logo"
            className="rounded-full w-12 h-12 mr-2"
          />
          BebaSafe
        </a>

        {/* Desktop Menu */}
        <section className="hidden md:flex bg-white rounded-full items-center p-2">
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="/"
                className={`px-4 py-2 rounded-lg ${
                  isScrolled
                    ? "bg-transparent text-blue-600 hover:bg-gray-200"
                    : "bg-transparent text-black hover:bg-gray-100"
                } font-medium transition`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`px-4 py-2 rounded-lg ${
                  isScrolled
                    ? "bg-transparent text-blue-600 hover:bg-gray-200"
                    : "bg-transparent text-black hover:bg-gray-100"
                } font-medium transition`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={`px-4 py-2 rounded-lg ${
                  isScrolled
                    ? "bg-transparent text-blue-600 hover:bg-gray-200"
                    : "bg-transparent text-black hover:bg-gray-100"
                } font-medium transition`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`px-4 py-2 rounded-lg ${
                  isScrolled
                    ? "bg-transparent text-blue-600 hover:bg-gray-200"
                    : "bg-transparent text-black hover:bg-gray-100"
                } font-medium transition`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/download"
                className={`px-4 py-2 rounded-lg ${
                  isScrolled
                    ? "bg-transparent text-blue-600 hover:bg-gray-200"
                    : "bg-transparent text-black hover:bg-gray-100"
                } font-medium transition`}
              >
                Download App
              </a>
            </li>
          </ul>
        </section>

        {/* Sign-In Buttons */}
        <div className="hidden md:block">
          <div className="space-x-6">
            <SignedOut>
              <SignInButton className="bg-white text-blue-600 px-4 py-2 rounded-xl font-bold" />
              <SignUpButton className="bg-white text-blue-600 px-4 py-2 rounded-xl font-bold" />
            </SignedOut>

            <SignedIn>
              <DashboardButton />
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatar: "w-30 h-30 border-2 border-blue-600 rounded-full", 
                    // userButtonPopoverCard: "bg-white shadow-lg rounded-lg", 
                    // userButtonPopoverActionButton: "text-blue-600 hover:text-blue-800", 
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded focus:outline-none focus:ring-2 ${
            isScrolled ? "text-white focus:ring-white" : "text-black focus:ring-black"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-600 p-6">
          <div className="flex justify-between items-center mb-6">
            <a
              href="/"
              className="text-white text-xl font-bold flex items-center"
            >
              <img
                src="src/assets/BebaSafe Logo.png"
                alt="BebaSafe Logo"
                className="rounded-full w-10 h-10 mr-2"
              />
              BebaSafe
            </a>
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className="space-y-4">
            <li>
              <a href="/" className="block px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="block px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-gray-200">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-gray-200">
                Contact
              </a>
            </li>
            <li>
              <a href="/download" className="block px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-gray-200">
                Download App
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <SignedOut>
              <SignInButton className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-bold mb-2" />
              <SignUpButton className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-bold" />
            </SignedOut>
            <SignedIn>
              <DashboardButton />
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10 border-2 border-blue-600 rounded-full", // Customize avatar size and border
                    userButtonPopoverCard: "bg-white shadow-lg rounded-lg", // Customize dropdown menu
                    userButtonPopoverActionButton: "text-blue-600 hover:text-blue-800", // Customize dropdown actions
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
}
