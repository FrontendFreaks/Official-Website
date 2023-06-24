import React from "react";
import MainNav from "./main-nav";
import { navConfig } from "@/config/nav";

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav items={navConfig} />
      </div>
    </header>
  );
}
