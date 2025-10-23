'use client';

import React, { JSX } from 'react';
import Link from 'next/link';
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Foot(): JSX.Element {
  return (
    <footer className="bg-[#0e0e0e] text-white w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-9 lg:py-8">
        <div className="md:flex md:justify-between pt-4">
          {/* Logo & Address */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center rounded-[99px]">
              <Image src="/logo.png" className="h-15 me-3 rounded-[99px]" alt="Designbird Logo" />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">LOGO HERE</span> */}
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              A1/24, SSB Sarani, Aranyak East,<br />
              Sector 2A, Bidhannagar,<br />
              Durgapur, West Bengal 713212
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Email: <a href="mailto:contact@designbird.in" className="hover:underline">contact@designbird.in</a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-gray-400">
            <a 
              href="https://youtube.com/@designbird1?si=_WjgpQcg565e065s" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition-colors duration-200"
              aria-label="Visit our YouTube channel"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://www.facebook.com/share/15rc2ESyUo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 transition-colors duration-200"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/designbird.in?igsh=MWJzaWV3NHY3NXN3cQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-200"
              aria-label="Visit our Instagram page"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/designbirdreal/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors duration-200"
              aria-label="Visit our LinkedIn page"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between text-gray-400 text-sm text-center">
          <span>© 2024 Designbird. All rights reserved.</span>
          <div className="flex space-x-6 justify-center sm:justify-start mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors duration-200">Refund Policy</Link>
          </div>
          <div className="mt-6 sm:mt-4 text-gray-400">
            Made with <span className="text-red-500">❤️</span> by Designbird Team
          </div>
        </div>
      </div>
    </footer>
  );
}
