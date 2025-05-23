const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-12">
          At <span className="font-bold text-blue-600">BebaSafe</span>, we are committed to providing secure, reliable, and efficient delivery services. 
          Our mission is to connect people and businesses through seamless logistics solutions, ensuring every package is delivered safely and on time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To revolutionize the logistics industry by offering innovative and customer-centric delivery solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and preferred delivery service provider, empowering businesses and individuals alike.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Values</h3>
            <p className="text-gray-700">
              Integrity, innovation, and customer satisfaction are at the core of everything we do.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-6">
            With a dedicated team, cutting-edge technology, and a passion for excellence, we ensure your deliveries are handled with care and precision.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;