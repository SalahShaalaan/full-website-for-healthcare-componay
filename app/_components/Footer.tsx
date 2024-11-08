import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/amenities", label: "Amenities" },
  { href: "/locations", label: "Locations" },
  { href: "/careers", label: "Careers" },
];

const Footer = () => {
  return (
    <footer className="bg-mainGreen text-gray-300">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                width={300}
                height={300}
                quality={100}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              Delivering excellence in service and innovation.
            </p>
          </div>

          <div className="md:mx-auto">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Contact Us:
            </h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="block">Phone: (555) 123-4567</span>
                <span className="block">Email: contact@example.com</span>
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                  Follow The developer:
                </h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/salah.a.shalaan"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaFacebook className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://x.com/salah_shaalaan"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaXTwitter className="h-6 w-6" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/salah-shaalaan/"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#E9F5F8] bg-opacity-65 p-4">
          <p className="text-center text-sm text-headingColor">
            © {new Date().getFullYear()} Developed with 🩶 by{" "}
            <span className="italic font-semibold">Salah Shaalaan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
