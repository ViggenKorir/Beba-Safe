import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase.from("orders").select("*");
      if (error) {
        console.error("Error fetching orders:", error);
      } else {
        setOrders(data);
      }
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    const fetchStatuses = async () => {
      const { data, error } = await supabase.from("statuses").select("*");
      if (error) {
        console.error("Error fetching statuses:", error);
      } else {
        setStatuses(data);
      }
    };
    fetchStatuses();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-['Work Sans','Noto Sans',sans-serif] overflow-x-hidden pt-20">
      <main className="flex-1 px-4 py-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 gap-4">
          <h1 className="text-2xl md:text-[32px] font-bold text-[#0e141b]">All Orders</h1>
          <button className="h-10 px-5 rounded-xl bg-[#e7edf3] text-sm font-medium text-[#0e141b]">Export</button>
        </div>

        <div className="px-4 py-3">
          <label className="w-full flex items-center h-12 rounded-xl bg-[#e7edf3]">
            <span className="pl-4 text-[#4e7397]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
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
          {statuses.map((status) => (
            <div
              key={status.id}
              className="h-8 flex items-center px-4 rounded-xl bg-[#e7edf3] text-sm font-medium text-[#0e141b]"
            >
              {status.label}
            </div>
          ))}
        </div>

        <div className="px-4 py-3 overflow-x-auto">
          <div className="min-w-[600px] overflow-hidden rounded-xl border border-[#d0dbe7] bg-slate-50">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr>
                  {["Order ID", "Pickup Location", "Delivery Location", "Status", "Actions"].map((header, index) => (
                    <th key={index} className="px-4 py-3 text-left font-medium text-[#0e141b]">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t border-[#d0dbe7]">
                    <td className="px-4 py-2 text-[#0e141b]">{order.id}</td>
                    <td className="px-4 py-2 text-[#4e7397]">{order.pickupLocation}</td>
                    <td className="px-4 py-2 text-[#4e7397]">{order.deliveryLocation}</td>
                    <td className="px-4 py-2 text-[#4e7397]">{order.status}</td>
                    <td className="px-4 py-2 text-[#4e7397]">
                      <button className="text-blue-600 hover:underline">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
