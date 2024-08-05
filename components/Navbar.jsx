"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="navbar container mx-auto bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
              <li>
                <a>Feedback</a>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl font-bold">
            <Image src="/images/logo.webp" width={200} height={200} className="w-[40px] h-[40px]" alt="" />
            TripAI
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>FAQs</a>
            </li>
            <li>
              <a>Feedback</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost bg-black text-white hover:bg-black/90">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
