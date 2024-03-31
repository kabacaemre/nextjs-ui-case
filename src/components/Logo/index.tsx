"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          src="/svg/logo.svg"
          alt="Logo"
          width={300}
          height={40}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
