"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
    border-2
    border-gray-200
    w-full
    md:w-auto
    rounded-full
    shadow-sm
    hover:shadow-md
    transition
    cursor-pointer

  "
    >
      <div
        className="
        flex
        flex-row
        items-center
        justify-between
       
    "
      >
        <div
          className="
          text-sm
          font-semibold
          px-6
        "
        >
          Anywhere
        </div>
        <div
          className="
          hidden
          sm:block
          text-sm
          font-semibold
          px-6
          border-x-2
          flex-1
          text-center
        "
        >
          Any week
        </div>
        <div
          className="
        text-sm
         pl-6
         pr-2
         text-gray-600
         flex
         flex-row
          items-center
          gap-3
         "
        >
          <div className="hidden sm:block">Add Guests</div>
          <div
            className="
            p-2
            bg-purple-500
            rounded-full
            text-white
            hover:bg-purple-600
            m-1
          "
          >
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;