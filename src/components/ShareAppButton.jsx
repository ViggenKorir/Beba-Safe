import React, { useState } from 'react';

const ShareAppButton = () => {

const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);
    
    const shareData = {
      title: 'Share Beba Safe App',
      text: 'Try BebaSafe now!',
      url: window.location.origin
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('Shared successfully');
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        alert('Link copied to clipboard!');
      } else {
        alert('Sharing is not supported on this device');
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Share was cancelled');
      } else {
        console.error('Error sharing:', error);
        alert('Failed to share. Please try again.');
      }
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <button
      onClick={handleShare}
      disabled={isSharing}
      className={`
        group relative flex w-full justify-center
        px-4 py-2.5 text-sm font-semibold top-1
        ${isSharing 
          ? 'bg-blue-400' 
          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
        }
        text-white
        rounded-md
        transition-all duration-200 ease-in-out
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
        disabled:cursor-not-allowed disabled:opacity-70
      `}
      aria-label="Share Beba Safe App"
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          className={`h-5 w-5 ${isSharing ? 'animate-spin text-blue-300' : 'text-indigo-300'} group-hover:text-indigo-200`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isSharing ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          )}
        </svg>
      </div>
      {isSharing ? 'Sharing...' : 'Share BebaSafe'}
    </button>
  );
};

export default ShareAppButton;