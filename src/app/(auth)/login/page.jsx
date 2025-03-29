'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if(resp.status === 200){
      router.push('/')
    }
  };
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
        <form action="" onSubmit={handleLogin}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-left">Email</legend>
            <input
              name="email"
              type="email"
              className="input  w-full"
              placeholder="Your Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-left">Password</legend>
            <input
              name="password"
              type="password"
              className="input  w-full"
              placeholder="Enter Your Password"
            />
          </fieldset>
          <button type="submit" className="btn btn-primary text-white w-full mt-6">
            Login
          </button>
        </form>
        <p>Or Login With</p>
        <div className="flex gap-4 justify-center">
          <FaFacebook className="text-2xl" />
          <FaLinkedin className="text-2xl" />
          <FaGithub className="text-2xl" />
        </div>
        <p>
          Don't have an account?{" "}
          <Link href={"/signup"} className="text-primary">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
