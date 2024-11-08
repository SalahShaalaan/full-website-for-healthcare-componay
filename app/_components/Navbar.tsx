"use client";
import { useState } from "react";
import logo from "@/public/images/company.png";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import NavLink from "./NavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/amenities", label: "Amenities" },
    { href: "/locations", label: "Locations" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <header className="relative shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 px-4">
          <Link href="/">
            <Image
              src={logo}
              alt="Healthcare Logo"
              width={200}
              height={200}
              className="w-auto h-auto"
              priority
              quality={100}
            />
          </Link>

          <nav
            className={`
            ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
            md:max-h-screen md:opacity-100
            absolute md:relative top-full left-0 w-full md:w-auto
            bg-white md:bg-transparent
            overflow-hidden transition-all duration-300 ease-in-out
            flex flex-col md:flex-row z-20
            `}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
              {navItems.map((item, index) => (
                <li key={index} className="my-2 md:my-0">
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
              <Link href="/contact-us">
                <Button>Contact Us</Button>
              </Link>
            </ul>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 text-[#145566] hover:bg-gray-100 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
