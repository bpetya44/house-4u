"use client";

import { IconType } from "react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import queryString from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}
const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  //handle click on category
  const handleClick = useCallback(() => {
    //console.log("clicked on category", label);

    //get current query
    let currentQuery = {};
    if (params) {
      //convert to object
      currentQuery = queryString.parse(params.toString());
    }

    //update query with category label
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    //if category is already selected, remove it, otherwise will add it, like a toggle
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    //generate the url with the updated query
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-4 hover:text-purple-700 transition cursor-pointer 
  ${
    selected
      ? "text-purple-700 border-b-purple-700"
      : "text-neutral-500 border-transparent"
  }
  `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
