import React, { useEffect, useState } from "react";

const OrderConfirmationPage = () => {
  const [orderConfirmation, setOrderConfirmation] = useState(null);

  // Fetch order confirmation details from db.json
  useEffect(() => {
    const fetchOrderConfirmation = async () => {
      try {
        const response = await fetch("http://localhost:3001/orderConfirmation");
        const data = await response.json();
        setOrderConfirmation(data);
      } catch (error) {
        console.error("Error fetching order confirmation details:", error);
      }
    };

    fetchOrderConfirmation();
  }, []);

  if (!orderConfirmation) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="w-full max-w-[960px] flex flex-col py-5 gap-4">
            {/* Order Progress */}
            <div className="flex flex-col gap-3 p-4">
              <div className="flex justify-between gap-6">
                <p className="text-[#0e141b] text-base font-medium">
                  {orderConfirmation.status}
                </p>
              </div>
              <div className="rounded bg-[#d0dbe7]">
                <div className="h-2 rounded bg-[#1980e6] w-full"></div>
              </div>
              <p className="text-[#4e7397] text-sm font-normal">
                {orderConfirmation.progress}
              </p>
            </div>

            {/* Order Confirmation */}
            <h1 className="text-[22px] font-bold text-[#0e141b] px-4 pt-5 pb-3">
              Your order has been placed!
            </h1>
            <p className="text-base text-[#0e141b] px-4 pt-1 pb-3">
              {orderConfirmation.message}
            </p>

            {/* Order Details */}
            <h3 className="text-lg font-bold text-[#0e141b] px-4 pt-4 pb-2">
              Order Details
            </h3>
            {orderConfirmation.details.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between gap-4 bg-slate-50 px-4 py-2 min-h-[72px]"
              >
                <div className="flex flex-col">
                  <p className="text-base font-medium text-[#0e141b] line-clamp-1">
                    {label}
                  </p>
                  <p className="text-sm text-[#4e7397] line-clamp-2">{value}</p>
                </div>
                <div className="shrink-0">
                  <p className="text-base font-normal text-[#0e141b]">{value}</p>
                </div>
              </div>
            ))}

            {/* Payment Method */}
            <h3 className="text-lg font-bold text-[#0e141b] px-4 pt-4 pb-2">
              Payment Method
            </h3>
            <div className="flex items-center justify-between gap-4 bg-slate-50 px-4 min-h-14">
              <div className="flex items-center gap-4">
                <div
                  className="h-6 w-10 shrink-0 bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: "url('/visa.svg')" }}
                ></div>
                <p className="text-base text-[#0e141b] truncate">
                  {orderConfirmation.paymentMethod.lastFourDigits}
                </p>
              </div>
              <div className="shrink-0">
                <button className="h-8 px-4 rounded-xl bg-[#e7edf3] text-sm font-medium text-[#0e141b]">
                  Change
                </button>
              </div>
            </div>

            {/* Total */}
            <h3 className="text-lg font-bold text-[#0e141b] px-4 pt-4 pb-2">
              Total
            </h3>
            <div className="flex items-center justify-between gap-4 bg-slate-50 px-4 min-h-14">
              <p className="text-base text-[#0e141b] truncate">
                {orderConfirmation.total}
              </p>
              <div className="shrink-0">
                <p className="text-base font-normal text-[#0e141b]">
                  {orderConfirmation.total}
                </p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="px-4 py-3">
              <button className="h-10 px-4 rounded-xl bg-[#1980e6] text-sm font-bold text-white">
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
