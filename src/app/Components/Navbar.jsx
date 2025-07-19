"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathRouter = usePathname();

  if (!pathRouter.includes("dashboard")) {
    return (
      <div>
        <nav className="w-full py-6 bg-blue-400 flex justify-between px-10">
          <ul className="flex justify-center gap-6 items-center font-bold text-white">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/meals">
              <li>Meals</li>
            </Link>
            <Link href="/posts">
              <li>Posts</li>
            </Link>
          </ul>
          <div>
            <Link href="/login" className="px-4 py-2 rounded border">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 rounded border ml-2">
              Register
            </Link>
          </div>
        </nav>
      </div>
    );
  } else {
    <></>;
  }
};

export default Navbar;
