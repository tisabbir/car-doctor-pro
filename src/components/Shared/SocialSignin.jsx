"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const SocialSignin = () => {
  const router = useRouter();
  const session = useSession();
  const handleSocialSignIn = (provider) => {
    const resp = signIn(provider, {redirect: false});
    
  };

  if (session?.status === "authenticated") {
    router.push("/");
  }
  return (
    <div>
      <div className="flex gap-4 justify-center">
        <FaFacebook className="text-2xl" />
        <FaLinkedin className="text-2xl" />
        <button onClick={() => handleSocialSignIn("google")}>
          <FaGoogle className="text-2xl" />
        </button>
        <button onClick={() => handleSocialSignIn("github")}>
          <FaGithub className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialSignin;
