'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const page = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    };
  
    try {
      const resp = await fetch("http://localhost:3000/signup/api", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json" // Fix: Capital 'C' in Content-Type
        }
      });
  
      const result = await resp.json(); // Always parse the JSON response
      console.log("Server response:", result); // Debugging
  
      if (!resp.ok) {
        throw new Error(result.error || "Failed to sign up");
      }
  
      alert("Signup successful!");
      e.target.reset();
      
    } catch (error) {
      console.error("Signup failed:", error);
      alert(`Error: ${error.message}`); // Show actual error to user
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
        <h1 className="text-4xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} action="">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-left">Name</legend>
          <input name="name" type="text" className="input w-full" placeholder="Your Name" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-left">Email</legend>
          <input name="email" type="email" className="input  w-full" placeholder="Your Email" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-left">Confirm Email</legend>
          <input type="email" className="input  w-full" placeholder="Confirm Your Email" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-left">Password</legend>
          <input name="password" type="password" className="input  w-full" placeholder="Password" />
        </fieldset>
        <button type="submit" className="btn btn-primary text-white w-full mt-6">Sign Up</button>
        </form>
        <p>Or Sign Up With</p>
        <div className="flex gap-4 justify-center">
            <FaFacebook className="text-2xl" />
            <FaLinkedin className="text-2xl" />
            <FaGithub className="text-2xl" />
        </div>
        <p>Already have an account? <Link href={'/login'} className="text-primary">Login</Link> </p>
      </div>
    </div>
  );
};

export default page;
