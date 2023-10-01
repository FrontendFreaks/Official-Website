import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {};

export default function SiteFooter({}: Props) {
  return (
    <footer className="bg-gray-100 dark:bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center dark:text-white text-gray-700">
          <a
            href="/"
            className={cn(
              "mr-4 font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Home
          </a>
          <a
            href="/batch/learn/html/basic"
            className={cn(
              "mr-4 font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Learn
          </a>
          <a href="https://discord.com/invite/vee94km4Wh" target="_blank">
            <Button className="rounded-full">Mentorship</Button>
          </a>
          <a
            href="/batch/build/react/fundamentals"
            className={cn(
              "mr-4 ml-4 font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Build
          </a>
          <a
            href="/batch/hire/hire"
            className={cn(
              "font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Hire
          </a>
        </div>
      </div>
    </footer>
  );
}
