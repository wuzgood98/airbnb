"use client";

import { IconType } from "react-icons";

type CategoryInputProps = {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
};

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <button
      type="button"
      aria-label="Choose a category"
      onClick={() => onClick(label)}
      className={`rounded-xl border-2 p-4 flex flex-col gap-3 w-full hover:border-black transition
        ${selected ? "border-black" : "border-neutral-200"}`}
    >
      <Icon size={30} />
      <span className="font-semibold">{label}</span>
    </button>
  );
};

export default CategoryInput;
