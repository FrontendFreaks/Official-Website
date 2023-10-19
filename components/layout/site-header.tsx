import React from "react";
import MainNav from "./main-nav";
import { navConfig } from "@/config/nav";
import { Button, buttonVariants } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur p-3">
      <div className="container flex h-14 items-center md:gap-6 gap-9 md:px-8 px-0">
        <MainNav items={navConfig} />
        <ModeToggle />
        
         <Link
              href="https://discord.com/invite/vee94km4Wh"
              target="_blank"
              className={`${cn(buttonVariants({ variant: "rounded" })) } hidden w-0 md:flex md:min-w-fit`}
            >
              Join Community
            </Link>
      </div>
    </header>
  );
}
