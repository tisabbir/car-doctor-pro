import { signIn } from "next-auth/react";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const SocialSignin = () => {
  const handleSocialSignIn = async (provider) => {
    const resp = await signIn(provider)
  };
  return (
    <div>
      <div className="flex gap-4 justify-center">
        <FaFacebook className="text-2xl" />
        <FaLinkedin className="text-2xl" />
        <button onClick={()=>handleSocialSignIn("google")}>
          <FaGoogle className="text-2xl" />
        </button>
        <button onClick={()=>handleSocialSignIn("github")}>
          <FaGithub className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialSignin;
