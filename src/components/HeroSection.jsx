// src/components/HeroSection.tsx
import { OrderCTA } from "./OderCTA";
import { RequestDeliveryButton } from "./RequestDeliveryButton";
export function HeroSection() {
    return (
      <section className="bg-blue-100 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-30">
        <div className="container mx-auto text-center py-18 ml-12">
          <h1 className="text-7xl font-bold mb-5 text-blue-700">
            Fast, Reliable, and Secure Delivery from Nairobi CBD
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Beba Safe is your solution for quick and efficient deliveries across Nairobi. We handle
            the traffic, you focus on what matters.
          </p>
          <RequestDeliveryButton />
        </div>

        <div className="items-center py-5 ml-18">
          <img
            // src="https://res.cloudinary.com/dgu9ietkl/image/upload/v1747394826/Nairobi_CBD_fx0vgg.png"
            src="src/assets/BebaSafe Logo.png"
            alt="Dispatch-PicUp maps image"
             className="rounded-full w-100 h-100"
          />
        </div>
      </section>
    );
  }
  