"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
    rounded-xl
    border-2
    border-purple-200
    p-4
    flex
    flex-col
    items-center
    gap-3
    hover:border-purple-700
    hover:bg-purple-50
    transition
    cursor-pointer
    ${selected ? "bg-purple-100" : "border-transparent"}
    `}
    >
      <Icon size={32} />
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
