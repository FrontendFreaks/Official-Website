import React from "react";
import { Button } from "../ui/button";

type Props = {};

export default function SiteFooter({}: Props) {
  return (
    <footer className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <a href="/" className="text-gray-700 hover:text-gray-900 mr-4">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-gray-900 mr-4">
            About
          </a>
          <Button className="rounded-full">Mentorship</Button>
          <a
            href="/features"
            className="text-gray-700 hover:text-gray-900 mr-4 ml-4"
          >
            Features
          </a>
          <a href="/join" className="text-gray-700 hover:text-gray-900 mr-4">
            Join
          </a>
        </div>
      </div>
    </footer>
  );
}
