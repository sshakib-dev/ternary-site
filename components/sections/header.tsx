"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import navbarData from "@/schema/navbar.json";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full pt-3">
      <div className="flex flex-row w-full justify-between px-5 md:px-10  py-3 items-center">
        {/* Logo */}
        <Link href="/" className="pt-3">
          <Image
            src="/ternary_combination_mark_white.svg"
            width={100}
            height={30}
            alt="Ternary Logo"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl bg-transparent hover:bg-transparent text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu />
        </button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-6 font-medium text-sm">
            {navbarData.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className="hover:bg-muted py-2 px-4 rounded-lg">
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Navigation with Animation */}
      <div
        className={`transition-all duration-1200  ease-in-out mt-3  ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:hidden bg-muted`}
      >
        <NavigationMenu className="mt-3">
          <NavigationMenuList className="flex flex-col items-start gap-4 px-10 pb-4 font-medium text-sm">
            {navbarData.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className="hover:text-gray-400 py-2 px-4 rounded-lg">
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
