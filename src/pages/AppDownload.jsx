import React from "react";
import { Footer } from "../components/Footer";

function AppDownload() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 mb-5">
          Get the app on PlayStore or AppStore
        </h1>
        <div className="flex justify-center items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.bebasafe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="" alt="Play Store" className="w-40 h-14 m-2" />
          </a>
          <a
            href="https://apps.apple.com/us/app/beba-safe/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="" alt="App Store" className="w-40 h-14 m-2" />
          </a>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default AppDownload;
