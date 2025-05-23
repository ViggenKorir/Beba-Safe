import { useState } from 'react';

export const RequestDeliveryButton = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleClick = () => {
    console.log("User redirect to Delivery Request Page");
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    alert("Redirecting you to Delivery Request Page...")
    setPopupOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full"
        onClick={handleClick}
      >
        Request Delivery
      </button>
      {isPopupOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-xl">
            <h2 className="text-xl font-bold mb-4 text-[#0e141b]">New Delivery Request</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
              {/* Add more form fields as needed */}
              <button
                type="button"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClosePopup}
              >
                Proceed
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

