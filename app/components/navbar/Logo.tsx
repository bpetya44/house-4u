"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src="/images/logo.svg"
      alt="House 4U Logo"
      className="hidden md:block cursor-pointer"
      width={100}
      height={100}
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;