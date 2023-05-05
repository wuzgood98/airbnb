"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useFavorite } from "@/hooks";
import { SafeUser } from "@/types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <button
      type="button"
      aria-label="Add listing to favorite listings"
      onClick={toggleFavorite}
      className="relative transition-opacity hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="absolute -right-[2px] -top-[2px] fill-white"
      />
      <AiFillHeart
        size={24}
        className={`${
          hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"
        } transition-colors duration-200`}
      />
    </button>
  );
};

export default HeartButton;
