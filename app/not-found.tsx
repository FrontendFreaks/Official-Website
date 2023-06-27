import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex-col flex">
      <main className="flex-1 flex justify-center items-center">
        <section className="container gap-4 flex flex-col items-center text-center">
          <Image
            src="/error.svg"
            width={250}
            height={250}
            alt="Rocket Crashed"
            priority
          />
          <h1 className="text-2xl font-bold leading-[1.1] tracking-tighter text-foreground sm:text-3xl md:text-5xl">
            Page not found...
          </h1>
          <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-lg sm:leading-8 md:text-lg">
            The Page you&apos;re searching for does not exist.
          </p>
          <Link
            className={buttonVariants({
              variant: "ghost",
              className: "w-fit mt-1 md:mt-2",
            })}
            href="/"
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
        </section>
      </main>
    </div>
  );
};

export default PageNotFound;
