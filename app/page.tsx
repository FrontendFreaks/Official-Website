import { Faq } from "@/components/faq";
import Tracks from "@/components/tracks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between mb-10">
      <section
        className="min-h-[80vh] w-full bg-contain bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url("/background.svg")`,
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="text-5xl font-bold text-slate-700">
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
          <p className="max-w-md">
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>
          <div className="flex gap-4">
            <Button variant="secondary">Join Community</Button>
            <Button>Join Mentorship</Button>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center gap-40 bg-amber-100/20 px-20 pt-10 md:my-20">
        <Image
          src="/bg.svg"
          alt="girl working on a laptop"
          width={500}
          height={500}
          className="-mb-10"
        />
        <div className="max-w-md flex flex-col gap-10">
          <h4 className="md:text-5xl font-bold text-slate-700">
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
          className="py-20 px-60 rounded-xl text-white text-center justify-center items-center flex flex-col bg-contain bg-no-repeat"
        >
          <h5 className="md:text-4xl font-bold">Subscribe to our newsletter</h5>
          <p className="text-sm text-slate-100 mt-2">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <div className="flex gap-2 bg-slate-100 rounded-full p-1 mt-4 text-black">
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
