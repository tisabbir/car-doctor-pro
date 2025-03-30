import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";

const SocialSignin = () => {
  return (
    <div>
      <div className="flex gap-4 justify-center">
        <FaFacebook className="text-2xl" />
        <FaLinkedin className="text-2xl" />
        <FaGithub className="text-2xl" />
        <FaGoogle className="text-2xl" />
      </div>
    </div>
  );
};

export default SocialSignin;
