import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Services",
      path: "/services"
    },
    {
      title: "Blog",
      path: "/blog"
    },
    {
      title: "Contact",
      path: "/contact"
    },

  ]
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {
              navItems.map((item)=>(
                <Link className="hover:text-primary" href={item.path} key={item.path}>{item.title}</Link>
              ))
            }
            </div>
          </div>
          <Link href="/">
            <Image src="/assets/logo.svg" alt="logo" height={50} width={100} />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="flex gap-6">
            {
              navItems.map((item)=>(
                <Link className="hover:text-primary" href={item.path} key={item.path}>{item.title}</Link>
              ))
            }
          </div>
        </div>
        <div className="navbar-end gap-6 items-center">
        <IoBagOutline className="text-2xl" />
        <IoIosSearch className="text-2xl" />
          <Link href="#">
            <button className="btn text-primary border-2 border-primary">Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;