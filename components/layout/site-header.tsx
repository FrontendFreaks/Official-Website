import React from "react";
import MainNav from "./main-nav";
import { navConfig } from "@/config/nav";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur p-3">
      <div className="container flex h-14 items-center md:gap-6 gap-14">
        <MainNav items={navConfig} />
        <ModeToggle />
        <Button className="rounded-full">Mentorship</Button>
      </div>
    </header>
  );
}
