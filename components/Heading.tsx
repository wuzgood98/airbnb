"use client";
import React from "react";

type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2 className="mt-2 font-light text-neutral-500">{subtitle}</h2>
    </div>
  );
};

export default Heading;
