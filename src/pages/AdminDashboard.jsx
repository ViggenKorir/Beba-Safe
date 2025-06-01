import React, { useState, useEffect } from "react";
import { supabase } from '../supabaseClient';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        // Attempt to fetch orders with related data.
        // Adjust if your table/column names or relationships differ.
        // For example, use `couriers!left(name)` if a courier might not be assigned.
        const { data, error: fetchError } = await supabase
          .from('orders')
          .select('*, couriers(name), user_profiles(full_name)') // Assuming user_profiles has full_name
          .order('created_at', { ascending: false });

        if (fetchError) {
          // If join fails, try fetching without it for graceful degradation.
          console.warn("Failed to fetch orders with joins, trying without:", fetchError.message);
          const { data: basicData, error: basicError } = await supabase
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });

          if (basicError) {
            setError(basicError.message);
            setOrders([]);
          } else {
            setOrders(basicData || []);
            // Optionally, set a different error/warning to indicate partial data
            setError("Fetched orders, but some related data might be missing.");
          }
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

    fetchAllOrders();
  }, []);

  return (
    <div className="min-h-screen flex bg-slate-50 font-['Work Sans','Noto Sans',sans-serif] overflow-x-hidden pt-20">
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
          <button className="h-10 rounded-xl bg-[#1980e6] px-4 text-sm font-bold text-white">
            New Order
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 py-5">
        <div className="flex justify-between items-center px-4 py-3">
          <h1 className="text-[32px] font-bold text-[#0e141b]">All Orders</h1>
          <button className="h-8 px-4 rounded-xl bg-[#e7edf3] text-sm font-medium text-[#0e141b]">
            Export
          </button>
        </div>

        <div className="px-4 py-3">
          <label className="w-full flex items-center h-12 rounded-xl bg-[#e7edf3]">
            <span className="pl-4 text-[#4e7397]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by order ID, courier, user, address"
              className="flex-1 h-full px-2 bg-[#e7edf3] focus:outline-none text-[#0e141b] placeholder:text-[#4e7397]"
            />
          </label>
        </div>

        <div className="flex flex-wrap gap-3 px-4">
          {["All", "Pending", "In Progress", "Completed", "Canceled"].map((status, index) => (
            <div
              key={index}
              className="h-8 flex items-center px-4 rounded-xl bg-[#e7edf3] text-sm font-medium text-[#0e141b]"
            >
              {status}
            </div>
          ))}
        </div>

        <div className="px-4 py-3 overflow-auto">
          <div className="overflow-hidden rounded-xl border border-[#d0dbe7] bg-slate-50">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  {[
                    "Order ID",
                    "Courier",
                    "User",
                    "Address (Pickup)",
                    "Status",
                    "Actions",
                  ].map((header, index) => (
                    <th
                      key={index}
                      className="px-4 py-3 text-left text-sm font-medium text-[#0e141b]"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="6" className="text-center py-4">Loading all orders...</td></tr>
                ) : error && !orders.length ? ( // Only show fatal error if no orders are loaded at all
                  <tr><td colSpan="6" className="text-center py-4 text-red-500">Error fetching orders: {error}</td></tr>
                ) : orders.length === 0 ? (
                  <tr><td colSpan="6" className="text-center py-4">No orders found.</td></tr>
                ) : (
                  orders.map((order) => (
                    <tr key={order.id} className="border-t border-[#d0dbe7]">
                      <td className="px-4 py-2 text-sm font-normal text-[#0e141b] whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px]" title={order.id}>
                        {order.id ? order.id.substring(0, 8) + "..." : 'N/A'}
                      </td>
                      <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">
                        {order.couriers ? order.couriers.name : (order.courier_id || 'N/A')}
                      </td>
                      <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">
                        {/* Assuming user_profiles table and it has full_name */}
                        {order.user_profiles ? order.user_profiles.full_name : (order.user_id ? order.user_id.substring(0,8)+'...' : 'N/A')}
                      </td>
                      <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">{order.pickup_location}</td>
                      <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">{order.status}</td>
                      <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">...</td>
                    </tr>
                  ))
                )}
                {/* Display a warning if orders were fetched but joins might have failed */}
                {error && orders.length > 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-2 text-orange-500 text-xs">
                      Note: {error}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;