'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">

      <div className="bg-gray-900 py-8">
        <div className=" px-6 sm:px-12 md:px-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Workreap</h3>
            <p className="text-gray-400 mb-4">
              Our platform offers the best features for freelancers and clients, making it easy to connect, collaborate, and get work done.
            </p>
            <div className="flex gap-4">
              <img src="/images/" alt="App Store" className="w-28" />
              <img src="/images/" alt="Google Play" className="w-28" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Top Rated Categories</h3>
            <ul className="text-gray-400 space-y-2 text-sm md:text-lg">
                <li>📈 Marketing</li>
                <li>🎨 Design</li>
                <li>📱 Mobile Development</li>
                <li>🖥️ Web Development</li>
                <li>📚 Writing</li>
                <li>📹 Video & Animation</li>
                <li>🎤 Music & Audio</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Feel Free to Share Your Question</h3>
            <ul className="text-gray-400 space-y-4 text-sm md:text-lg">
                <li >📧 niyokta@support.com </li>
                <li >📞 +1 234 567 890</li>
                <li>🏢 123, Main Street, New Delhi</li>

            </ul>
          </div>
        </div>


        <div className=" px-6 sm:px-12 md:px-16 mt-8  items-center justify-between text-center">
          <p className="text-gray-400 text-sm">&copy; Copyright All rights reserved. 2024</p>
        </div>
      </div>
    </footer>
  );
}
