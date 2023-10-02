"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <>
      <Button
        variant="outline"
        className="px-2 rounded-full"
        onClick={toggleTheme}
      >
        <div className="flex items-center">
          {isDarkMode ? (
            <>
              <SunIcon className="h-[1.2rem] w-[1.2rem]" />
              <div
                className={`w-5 h-5 ml-1 mr-1 rounded-full shadow-[0_0_4px_0px_rgba(0,0,0,0.3)] transform translate-x-1 bg-white dark:bg-gray-600 transition-all`}
              />
            </>
          ) : (
            <>
              <div
                className={`w-5 h-5 rounded-full shadow-[0_0_4px_0px_rgba(0,0,0,0.3)] transform translate-x-0 bg-white dark:bg-gray-600 transition-transform`}
              />
              <MoonIcon className="h-[1.2rem] w-[1.2rem] ml-2" />
            </>
          )}
        </div>
      </Button>
    </>
  );
}
