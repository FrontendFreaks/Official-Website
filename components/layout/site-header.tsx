import React from "react";
import MainNav from "./main-nav";
import { navConfig } from "@/config/nav";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="sticky top-0 z-40 w-full p-3 bg-background/95 backdrop-blur">
      <div className="container flex items-center px-0 h-14 md:gap-6 gap-9 md:px-8">
        <MainNav items={navConfig} />
        <ModeToggle />
        <a href="https://discord.com/invite/vee94km4Wh" target="_blank">
          {/* <Button className="hidden rounded-full md:inline-block">
            Mentorship
          </Button> */}
        </a>
      </div>
    </header>
  );
}
