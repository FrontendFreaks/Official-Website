import { Faq } from "@/components/faq";
import Tracks from "@/components/tracks";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between mb-10">
      <section
        className="md:min-h-[80vh] min-h-[50vh] w-full md:bg-contain bg-cover bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url("/background.svg")`,
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="md:text-5xl text-3xl font-bold text-slate-700 dark:text-white">
            <h1>
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Unleash
              </span>{" "}
              Your
            </h1>
            Frontend{" "}
            <span className="bg-gradient-to-r from-red-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              Superpowers
            </span>
          </div>
          <p className="max-w-md md:text-lg text-xs">
            Unlocking the Power of Stunning Interfaces: Join a Thriving
            Community Led by an Exceptional Frontend Developer.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://discord.com/invite/vee94km4Wh"
              target="_blank"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              Join Community
            </Link>
            <Link href="/batch" className={cn(buttonVariants())}>
              Join Mentorship
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full flex md:flex-row flex-col justify-center md:gap-40 gap-20 dark:bg-slate-100 rounded bg-amber-100/20 md:px-20 md:pt-10 py-10 px-5 md:my-20">
        <Image
          src="/bg.svg"
          alt="girl working on a laptop"
          width={500}
          height={500}
          className="-mb-10"
        />
        <div className="max-w-md flex flex-col gap-10">
          <h4 className="md:text-5xl text-2xl font-bold text-slate-700">
            Premium{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Learning
            </span>{" "}
            Experience
          </h4>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Image
                src="/icons/learn.svg"
                alt="learn"
                width={40}
                height={40}
              />
              <div>
                <p className="font-bold md:text-xl dark:text-slate-600">
                  Learn
                </p>
                <p className="text-sm text-slate-500">
                  Master HTML , CSS ,Git and Javascript
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src="/icons/build.svg"
                alt="learn"
                width={40}
                height={40}
              />
              <div>
                <p className="font-bold md:text-xl dark:text-slate-600">
                  Build
                </p>
                <p className="text-sm text-slate-500">
                  Built Projects using React , Redux and Next Js
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image src="/icons/hire.svg" alt="learn" width={40} height={40} />
              <div>
                <p className="font-bold md:text-xl dark:text-slate-600">Hire</p>
                <p className="text-sm text-slate-500">
                  Prepare Yourself for Interviews and Get Hired
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tracks section */}
      <Tracks />
      <Faq />
    </main>
  );
}
