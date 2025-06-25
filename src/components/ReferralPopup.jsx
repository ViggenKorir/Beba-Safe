import React from "react";
import { useNavigate } from "react-router-dom";

const ReferralButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
      onClick={() => navigate("/refer")}
    >
      Refer a Friend
    </button>
  );
};

export default ReferralButton;