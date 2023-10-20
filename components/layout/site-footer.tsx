import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { SocialConfig } from "@/types";


interface FooterProps {
  items?: SocialConfig[];
}

export default function SiteFooter({items}: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-[#161D29] pt-10">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10">
        <div className="flex md:gap-10 gap-5">
          {
            items?.map((item, index) => <Link key={index} href={item.href} target="_blank" rel="noreferrer">
            <item.iconName className="h-9 w-9 hover:text-[#8fa0be] dark:hover:text-[#30405c]"/>
           
            <span className="sr-only">{item.title}</span>
          </Link>)
          }
        </div>

        <div>
        <Link
              href="https://discord.com/invite/vee94km4Wh"
              target="_blank"
              className={cn(buttonVariants({variant: "rounded"}))}
            >
              Join Community
            </Link>
        </div>

        <div className="flex items-center justify-center md:gap-8 gap-4  dark:text-white text-gray-700">
          <a
            href="/"
            className={cn(
              "font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Home
          </a>
          <a
            href="/batch/learn/html/basic"
            className={cn(
              "font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Learn
          </a>

          <a
            href="/batch/dsa/loops"
            className={cn(
              "font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            DSA in JS
          </a>

          <a
            href="/batch/build/react/fundamentals"
            className={cn(
              "font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Build
          </a>
          <a
            href="/batch/hire/hire"
            className={cn(
              " font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Hire
          </a>
          <a
            href="/docs"
            className={cn(
              " font-normal transition-colors hover:text-foreground/70 sm:text-md text-foreground/100"
            )}
          >
            Docs
          </a>
        </div>
      </div>

      <div>
        <p className="bg-[#161D29] dark:bg-gray-100 py-6 mt-10 text-white dark:text-gray-700 text-center">© FrontendFreaks. All rights reserved</p>
      </div>
    </footer>
  );
}
