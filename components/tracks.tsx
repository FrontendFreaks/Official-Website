import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import styles from "../styles/tracks.module.css"; // Import the CSS module

function TrackCard({ title, description, imageSrc, linkHref }) {
  return (
      <div className="flex flex-col gap-3 items-center border p-4 rounded-lg">

        <div className={styles["image-container"]}>

          <Link href={linkHref}>

            <Image
                src={imageSrc}
                alt={title}
                width={250}
                height={250}
                className="rounded bg-white"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-md text-slate-600 max-w-md dark:text-white">
            {description}
          </p>
        </div>
        <Link href={linkHref} className={cn(buttonVariants(), "rounded-full px-8 py-2 mt-4")}>
          Join
        </Link>
      </div>
  );
}

export default function Tracks() {
  const trackData = [
    {
      title: "Build Your Foundation",
      description:
          "Make your foundation strong by learning HTML, CSS, JS, Git, and GitHub. Join this batch if you want to make your foundation as strong as concrete.",
      imageSrc: "/learn_img.svg",
      linkHref: "/batch/learn/html/basic",
    },
    {
      title: "DSA In Javascript",
      description:
          "Enroll for this batch to ace DSA skills with javascript, enhancing your skills for job success.",
      imageSrc: "/dsa_in_javascript.svg",
      linkHref: "/batch/dsa/loops",
    },
    {
      title: "Build Projects",
      description:
          "Build the project with the latest technologies like React, Redux, and Next.js. Join this batch if you want to be a part of it.",
      imageSrc: "/build_img.svg",
      linkHref: "/batch/build/react/fundamentals",
    },
    {
      title: "Get Hired",
      description:
          "Enroll for this batch to ace interviews with tips, tricks, and mock sessions, enhancing your skills for job success.",
      imageSrc: "/hire_img.svg",
      linkHref: "/batch/hire/hire",
    },
  ];

  return (
      <section className="text-center md:my-20 my-10">
        <h4 className="md:text-3xl text-xl text-black font-bold dark:text-white">
          Our Batches
        </h4>
        <p>Master Frontend Development with Frontend Freaks</p>

        <div className="flex gap-6 mt-8 md:flex-row flex-col">
          {trackData.map((track, index) => (
              <TrackCard key={index} {...track} />
          ))}
        </div>
      </section>
  );
}
