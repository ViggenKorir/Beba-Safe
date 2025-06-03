import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";

const OrderForm = ({ onClose }) => {
  const { id: orderId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [showRedirectPopup, setShowRedirectPopup] = useState(false);

  const fields = [
    { name: "pickupLocation", label: "Pickup Location", type: "text", placeholder: "Enter pickup address" },
    { name: "deliveryLocation", label: "Delivery Location", type: "text", placeholder: "Enter delivery address" },
    { name: "contactPerson", label: "Contact Person", type: "text", placeholder: "Enter contact name" },
    { name: "contactNo", label: "Contact Number", type: "text", placeholder: "+254700000000" },
    { name: "itemType", label: "Item Type", type: "text", placeholder: "e.g. Laptop" },
    { name: "quantity", label: "Quantity", type: "number", placeholder: "Enter quantity" },
    { name: "weight", label: "Weight (kg)", type: "number", placeholder: "Enter weight" },
    { name: "dimensions", label: "Dimensions (L x W x H)", type: "text", placeholder: "Enter dimensions" },
    { name: "specialInstructions", label: "Special Instructions", type: "textarea", placeholder: "E.g. Fragile, handle with care" },
  ];

  useEffect(() => {
    const fetchOrderData = async () => {
      const { data, error } = await supabase.from("orders").select("*").eq("id", orderId).single();
      if (error) {
        console.error("Error fetching order:", error);
      } else {
        setFormData(data);
      }
    };

    if (orderId) fetchOrderData();
  }, [orderId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = orderId
        ? await supabase.from("orders").update(formData).eq("id", orderId)
        : await supabase.from("orders").insert([{ ...formData, status: "Pending" }]);

      if (error) {
        console.error("Error saving order:", error);
        alert("Failed to save the order.");
      } else {
        setShowRedirectPopup(true);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("An error occurred. Please try again.");
    }
  };

  const handleRedirect = () => {
    setShowRedirectPopup(false);
    navigate("/payment");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-blue-100 bg-opacity-40 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          {orderId ? "Update Delivery Request" : "Create New Delivery Request"}
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.slice(0, 2).map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block mb-1 font-medium text-sm text-gray-700">{label}</label>
                <input
                  type={type || "text"}
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-gray-300 p-3"
                  required
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fields.slice(2, 6).map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block mb-1 font-medium text-sm text-gray-700">{label}</label>
                <input
                  type={type || "text"}
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-gray-300 p-3"
                  required
                />
              </div>
            ))}
          </div>

          <div>
            {fields.filter((field) => field.type === "textarea").map(({ name, label, placeholder }) => (
              <div key={name}>
                <label className="block mb-1 font-medium text-sm text-gray-700">{label}</label>
                <textarea
                  name={name}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  rows={3}
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-gray-300 p-3"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
            >
              {orderId ? "Update Order" : "Proceed"}
            </button>
          </div>
        </form>
      </div>

      {showRedirectPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md text-center">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Redirecting to Payment</h3>
            <p className="text-gray-700 mb-6">
              Your order has been successfully submitted. You will now be redirected to the payment page.
            </p>
            <button
              onClick={handleRedirect}
              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
