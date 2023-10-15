"use client";

import ReactPlayer from "react-player";
type Props = {
  src: string;
};

export default function VideoPlayer({ src }: Props) {
  return (
    <div className="md:aspect-video">
      <ReactPlayer controls url={src} width={"100%"} height={"100%"} />
    </div>
  );
}
