import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type Props = {};

export default function AnnouncementSection({}: Props) {
  return (
    <footer className="dark:bg-gray-100 bg-[#161D29] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center text-center text-sm md:text-lg font-bold text-white dark:text-gray-700">
          LEARN AND BUILD EVERYTHING FOR <span className="text-red-400 ml-1 mr-3"> FREE </span> 🚀
        </div>
      </div>
    </footer>
  );
}
