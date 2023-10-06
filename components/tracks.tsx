import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {};

export default function Tracks({}: Props) {
  return (
    <section className="text-center md:my-20 my-10">
      <h4 className="md:text-3xl text-xl text-black font-bold dark:text-white">
        Our Batches
      </h4>
      <p>Master the Frontend Development with Frontend Freaks</p>

      <div className="flex gap-6 mt-8 md:flex-row flex-col">
        <div className="flex flex-col gap-3 items-center border p-4 rounded-lg">
          <Image
            src="/learn_img.svg"
            alt="learn"
            width={250}
            height={250}
            className="rounded bg-white"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold ">Build Your Foundation</h3>
            <p className="text-md text-slate-600 max-w-md dark:text-white">
              Make your foundation strong by learning HTML, CSS, JS, Git, and
              GitHub. Join this batch if you want to make your foundation as
              strong as concrete.
            </p>
          </div>
          <Link
            href="/batch/learn/html/basic"
            className={cn(buttonVariants(), "rounded-full px-8 py-2 mt-4")}
          >
            Join
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-center border p-4 rounded-lg">
          <Image
            src="/dsa_in_javascript.svg"
            alt="learn"
            width={250}
            height={250}
            className="rounded bg-white"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold ">DSA In Javascript</h3>
            <p className="text-xs text-slate-600 max-w-xs dark:text-white">
              Enroll for this batch to ace DSA skills with javascript, enhancing
              your skills for job success.
            </p>
          </div>
          <Link
            href="/batch/dsa/loops"
            className={cn(buttonVariants(), "rounded-full px-8 py-2 mt-4")}
          >
            Join
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-center border p-4 rounded-lg">
          <Image
            src="/build_img.svg"
            alt="learn"
            width={250}
            height={250}
            className="rounded bg-white"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold ">Build Projects</h3>
            <p className="text-md text-slate-600 max-w-md dark:text-white">
              Build the project with the latest technologies like React, Redux,
              and Next.js. Join this batch if you want to be a part of it.
            </p>
          </div>
          <Link
            href="/batch/build/react/fundamentals"
            className={cn(buttonVariants(), "rounded-full px-8 py-2 mt-4")}
          >
            Join
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-center border p-4 rounded-lg">
          <Image
            src="/hire_img.svg"
            alt="learn"
            width={250}
            height={250}
            className="rounded bg-white"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold ">Get Hired</h3>
            <p className="text-md text-slate-600 max-w-md dark:text-white">
              Enroll for this batch to ace interviews with tips, tricks, and
              mock sessions, enhancing your skills for job success.
            </p>
          </div>
          <Link
            href="/batch/hire/hire"
            className={cn(buttonVariants(), "rounded-full px-8 py-2 mt-4")}
          >
            Join
          </Link>
        </div>
      </div>
    </section>
  );
}
