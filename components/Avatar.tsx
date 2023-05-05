"use client";
import React from "react";
import Image from "next/image";

type AvatarProps = {
  src: string | null | undefined;
};

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      height={30}
      width={30}
      alt="User's Avatar"
      src={src || "/images/placeholder.jpg"}
      priority
    />
  );
};
export default Avatar;
