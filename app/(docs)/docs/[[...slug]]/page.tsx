import { allDocs } from "@/.contentlayer/generated";
import { DocsHeader } from "@/components/docs-header";
import { Mdx } from "@/components/markdown/mdx";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string[];
  };
};

async function getDocFromParams(params: any) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export default async function page({ params }: Props) {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsHeader title={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
      </div>
    </main>
  );
}
