import React from "react";
import { Button } from "../ui/button";

type Props = {};

export default function SiteFooter({}: Props) {
  return (
    <footer className="bg-gray-100 dark:bg-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center dark:text-white text-gray-700">
          <a href="/" className=" hover:text-gray-900 mr-4">
            Home
          </a>
          <a
            href="/batch/learn/html/basic"
            className="hover:text-gray-900 mr-4"
          >
            Learn
          </a>
          <a href="https://discord.com/invite/vee94km4Wh" target="_blank">
            <Button className="rounded-full">Mentorship</Button>
          </a>
          <a
            href="/batch/build/react/fundamentals"
            className="hover:text-gray-900 mr-4 ml-4"
          >
            Build
          </a>
          <a href="/batch/hire/hire" className="hover:text-gray-900 mr-4">
            Hire
          </a>
        </div>
      </div>
    </footer>
  );
}
