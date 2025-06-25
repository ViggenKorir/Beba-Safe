import { RequestDeliveryButton } from "./RequestDeliveryButton";

export function HeroSection() {
  return (
    <section className="bg-blue-100 py-20 px-4 sm:px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div className="text-center md:text-center md:ml-8.5 space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 leading-tight tracking-tight mt-8">
          Fast, Reliable, and Secure Delivery from Nairobi CBD
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-blue-900 max-w-md">
          Beba Safe is your solution for quick and efficient deliveries across Nairobi.
          We handle the traffic, you focus on what matters.
        </p>
        <RequestDeliveryButton />
      </div>

      {/* Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src="https://res.cloudinary.com/dgu9ietkl/image/upload/v1748977333/pmlhudzzwrruqcd0kokw.png"
          alt="Delivery service illustration"
          className="rounded-full shadow-xl md:mr-25 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}
