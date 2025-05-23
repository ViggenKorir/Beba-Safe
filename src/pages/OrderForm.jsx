import React, { useState } from "react";

const NewOrderForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    pickup: "",
    delivery: "",
    item: "",
    quantity: 1,
    weight: 1,
    dimensions: "",
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Order:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-blue-100 bg-blur-dark bg-opacity-40 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">New Delivery Request</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["pickup", "delivery"].map((field) => (
              <div key={field}>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1)} Location
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field} address`}
                  className="w-full rounded-xl border border-gray-300 p-3"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "item", placeholder: "e.g. Laptop" },
              { name: "quantity", type: "number" },
              { name: "weight", type: "number" },
              { name: "dimensions", placeholder: "L x W x H" },
            ].map(({ name, type = "text", placeholder = "" }) => (
              <div key={name}>
                <label className="block mb-1 font-medium text-sm text-gray-700">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-gray-300 p-3"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-1 font-medium text-sm text-gray-700">
              Special Instructions
            </label>
            <textarea
              name="instructions"
              value={formData.instructions}
              onChange={handleChange}
              rows={3}
              placeholder="E.g. Fragile, handle with care"
              className="w-full rounded-xl border border-gray-300 p-3"
            />
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOrderForm;

