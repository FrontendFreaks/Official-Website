import { allBatches } from "@/.contentlayer/generated";
import { Mdx } from "@/components/markdown/mdx";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
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
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <Mdx code={batch.body.code} />
        <hr className="my-4 md:my-6" />
        {/* <DocsPager doc={doc} /> */}

        {/* <div>
          {docs.map((item, index) => (
            <div key={index} className={cn("pb-8")}>
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
                {item.title}
              </h4>
              {item.items ? (
                <div>
                  {item.items.map((item) => (
                    <div>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>{item.title}</AccordionTrigger>
                          <AccordionContent>
                            {item.items?.map((item) => (
                              <div>{item.title}</div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div> */}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          table of contents
        </div>
      </div>
    </main>
  );
}
