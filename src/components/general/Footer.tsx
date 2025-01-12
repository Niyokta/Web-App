'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-light p-10 bg-[#0A1B2A] w-auto flex justify-center">
      {/* Main Grid Layout */}
      <div className="flex flex-col w-[90%]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between  p-6 rounded-md">
          {/* Company Info */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:pr-6">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">Niyokta</h2>
            <p className="text-sm text-gray-300">
              Our platform bridges the gap between freelancers and clients. Whether you're a creative or a client in need of professional services, we make connecting seamless and efficient.
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold text-white mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              We'll keep you updated with the best new jobs.
            </p>
            <form className="flex flex-col sm:flex-row items-center bg-[#172B40] p-4 rounded-xl">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-grow px-4 py-2 rounded-lg border border-gray-700 bg-[#172B40] text-white mb-4 sm:mb-0 sm:mr-4"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Email: niyokta@support.com</p>
            <p className="text-gray-300 mb-2">Mobile: +1778-344-544</p>
            <p className="text-gray-300 mb-4">
              White Street Night Road N/A 12 Constance Street London E16 2DQ
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link href="#">Graphics & Design</Link>
              </li>
              <li>
                <Link href="#">Digital Marketing</Link>
              </li>
              <li>
                <Link href="#">Writing & Translation</Link>
              </li>
              <li>
                <Link href="#">Video & Animation</Link>
              </li>
              <li>
                <Link href="#">Music & Audio</Link>
              </li>
              <li>
                <Link href="#">Programming & Tech</Link>
              </li>
              <li>
                <Link href="#">Photography</Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Press & News</Link>
              </li>
              <li>
                <Link href="#">Pricing Plan</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Blogs</Link>
              </li>
              <li>
                <Link href="#">FAQ's</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help & Support</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                <Link href="#">Help & Support</Link>
              </li>
              <li>
                <Link href="#">Trust & Safety</Link>
              </li>
              <li>
                <Link href="#">Selling on Niyokta</Link>
              </li>
              <li>
                <Link href="#">Buying on Niyokta</Link>
              </li>
              <li>
                <Link href="#">Guides</Link>
              </li>
              <li>
                <Link href="#">Workspace</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Copyright © 2024 Niyokta. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
