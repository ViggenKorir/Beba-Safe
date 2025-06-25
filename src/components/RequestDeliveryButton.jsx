import { useState } from "react";
import { supabase } from "../supabaseClient";

export const RequestDeliveryButton = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const fields = [
    { name: "pickupLocation", label: "Pickup Location *", type: "text", placeholder: "Enter pickup address"},
    { name: "deliveryLocation", label: "Delivery Location *", type: "text", placeholder: "Enter delivery address" },
    { name: "contactPerson", label: "Contact Person *", type: "text", placeholder: "Enter name" },
    { name: "contactNo", label: "Contact No.*", type: "text", placeholder: "+254-700-000-000" },
    { name: "itemType", label: "Item Name *", type: "text", placeholder: "e.g. Laptop" },
    { name: "quantity", label: "Quantity", type: "number", placeholder: "" },
    { name: "weight", label: "Weight", type: "number", placeholder: "" },
    { name: "dimensions", label: "Dimensions", type: "text", placeholder: "L x W x H" },
    { name: "specialInstructions", label: "Special Instructions", type: "textarea", placeholder: "E.g. Fragile, handle with care" },
  ];

  const handleClick = () => setPopupOpen(true);
  const handleClosePopup = () => setPopupOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate required fields
      const requiredFields = ['pickupLocation', 'deliveryLocation', 'contactPerson', 'contactNo', 'itemType'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
        return;
      }

      const requestData = {
        ...formData,
        status: "Pending",
        courier: "",
        created_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from("orders")
        .insert([requestData])
        .select();

      if (error) {
        console.error("Error details:", error);
        throw new Error(error.message);
      }

      console.log("Success! New order:", data);
      alert("Delivery request submitted successfully!");
      setPopupOpen(false);
      setFormData({}); // Reset form
    } catch (error) {
      console.error("Error submitting delivery request:", error);
      alert(`Error: ${error.message || 'An error occurred. Please try again.'}`);
    }
  };

  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full"
        onClick={handleClick}
      >
        Request Delivery
      </button>

      {isPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-sm rounded-lg bg-opacity-50 flex justify-center items-center px-4 z-50">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              New Delivery Request
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fields.map(({ name, label, type, placeholder }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {label}
                    </label>
                    {type === "textarea" ? (
                      <textarea
                        name={name}
                        value={formData[name] || ""}
                        onChange={handleChange}
                        rows={2}
                        placeholder={placeholder}
                        className="form-input w-full rounded-lg border border-[#d0dbe7] p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    ) : (
                      <input
                        type={type || "text"}
                        name={name}
                        value={formData[name] || ""}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className="form-input w-full rounded-lg border border-[#d0dbe7] p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium mb-15"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 text-sm mb-15"
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
