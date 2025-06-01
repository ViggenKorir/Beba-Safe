import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Import supabase client
import { useUser } from "@clerk/clerk-react"; // Import useUser hook

const NewOrderForm = ({ onClose }) => {
  if (!onClose) {
    console.error("onClose prop is required for NewOrderForm");
    return null; // Prevent rendering if onClose is not provided
  }

  const navigate = useNavigate();
  const { user } = useUser(); // Get user from Clerk

  // State for form fields
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [itemType, setItemType] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("User not signed in. Cannot create order.");
      alert("You must be signed in to create an order.");
      return;
    }

    const orderData = {
      pickup_location: pickupLocation,
      delivery_location: deliveryLocation,
      item_type: itemType,
      quantity: parseInt(quantity, 10),
      weight_kg: parseFloat(weight),
      dimensions_cm: dimensions,
      special_instructions: specialInstructions,
      user_id: user.id,
      status: "Pending", // Default status
    };

    try {
      const { data, error } = await supabase
        .from("orders")
        .insert([orderData])
        .select();

      if (error) {
        console.error("Error creating order:", error);
        alert("Failed to create order: " + error.message);
        return; // Stay on the form or handle error appropriately
      }

      if (data) {
        alert("Order submitted successfully!");
        navigate("/user-dashboard"); // Navigate on success
        if (onClose) onClose(); // Close modal if it's a modal form
      }
    } catch (error) {
      console.error("Unexpected error creating order:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4 text-[#0e141b]">New Delivery Request</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Form fields */}
          <div>
            <label className="block text-sm font-medium text-[#0e141b]">Pickup Location</label>
            <input
              name="pickupLocation"
              className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
              placeholder="Enter pickup address"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0e141b]">Delivery Location</label>
            <input
              name="deliveryLocation"
              className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
              placeholder="Enter delivery address"
              value={deliveryLocation}
              onChange={(e) => setDeliveryLocation(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0e141b]">Item Type</label>
              <input
                name="itemType"
                className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
                placeholder="Item type"
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0e141b]">Quantity</label>
              <input
                name="quantity"
                className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
                type="number"
                placeholder="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0e141b]">Weight (kg)</label>
              <input
                name="weight"
                className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
                type="number"
                placeholder="1"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0e141b]">Dimensions (LxWxH)</label>
              <input
                name="dimensions"
                className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
                placeholder="e.g., 10x5x3"
                value={dimensions}
                onChange={(e) => setDimensions(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0e141b]">Special Instructions</label>
            <textarea
              name="specialInstructions"
              className="form-textarea w-full rounded-xl border border-[#d0dbe7] p-3"
              rows={3}
              placeholder="Handle with care"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="bg-gray-200 px-4 py-2 rounded-xl"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#1980e6] text-white px-4 py-2 rounded-xl font-bold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [showNewOrderForm, setShowNewOrderForm] = useState(false);

  return (
    <div className="min-h-screen flex bg-slate-50 font-['Work Sans','Noto Sans',sans-serif] overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-80 px-6 py-5">
        <div className="flex flex-col gap-4 bg-slate-50 p-4 min-h-[700px] justify-between">
          <nav className="flex flex-col gap-2">
            {["Orders", "Couriers", "Users", "Reports", "Settings"].map((label, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl ${label === "Orders" ? "bg-[#e7edf3]" : ""}`}
              >
                <div className="text-[#0e141b]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <rect x="32" y="32" width="192" height="192" rx="16" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-[#0e141b]">{label}</p>
              </div>
            ))}
          </nav>
          <button
            onClick={() => setShowNewOrderForm(true)}
            className="h-10 rounded-xl bg-[#1980e6] px-4 text-sm font-bold text-white"
          >
            New Order
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 py-5">
        {/* ... existing main content ... */}
      </main>

      {showNewOrderForm && <NewOrderForm onClose={() => setShowNewOrderForm(false)} />}
    </div>
  );
};

export default AdminDashboard;