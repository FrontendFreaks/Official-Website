import { Faq } from "@/components/faq";
import Tracks from "@/components/tracks";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
          <div className="md:text-5xl text-3xl font-bold text-slate-700">
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
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>
          <div className="flex gap-4">
            <Link
              href="/"
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

      <section className="w-full flex md:flex-row flex-col justify-center md:gap-40 gap-20 bg-amber-100/20 md:px-20 md:pt-10 py-10 px-5 md:my-20">
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
                <p className="font-bold md:text-xl">Learn</p>
                <p className="text-sm text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                <p className="font-bold md:text-xl">Build</p>
                <p className="text-sm text-slate-500">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Image src="/icons/hire.svg" alt="learn" width={40} height={40} />
              <div>
                <p className="font-bold md:text-xl">Hire</p>
                <p className="text-sm text-slate-500">
                  Lorem ipsum dolor sit amet consectetu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tracks section */}
      <Tracks />
      <Faq />

      {/* newsletter */}
      <section className="w-full rounded-xl h-80 mt-10 flex justify-center items-center">
        <div
          style={{
            backgroundImage: `url("/news_bg.svg")`,
          }}
          className="md:py-20 md:px-60 py-5 px-10 rounded-xl bg-[#4d2c5e] text-white text-center justify-center items-center flex flex-col bg-contain bg-no-repeat"
        >
          <h5 className="md:text-4xl text-2xl font-bold">
            Subscribe to our newsletter
          </h5>
          <p className="md:text-sm text-xs text-slate-100 mt-2">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <div className="flex gap-2 md:flex-row flex-col rounded-sm bg-slate-100 md:rounded-full p-2 md:p-1 mt-4 text-black">
            <Input
              placeholder="Enter your Email "
              className="bg-transparent border-none placeholder:text-slate-400 focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none"
            />
            <Button className="rounded-full">Subscribe</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
