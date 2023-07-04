import { Icons } from "../icons";

type Props = {
  link: string;
  emoji?: string;
  text: string;
};

export default function HeadingWithLink({ link, emoji, text }: Props) {
  return (
    <div className="flex items-center gap-3 mt-4">
      <h3 className="text-2xl font-medium">
        {emoji} {text}
      </h3>
      <a href={link}>
        <Icons.link className="h-4 w-6" />
      </a>
    </div>
  );
}
4;
