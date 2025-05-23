import React from "react";

const AdminDashboard = () => {
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
                    "Address",
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
                {[
                  ["#1234", "Jane Doe", "1234 Main St", "In progress"],
                  ["#5678", "John Smith", "5678 Elm St", "Pending"],
                  ["#9101", "Alice Johnson", "9101 Pine St", "Completed"],
                  ["#1121", "Bob Davis", "1121 Oak St", "Canceled"],
                  ["#3141", "Eve Brown", "3141 Cedar St", "In progress"],
                  ["#5161", "Charlie Wilson", "5161 Maple St", "Pending"],
                  ["#7181", "Grace Lee", "7181 Birch St", "Completed"],
                  ["#9201", "David Garcia", "9201 Ash St", "Canceled"],
                  ["#1221", "Frank Martinez", "1221 Walnut St", "In progress"],
                  ["#3241", "Hannah Miller", "3241 Spruce St", "Pending"],
                ].map(([id, courier, user, status], index) => (
                  <tr key={index} className="border-t border-[#d0dbe7]">
                    <td className="px-4 py-2 text-sm font-normal text-[#0e141b]">{id}</td>
                    <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">{courier}</td>
                    <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">{user}</td>
                    <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">{user}</td>
                    <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">{status}</td>
                    <td className="px-4 py-2 text-sm font-normal text-[#4e7397]">...</td>
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