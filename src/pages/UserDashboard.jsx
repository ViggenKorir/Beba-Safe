import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import { supabase } from '../supabaseClient';
import { useUser } from '@clerk/clerk-react';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from('orders')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (fetchError) {
          setError(fetchError.message);
          setOrders([]);
        } else {
          setOrders(data || []);
        }
      } catch (err) {
        setError(err.message);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  const handleNewDeliveryClick = () => {
    navigate("/request"); // Redirects to the OrderCTA page
  };

  const statusCounts = React.useMemo(() => {
    const counts = {
      Pending: 0,
      "In Progress": 0,
      Completed: 0,
      Canceled: 0,
    };
    orders.forEach(order => {
      if (counts[order.status] !== undefined) {
        counts[order.status]++;
      }
    });
    return counts;
  }, [orders]);


  return (
    <div className="min-h-screen bg-slate-50 font-['Work Sans','Noto Sans',sans-serif] px-4 py-6 pt-30">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-[#0e141b]">
          Welcome, {user ? user.firstName || user.fullName || 'User' : 'Guest'}!
        </h1>
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
          { label: "Pending", count: statusCounts.Pending },
          { label: "In Progress", count: statusCounts["In Progress"] },
          { label: "Completed", count: statusCounts.Completed },
          { label: "Canceled", count: statusCounts.Canceled },
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
              <th className="px-4 py-2 text-[#0e141b] font-medium">Pickup Location</th>
              <th className="px-4 py-2 text-[#0e141b] font-medium">Delivery Location</th>
              <th className="px-4 py-2 text-[#0e141b] font-medium">Status</th>
              <th className="px-4 py-2 text-[#0e141b] font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="5" className="text-center py-4">Loading orders...</td></tr>
            ) : error ? (
              <tr><td colSpan="5" className="text-center py-4 text-red-500">Error fetching orders: {error}</td></tr>
            ) : orders.length === 0 ? (
              <tr><td colSpan="5" className="text-center py-4">No orders found.</td></tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id} className="border-t border-[#e7edf3]">
                  <td className="px-4 py-2 text-[#0e141b] whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]" title={order.id}>
                    {order.id.substring(0, 8)}...
                  </td>
                  <td className="px-4 py-2 text-[#4e7397]">{order.pickup_location}</td>
                  <td className="px-4 py-2 text-[#4e7397]">{order.delivery_location}</td>
                  <td className="px-4 py-2 text-[#4e7397]">{order.status}</td>
                  <td className="px-4 py-2">
                    <button className="text-sm text-[#1980e6] font-medium">Track</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <ContactUs />
      </section>
    </div>
  );
};

export default UserDashboard;