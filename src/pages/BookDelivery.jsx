import React from "react";

const BookDeliveryForm = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{
        fontFamily: '"Work Sans", "Noto Sans", sans-serif',
        // Optional CSS vars could be set globally
      }}
    >
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-[#e7edf3] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0e141b]">
          <div className="w-4 h-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Sendy</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8">
          <button className="flex h-10 items-center justify-center gap-2 rounded-xl bg-[#e7edf3] px-2.5 text-sm font-bold text-[#0e141b]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="..." /> {/* Simplified for brevity */}
            </svg>
          </button>
          <div
            className="size-10 rounded-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/6b9208b1-7749-4e53-b4fc-2dfd7800828a.png")` }}
          ></div>
        </div>
      </header>

      {/* MAIN FORM */}
      <main className="px-4 md:px-40 py-5 flex justify-center flex-1">
        <div className="w-full max-w-[960px] flex flex-col gap-4">
          <div className="p-4">
            <h1 className="text-[32px] font-bold text-[#0e141b]">Book a delivery</h1>
            <p className="text-sm text-[#4e7397]">Get your items delivered at the best price.</p>
          </div>

          {/* Pickup and Delivery Address */}
          <div className="flex flex-wrap gap-4 px-4">
            {['Pickup location', 'Delivery location'].map((label, i) => (
              <label key={i} className="flex flex-col flex-1 min-w-40">
                <span className="pb-2 text-base font-medium text-[#0e141b]">{label}</span>
                <input
                  placeholder={`Enter ${label.toLowerCase()}`}
                  className="form-input h-14 rounded-xl border border-[#d0dbe7] bg-slate-50 p-[15px] text-base text-[#0e141b] placeholder:text-[#4e7397]"
                />
              </label>
            ))}
          </div>

          {/* Item Details */}
          <div className="px-4">
            <h3 className="pb-2 pt-4 text-lg font-bold text-[#0e141b]">Item details</h3>
            <div className="flex flex-wrap gap-4">
              {["Item type", "Quantity", "Weight (kg)", "Length x Width x Height (cm)", "Value (KES)", "Reference number"].map((label, i) => (
                <label key={i} className="flex flex-col flex-1 min-w-40">
                  <span className="pb-2 text-base font-medium text-[#0e141b]">{label}</span>
                  <input
                    placeholder={label === 'Reference number' ? 'Optional' : label}
                    className="form-input h-14 rounded-xl border border-[#d0dbe7] bg-slate-50 p-[15px] text-base text-[#0e141b] placeholder:text-[#4e7397]"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Special Instructions */}
          <div className="px-4">
            <label className="flex flex-col">
              <span className="pb-2 text-base font-medium text-[#0e141b]">Special instructions</span>
              <textarea
                placeholder="E.g. Handle with care"
                className="form-input min-h-36 rounded-xl border border-[#d0dbe7] bg-slate-50 p-[15px] text-base text-[#0e141b] placeholder:text-[#4e7397]"
              ></textarea>
            </label>
          </div>

          {/* Contact Details */}
          <div className="px-4">
            <h3 className="pb-2 pt-4 text-lg font-bold text-[#0e141b]">Contact details</h3>
            <div className="flex flex-wrap gap-4">
              {["Full name", "Phone number"].map((label, i) => (
                <label key={i} className="flex flex-col flex-1 min-w-40">
                  <span className="pb-2 text-base font-medium text-[#0e141b]">{label}</span>
                  <input
                    placeholder={`Enter ${label.toLowerCase()}`}
                    className="form-input h-14 rounded-xl border border-[#d0dbe7] bg-slate-50 p-[15px] text-base text-[#0e141b] placeholder:text-[#4e7397]"
                  />
                </label>
              ))}
              <label className="flex flex-col flex-1 min-w-40">
                <span className="pb-2 text-base font-medium text-[#0e141b]">Email</span>
                <select className="form-input h-14 rounded-xl border border-[#d0dbe7] bg-slate-50 p-[15px] text-base text-[#0e141b]">
                  <option>Enter email</option>
                  <option>two</option>
                  <option>three</option>
                </select>
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="px-4">
            <h3 className="pb-2 pt-4 text-lg font-bold text-[#0e141b]">Payment method</h3>
            <div className="flex flex-col gap-3">
              {["M-Pesa", "Card"].map((method, i) => (
                <label
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-[#d0dbe7] p-[15px]"
                >
                  <input
                    type="radio"
                    name="payment"
                    className="h-5 w-5 border-2 border-[#d0dbe7] bg-transparent text-transparent checked:border-[#1980e6] focus:outline-none"
                    defaultChecked={i === 0}
                  />
                  <span className="text-sm font-medium text-[#0e141b]">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="flex items-center justify-between bg-slate-50 px-4 py-2 min-h-[72px]">
            <div>
              <p className="text-base font-medium text-[#0e141b]">Estimated cost</p>
              <p className="text-sm text-[#4e7397]">KES 1,000</p>
            </div>
            <p className="text-base font-normal text-[#0e141b]">KES 1,000</p>
          </div>

          {/* Book Button */}
          <div className="px-4 py-3">
            <button className="h-12 w-full rounded-xl bg-[#1980e6] px-5 text-base font-bold text-white">
              Book delivery
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDeliveryForm;
