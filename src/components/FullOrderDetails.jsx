import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const FullOrderDetails = ({ orderId, isOpen, onClose }) => {
  const [order, setOrder] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState(null);

  const handleCallClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const statusOptions = [
    "Pending",
    "In Progress",
    "Out for Delivery",
    "Delivered",
    "Cancelled",
  ];

  useEffect(() => {
    if (isOpen && orderId) {
      fetchOrderDetails();
    }
  }, [orderId, isOpen]);

  const fetchOrderDetails = async () => {
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("id", orderId)
        .single();

      if (error) throw error;
      setOrder(data);
    } catch (error) {
      console.error("Error fetching order:", error);
      setError("Failed to load order details");
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    setIsUpdating(true);
    try {
      const { data, error } = await supabase
        .from("orders")
        .update({ status: newStatus })
        .eq("id", orderId)
        .select();

      if (error) throw error;
      setOrder(data[0]);
      alert("Order status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
      setError("Failed to update order status");
    } finally {
      setIsUpdating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-20 overflow-y-auto h-full w-full z-50">
      <div className="relative top-30 mx-auto p-5 border w-96 shadow-lg rounded-xl bg-white">
        <div className="flex justify-between items-center pb-3">
          <h3 className="text-xl font-semibold text-gray-900">Order Details</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {order ? (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="font-semibold">Pickup Location:</div>
              <div>{order.pickupLocation}</div>

              <div className="font-semibold">Delivery Location:</div>
              <div>{order.deliveryLocation}</div>

              <div className="font-semibold">Contact Person:</div>
              <div>{order.contactPerson}</div>

              <div className="font-semibold">Contact Number:</div>
              <div>
                <a
                  href={`tel:${order.contactNo}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCallClick(order.contactNo);
                  }}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {order.contactNo}
                </a>
              </div>

              <div className="font-semibold">Item Type:</div>
              <div>{order.itemType}</div>

              <div className="font-semibold">Quantity:</div>
              <div>{order.quantity}</div>

              <div className="font-semibold">Status:</div>
              <div className="flex items-center">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusUpdate(e.target.value)}
                  disabled={isUpdating}
                  className="border rounded px-2 py-1 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
                {isUpdating && (
                  <svg
                    className="animate-spin h-4 w-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
              </div>
            </div>

            <div className="mt-6">
              <div className="font-semibold mb-2">Special Instructions:</div>
              <div className="bg-gray-50 p-3 rounded">
                {order.special_instructions || "No special instructions"}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-32">
            <svg
              className="animate-spin h-8 w-8 text-blue-600"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default FullOrderDetails;
