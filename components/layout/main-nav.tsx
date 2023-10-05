"use client";

import Link from "next/link";
import { Icons } from "../icons";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { NavItem } from "@/types";
import { useState } from "react";

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10 w-full">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <span className="hidden text-lg font-bold sm:inline-block">
          Frontend Freaks 
        </span>
      </Link>

      {items?.length ? (
        <div className="flex gap-6">
          <nav className="hidden md:flex gap-6">
            {items?.map((item, index) => {
              return (
                <Link
                  href={item.href}
                  key={index}
                  className={cn(
                    "flex items-center font-medium transition-colors hover:text-foreground/80 sm:text-sm capitalize text-foreground/60"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Frontend Freaks</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
