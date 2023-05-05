"use client";
import { SafeUser } from "@/types";
import { Categories, Container, Logo, Search, UserMenu } from "@/components";
import React from "react";

type NavbarProps = {
  currentUser?: SafeUser | null;
};

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};
export default Navbar;
