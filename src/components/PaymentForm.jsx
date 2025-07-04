import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PaymentForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [showRedirectPopup, setShowRedirectPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fields = [
    {
      name: "pickupLocation",
      label: "Pickup Location",
      type: "text",
      placeholder: "Enter pickup address",
    },
    {
      name: "deliveryLocation",
      label: "Delivery Location",
      type: "text",
      placeholder: "Enter delivery address",
    },
    {
      name: "contactPerson",
      label: "Contact Person",
      type: "text",
      placeholder: "Enter contact name",
    },
    {
      name: "contactNo",
      label: "Contact Number",
      type: "text",
      placeholder: "+254700000000",
    },
    {
      name: "itemType",
      label: "Item Type",
      type: "text",
      placeholder: "e.g. Laptop",
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "text",
      placeholder: "Enter quantity",
    },
    {
      name: "weight",
      label: "Weight (kg)",
      type: "number",
      placeholder: "Enter weight",
    },
    {
      name: "dimensions",
      label: "Dimensions (L x W x H)",
      type: "text",
      placeholder: "Enter dimensions",
    },
    {
      name: "specialInstructions",
      label: "Special Instructions",
      type: "textarea",
      placeholder: "E.g. Fragile, handle with care",
    },
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle order deletion
  const handleDelete = async () => {
    setIsOpen(!isOpen);

    setLoading(true);
    try {
      const { error } = await supabase.from("orders").delete().eq("id");
      if (error) {
        console.error("Error deleting order:", error);
        alert("Failed to delete the order.");
      } else {
        alert("Order deleted successfully.");
        navigate("/orders"); // Redirect to orders list
      }
    } catch (err) {
      console.error("Deletion error:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle redirect to payment page
  const handleRedirect = () => {
    setShowRedirectPopup(false);
    navigate("/dashboard");
  };

  // Handle modal close
  const handleClose = () => {
    if (onClose) onClose();
    else navigate("/"); // Redirect to orders list if no onClose handler
  };

  const handleSubmit = () => {
    console.log("Payment in Progress");
  };

  return (
    <div className="fixed inset-0 z-50 bg-blue-100 bg-opacity-40 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          {/* {orderId ? "Update Delivery Request" : "Create New Delivery Request"} */}
          Make Payment
        </h2>
        {loading ? (
          <div className="text-center py-6">
            <p className="text-blue-600 font-medium">Loading...</p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.slice(0, 2).map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block mb-1 font-medium text-sm text-gray-700">
                    {label}
                  </label>
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
                  <label className="block mb-1 font-medium text-sm text-gray-700">
                    {label}
                  </label>
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
              {fields
                .filter((field) => field.type === "textarea")
                .map(({ name, label, placeholder }) => (
                  <div key={name}>
                    <label className="block mb-1 font-medium text-sm text-gray-700">
                      {label}
                    </label>
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

            <div className="flex justify-between gap-4 pt-4">
              <button
                type="button"
                onClick={handleDelete}
                className="px-4 py-2 rounded-full bg-red-400 text-white hover:bg-red-600 text-sm font-medium"
              >
                Delete Order
              </button>

              {/* Delete Alert Pop-up */}
              {isOpen && (
                <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                  <div className="bg-white rounded-2xl shadow-lg p-6 w-11/12 max-w-md">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-blue-600">
                        Delete Order
                      </h2>
                      <button
                        onClick={handleDelete}
                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                      >
                        &times;
                      </button>
                    </div>
                    <h1 className="text-red-700 mb-6">
                      Are you sure to delete this order?
                    </h1>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="px-6 py-2 h-11 ml-10 mr-3 rounded-xl bg-blue-100 hover:bg-blue-300 font-bold w-35"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleRedirect}
                      className="px-6 py-2 ml-3 rounded-xl bg-blue-100 text-red-600 font-bold hover:bg-red-700 hover:text-orange-50"
                    >
                      Confirm Delete
                    </button>
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-blue-600 w-30.5 text-white font-bold hover:bg-blue-700"
                >
                  {"Pay"}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {showRedirectPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md text-center">
            <h3 className="text-xl font-bold mb-4 text-blue-900">
              Redirecting to Payment
            </h3>
            <p className="text-gray-700 mb-6">
              Your order has been successfully submitted. You will now be
              redirected to the payment page.
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

export default PaymentForm;
