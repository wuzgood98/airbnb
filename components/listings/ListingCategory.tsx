"use client";

import { IconType } from "react-icons";

interface CategoryViewProps {
  icon: IconType;
  label: string;
  description: string;
}

const CategoryView: React.FC<CategoryViewProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{label}</p>
          <p className="font-light text-neutral-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
