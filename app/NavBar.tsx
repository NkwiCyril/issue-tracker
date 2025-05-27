'use client';

import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import { usePathname } from "next/navigation";

const NavBar = () => {
  // get the current pathname
  const currentPath = usePathname();
  const links = [
    { name: "Dashboard", href: "/" },
    { name: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 items-center p-4 mb-5 border-b">
      <Link href="/">
        <AiFillBug size={20} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item, index) => {
          return (
            // dynamically change styling according to current pathname
            <li
              className={classnames({
                "text-zinc-900": item.href === currentPath,
                "text-zinc-500": item.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
              key={index}
            >
              <Link href={item.href} key={index}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
