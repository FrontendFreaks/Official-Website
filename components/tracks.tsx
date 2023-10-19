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
                <BatchCard imageSrc="/learn_img.svg" title="Build Your Foundation" description="Make your foundation strong by learning HTML, CSS, JS, Git, and GitHub. Join this batch if you want to make your foundation as strong as concrete." href="/batch/learn/html/basic" />
                <BatchCard imageSrc="/dsa_in_javascript.svg" title="DSA In Javascript" description="Enroll for this batch to ace DSA skills with JavaScript, enhancing your skills for job success." href="/batch/dsa/loops" />
                <BatchCard imageSrc="/build_img.svg" title="Build Projects" description="Build the project with the latest technologies like React, Redux, and Next.js. Join this batch if you want to be a part of it." href="/batch/build/react/fundamentals" />
                <BatchCard imageSrc="/hire_img.svg" title="Get Hired" description="Enroll for this batch to ace interviews with tips, tricks, and mock sessions, enhancing your skills for job success." href="/batch/hire/hire" />
            </div>
        </section>
    );
}

function BatchCard({ imageSrc, title, description, href }) {
    return (
        <div className="flex flex-col gap-3 items-center border p-4 rounded-lg group hover:scale-105 transition-transform">
            <a href={href}>
                <img
                    src={imageSrc}
                    alt="learn"
                    width={250}
                    height={250}
                    className="rounded bg-white batch-card-image"
                />
            </a>
            <div className="flex flex-col gap-2 flex-grow">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-md text-slate-600 max-w-md dark:text-white">
                    {description}
                </p>
            </div>
            <Link
                href={href}
                className={cn(buttonVariants(), "rounded-full px-8 py-2 mt-4")}
            >
                Join
            </Link>
        </div>
    );
}
