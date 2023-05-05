import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      aria-label="Go back to the homepage"
      title="Go back to the homepage"
      className="hidden md:block"
    >
      <Image
        src="/images/logo.png"
        height={40}
        width={128}
        className="h-auto w-auto"
        alt="Airbnb Logo"
        priority
      />
    </Link>
  );
};
export default Logo;
