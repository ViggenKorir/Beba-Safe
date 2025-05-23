import React from "react";
import { useNavigate } from "react-router-dom";
import ContactUs from "../components/ContactUs";

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleNewDeliveryClick = () => {
    navigate("/request"); // Redirects to the OrderCTA page
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Work Sans','Noto Sans',sans-serif] px-4 py-6 pt-30">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0e141b]">Welcome, Jane!</h1>
        <button
          className="h-10 px-4 bg-[#1980e6] text-white font-semibold rounded-xl"
          onClick={handleNewDeliveryClick}
        >
          New Delivery
        </button>
      </header>

      {/* Status Overview */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Pending", count: 3 },
          { label: "In Progress", count: 2 },
          { label: "Completed", count: 8 },
          { label: "Canceled", count: 1 },
        ].map(({ label, count }) => (
          <div
            key={label}
            className="bg-white rounded-xl p-4 shadow-sm text-center border border-[#e7edf3]"
          >
            <p className="text-lg font-semibold text-[#0e141b]">{count}</p>
            <p className="text-sm text-[#4e7397]">{label}</p>
          </div>
        ))}
      </section>

      {/* Recent Deliveries */}
      <section className="bg-white rounded-xl shadow-sm border border-[#e7edf3]">
        <div className="p-4 border-b border-[#e7edf3]">
          <h2 className="text-lg font-semibold text-[#0e141b]">Recent Orders</h2>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-[#f9fafb]">
            <tr>
              <th className="px-4 py-2 text-[#0e141b] font-medium">Order ID</th>
              <th className="px-4 py-2 text-[#0e141b] font-medium">Pickup</th>
              <th className="px-4 py-2 text-[#0e141b] font-medium">Delivery</th>
              <th className="px-4 py-2 text-[#0e141b] font-medium">Status</th>
              <th className="px-4 py-2 text-[#0e141b] font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "#1234",
                pickup: "Westlands",
                delivery: "CBD",
                status: "In Progress",
              },
              {
                id: "#1235",
                pickup: "Kilimani",
                delivery: "Parklands",
                status: "Pending",
              },
              {
                id: "#1236",
                pickup: "CBD",
                delivery: "South B",
                status: "Completed",
              },
            ].map((order) => (
              <tr key={order.id} className="border-t border-[#e7edf3]">
                <td className="px-4 py-2 text-[#0e141b]">{order.id}</td>
                <td className="px-4 py-2 text-[#4e7397]">{order.pickup}</td>
                <td className="px-4 py-2 text-[#4e7397]">{order.delivery}</td>
                <td className="px-4 py-2 text-[#4e7397]">{order.status}</td>
                <td className="px-4 py-2">
                  <button className="text-sm text-[#1980e6] font-medium">Track</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ContactUs />
      </section>
    </div>
  );
};

export default UserDashboard;