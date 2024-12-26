import Link from "next/link";
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Freelance Marketplace</h2>
          <h1 className="text-2xl font-bold">Welcome to Our Website - NIYOKITA</h1>
        <p className="mt-2">Our platform connects freelancers with clients looking for skilled professionals. Whether you're a developer, designer, writer, or any other type of freelancer, you can find projects that match your skills and interests.</p>
        <p className="mt-2">Clients can post projects, receive bids from freelancers, and choose the best candidate for the job. Our secure payment system ensures that freelancers get paid on time and clients only pay for work that meets their standards.</p>
      </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-center">Please sign up or sign in to continue</p>
          <div className="flex gap-4">
          <Link href='/auth/signup'>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Sign Up</button>
          </Link>
          <Link href='/auth/signup'>
            <button className="px-4 py-2 bg-green-500 text-white rounded">Sign In</button>
          </Link>
          </div>
        </div>
  
   </div>
    </>
  );
}
