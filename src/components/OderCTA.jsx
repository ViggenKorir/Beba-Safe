import React, { useState } from "react";
import { redirect } from "react-router-dom";

export const OrderCTA = () => {
  const [activeTab, setActiveTab] = useState("delivery");

  return (
    <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 space-y-6 mx-auto md:mx-0">
      {/* Tabs */}
      <div className="flex justify-between border-b border-gray-200 pb-2 text-sm font-medium">
        <button
          className={`pb-2 ${
            activeTab === "delivery"
              ? "text-black border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("delivery")}
        >
          Request Delivery
        </button>
        <button
          className={`pb-2 ${
            activeTab === "pickup"
              ? "text-black border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("pickup")}
        >
          Request PickUp
        </button>
      </div>

      {/* Form Section */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Add Order Details</h3>
        <input
          type="text"
          placeholder="Enter location"
          className="w-full h-12 rounded-md bg-gray-100 text-black px-4 mb-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="text"
          placeholder="Details"
          className="w-full h-12 rounded-md border border-gray-300 px-4 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Button */}
      <button
        className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition"
        onClick={() => {
          alert("Proceeding to order page...");
          setTimeout(() => redirect("/orders"), 100);
        }}
      >
        Request Delivery
      </button>
    </div>
  );
};
