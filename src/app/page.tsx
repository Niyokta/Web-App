'use client';
import Link from "next/link";
import Footer from "@/components/general/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <  >
      <div className="flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-[600px] md:p-16 p-8 bg-[#FFFBF3]">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 p-4 text-center  md:text-left md:ml-8 ">
          <p className="text-blue-600 uppercase text-sm font-semibold mb-2"> Find and Hire Expert Freelancers </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Rise Above, Excel in Freelancing
          </h1>
          <p className="text-gray-700 mb-6 text-lg">
          Find the best freelancers to take your business to new heights. Get started now and redefine your work experience!
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/auth/signin">
              <button className="px-2 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-lg shadow-md transition">
                Get Started
              </button>
            </Link>
            <Link href="/">
              <button className="px-2 py-2 md:px-6 md:py-3 ml-4 border border-blue-600 text-blue-600 hover:bg-blue-100 rounded-lg shadow-md transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full  md:w-1/2 flex justify-center p-4">
          {/* <img
            className="w-full max-w-md sm:max-w-lg"
            src="/images/landing.png"
            alt="Illustration"
          /> */}
          <Image alt="image here" src="/images/landing.png" width={500} height={500} className="w-full  md:w-1/2 flex justify-center p-4" />
        </div>
        
      </div>
      <Footer />
    </>
  );
}
