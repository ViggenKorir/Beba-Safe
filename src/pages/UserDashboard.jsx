import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import ContactUs from "../components/ContactUs";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [recentOrders, setRecentOrders] = useState([]);
  const [statusOverview, setStatusOverview] = useState([]);

  const user = {
    id: 1,
    name: "there",
    email: "you@examplemail.com",
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const { data: ordersData, error: ordersError } = await supabase
          .from("orders")
          .select("*")
          .eq("userId", user.id);

        if (ordersError) throw ordersError;
        setRecentOrders(ordersData);

        const { data: statusData, error: statusError } = await supabase
          .from("statusOverview")
          .select("*");

        if (statusError) throw statusError;
        setStatusOverview(statusData);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, [user.id]);

  const handleNewDeliveryClick = () => {
    navigate("/request");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-['Work Sans','Noto Sans',sans-serif] px-4 py-6 pt-30">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0e141b]">Welcome to your dashboard</h1>
        <button
          className="h-10 px-4 bg-[#1980e6] text-white font-semibold rounded-xl"
          onClick={handleNewDeliveryClick}
        >
          New Delivery
        </button>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {statusOverview.map(({ label, count }) => (
          <div
            key={label}
            className="bg-white rounded-xl p-4 shadow-sm text-center border border-[#e7edf3]"
          >
            <p className="text-lg font-semibold text-[#0e141b]">{count}</p>
            <p className="text-sm text-[#4e7397]">{label}</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-xl shadow-sm border border-[#e7edf3]">
        <div className="p-4 border-b border-[#e7edf3]">
          <h2 className="text-lg font-semibold text-[#0e141b]">Your Order History</h2>
        </div>

        <p className="bg-yellow-50 text-yellow-800 px-4 py-3 rounded-lg border border-yellow-200 text-sm font-medium mb-4">
          👋 Hey {user.name}! Just a heads-up — the ability to view your previous and current orders right here in your dashboard is coming very soon. We're working on it just for you, so stay tuned!
        </p>

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
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-t border-[#e7edf3]">
                <td className="px-4 py-2 text-[#0e141b]">{order.id}</td>
                <td className="px-4 py-2 text-[#4e7397]">{order.pickupLocation}</td>
                <td className="px-4 py-2 text-[#4e7397]">{order.deliveryLocation}</td>
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
