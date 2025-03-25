import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 my-24 items-center">
      <div>
        <Image
          src="/assets/images/login/login.svg"
          alt="login image"
          width={400}
          height={700}
        />
      </div>
      <div className="border p-20 rounded-lg text-center space-y-4">
        <h1 className="text-4xl text-center">Login</h1>
        <form action="">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-left">Email</legend>
          <input type="email" className="input  w-full" placeholder="Your Email" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-left">Password</legend>
          <input type="password" className="input  w-full" placeholder="Enter Your Password" />
        </fieldset>
        <button className="btn btn-primary text-white w-full mt-6">Login</button>
        </form>
        <p>Or Login With</p>
        <div className="flex gap-4 justify-center">
            <FaFacebook className="text-2xl" />
            <FaLinkedin className="text-2xl" />
            <FaGithub className="text-2xl" />
        </div>
        <p>Don't have an account? <Link href={'/signup'} className="text-primary">Sign Up</Link> </p>
      </div>
    </div>
  );
};

export default page;
