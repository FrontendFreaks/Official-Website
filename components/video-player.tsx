"use client";

import ReactPlayer from "react-player";
type Props = {
  src: string;
};

export default function VideoPlayer({ src }: Props) {
  return <ReactPlayer controls url={src} />;
}
