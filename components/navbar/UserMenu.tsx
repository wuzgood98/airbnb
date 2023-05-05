"use client";
import { useLoginModal, useRegisterModal, useRentModal } from "@/hooks";
import { SafeUser } from "@/types";
import { Avatar, MenuItem } from "@/components";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

type UserMenuProps = {
  currentUser?: SafeUser | null;
};

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openRentModal = useCallback(() => {
    if (!currentUser) {
      return loginModal.openModal();
    }

    rentModal.openModal();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <button
          type="button"
          aria-label="Open rent modal"
          onClick={openRentModal}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition"
        >
          Airbnb your home
        </button>
        <button
          type="button"
          aria-label="Open user menu"
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <span className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem
                  label="Airbnb your home"
                  onClick={rentModal.openModal}
                />
                <hr />
                <MenuItem label="Logout" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={loginModal.openModal} />
                <MenuItem label="Sign up" onClick={registerModal.openModal} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
