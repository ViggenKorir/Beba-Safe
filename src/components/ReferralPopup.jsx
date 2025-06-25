import React, { useState, useRef, useEffect } from "react";

const ReferralPopup = ({ referralLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        Refer a Friend
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div
            ref={popupRef}
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-3 text-blue-900">Refer & Earn</h2>
            <p className="mb-4 text-gray-700">
              Share your referral link with friends and earn rewards when they join!
            </p>
            <div className="flex mb-4">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 px-3 py-2 border rounded-l-md"
              />
              <button
                onClick={handleCopy}
                className="px-4 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="flex gap-2">
              <a
                href={`https://wa.me/?text=Join%20BebaSafe!%20Sign%20up%20here:%20${encodeURIComponent(referralLink)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm"
              >
                WhatsApp
              </a>
              <a
                href={`sms:?body=Join BebaSafe! Sign up here: ${referralLink}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
              >
                SMS
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferralPopup;