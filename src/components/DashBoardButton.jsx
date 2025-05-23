import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ContactUs from "./ContactUs";

const DashboardButton = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    navigate("/dashboard");
  };

  return (
    <button
      className={`h-10 px-14 font-semibold rounded-xl shadow-md transition-all duration-300 ${
        isScrolled
          ? "bg-white text-blue-600 hover:bg-gray-100"
          : "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800"
      }`}
      style={{ marginTop: "-160px" }} // Moves the button up slightly
      onClick={handleClick}
    >
      Dashboard
    </button>
  );
};

export default DashboardButton;

