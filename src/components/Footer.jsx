export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Beba Safe</h3>
          <p className="text-sm text-gray-400">
            Beba Safe is your trusted partner for fast, reliable, and secure
            delivery services in Nairobi. We ensure your packages are delivered
            on time, every time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-sm text-gray-400 hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-sm text-gray-400 hover:text-white"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-sm text-gray-400 hover:text-white"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-sm text-gray-400 hover:text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <span className="font-semibold text-white">Phone:</span> <br />
              <a href="tel:+254712856197" className="hover:text-white">
                +254 712 856 197
              </a>
              <br />
              or <br />
              <span className="font-semibold text-white"></span>{" "}
              <a href="tel:+254712856197" className="hover:text-white">
                +254 712 856 197
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:support@bebasafe.com"
                className="hover:text-white"
              >
                {/* support@bebasafe.com */}
                viggen.inc@zohomail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Address:</span> Nairobi
              CBD, Kenya
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2025 Beba Safe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
