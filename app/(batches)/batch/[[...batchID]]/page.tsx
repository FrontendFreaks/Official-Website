import { allBatches } from "@/.contentlayer/generated";
import { Mdx } from "@/components/markdown/mdx";
import { notFound } from "next/navigation";

type Props = {
  params: {
    batchID: string[];
  };
};

async function getDocFromParams(params: any) {
  const slug = params.batchID?.join("/") || "";

  const batch = allBatches.find((batch) => batch.slugAsParams === slug);

  if (!batch) {
    null;
  }

  return batch;
}

export default async function page({ params }: Props) {
  const batch = await getDocFromParams(params);

  if (!batch) {
    notFound();
  }

  return (
    <div>
      <h1>hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quos?
        Necessitatibus minima sit pariatur similique earum dicta deserunt quae
        ipsum, illum dolores incidunt natus doloribus sed numquam mollitia vero
        aliquam!
      </p>
      <Mdx code={batch.body.code} />
    </div>
  );
}
