import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewOrderForm = ({ onClose, orderId }) => {
  if (!onClose) {
    console.error("onClose prop is required for NewOrderForm");
    return null; // Prevent rendering if onClose is not provided
  }

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted successfully!");
    navigate("/user-dashboard");
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
              className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
              placeholder="Enter pickup address"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0e141b]">Delivery Location</label>
            <input
              className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
              placeholder="Enter delivery address"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0e141b]">Item Type</label>
              <input
                className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
                placeholder="Item type"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0e141b]">Quantity</label>
              <input
                className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
                type="number"
                placeholder="1"
                required
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0e141b]">Weight (kg)</label>
              <input
                className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
                type="number"
                placeholder="1"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0e141b]">Dimensions (LxWxH)</label>
              <input
                className="form-input w-full rounded-xl border border-[#d0dbe7] p-3"
                placeholder="1x1x1"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0e141b]">Special Instructions</label>
            <textarea
              className="form-textarea w-full rounded-xl border border-[#d0dbe7] p-3"
              rows={3}
              placeholder="Handle with care"
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose} // Calls the onClose function passed as a prop
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200"
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
  const [isFormOpen, setFormOpen] = useState(false);

  const handleClose = () => {
    console.log("Close button clicked");
    setFormOpen(false);
  };

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
        <button onClick={() => setFormOpen(true)}>Open Form</button>
        {isFormOpen && <NewOrderForm onClose={handleClose} orderId={123} />}
      </main>

      {showNewOrderForm && <NewOrderForm onClose={() => setShowNewOrderForm(false)} orderId={123} />}
    </div>
  );
};

export default AdminDashboard;