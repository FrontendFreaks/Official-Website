import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type Props = {};

export default function Tracks({}: Props) {
  return (
    <section className="text-center md:my-20">
      <h4 className="md:text-3xl text-black font-bold">Our Tracks</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, autem.
      </p>

      <div className="flex gap-6 mt-8">
        <div className="flex flex-col gap-3 items-center border p-4 rounded-lg">
          <Image src="/learn_img.svg" alt="learn" width={250} height={250} />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold ">Learn The Latest Skills</h3>
            <p className="text-xs text-slate-600 max-w-xs">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old. It has roots
              in a BC, making it over 2000 years old.
            </p>
          </div>
          <Button className="rounded-full px-8 py-2 mt-4">Join</Button>
        </div>
        <div className="flex flex-col gap-3 items-center border p-4 rounded-lg">
          <Image src="/build_img.svg" alt="learn" width={250} height={250} />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold ">Build Projects</h3>
            <p className="text-xs text-slate-600 max-w-xs">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old. It has roots
              in a BC, making it over 2000 years old.
            </p>
          </div>
          <Button className="rounded-full px-8 py-2 mt-4">Join</Button>
        </div>
        <div className="flex flex-col gap-3 items-center border p-4 rounded-lg">
          <Image src="/hire_img.svg" alt="learn" width={250} height={250} />
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold ">Get Hired</h3>
            <p className="text-xs text-slate-600 max-w-xs">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old. It has roots
              in a BC, making it over 2000 years old.
            </p>
          </div>
          <Button className="rounded-full px-8 py-2 mt-4">Join</Button>
        </div>
      </div>
    </section>
  );
}
