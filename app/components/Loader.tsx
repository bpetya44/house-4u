"use client";

import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
        h-[70vh]
        flex
        flex-col
        justify-center
        items-center        
        "
    >
      <DotLoader color="#a855f7" size={100} />
    </div>
  );
};

export default Loader;
