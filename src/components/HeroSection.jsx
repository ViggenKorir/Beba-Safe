import { OrderCTA } from "./OderCTA";
import { RequestDeliveryButton } from "./RequestDeliveryButton";

export function HeroSection() {
  return (
    <section className="bg-blue-100 py-20 px-4 sm:px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-blue-700 leading-tight">
          Fast, Reliable, and Secure Delivery from Nairobi CBD
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
          Beba Safe is your solution for quick and efficient deliveries across Nairobi. We handle
          the traffic, you focus on what matters.
        </p>
        <RequestDeliveryButton />
      </div>

      <div className="flex justify-center md:justify-end">
        <img
          src="src/assets/BebaSafe Logo.png"
          alt="Dispatch-PicUp maps image"
          className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover"
        />
      </div>
    </section>
  );
}