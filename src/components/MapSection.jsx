import { useEffect } from "react";

export function MapSection() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      console.error("Missing VITE_GOOGLE_MAPS_API_KEY");
      return;
    }

    // Check if the Google Maps script is already loaded
    if (!document.querySelector("#google-maps-script")) {
      const script = document.createElement("script");
      script.id = "google-maps-script";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&v=weekly`;
      script.defer = true;
      document.body.appendChild(script);

      // Define the initMap function globally
      window.initMap = () => {
        const mapElement = document.getElementById("map");
        if (mapElement) {
          new window.google.maps.Map(mapElement, {
            center: { lat: -1.2921, lng: 36.8219 },
            zoom: 13,
          });
        }
      };

      // Handle script loading errors
      script.onerror = () => {
        console.error("Failed to load Google Maps script");
      };
    } else {
      // If the script is already loaded, initialize the map
      if (typeof window.initMap === "function") {
        window.initMap();
      }
    }
  }, []);

  return (
    <section className="bg-white py-12">
      <div id="map" style={{ height: "500px", width: "100%" }} />
    </section>
  );
}
