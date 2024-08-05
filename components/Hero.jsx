import { SiGooglegemini } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero bg-white min-h-screen py-12">
      <div className="hero-content text-center flex flex-col gap-10">
        <div className="max-w-lg">
          <div className="flex justify-center">
            <h3 className="flex justify-center items-center gap-1 w-[160px] py-1 rounded-full text-sm border border-red-500 text-red-600">
              Powered by <SiGooglegemini /> Gemini
            </h3>
          </div>
          <h1 className="text-7xl font-bold">
            Your Dream Trip, Planned by{" "}
            <span className="text-red-500">TripAI</span>
          </h1>
          <p className="py-6 text-[1.2rem]">
            Enjoy a Smooth and Custom Travel Experience 😎 – Get Your Personalized
            Itineraries Just for You with Ease.
          </p>
          <Link href="/create-trip" className="btn bg-black text-white hover:bg-black/90">Get Started Now - Free</Link>

        </div>
          <div className="bg-red-400 w-full container">
            <Image src="/images/temp-exam.webp" width={1300} height={600} alt="" className="" />
          </div>
      </div>
    </div>
  );
};

export default Hero;
