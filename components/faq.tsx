import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col gap-6 py-10">
      <h4 className="text-center md:text-4xl font-bold text-slate-600 dark:text-white">
        FAQ
      </h4>

      <div className="grid md:gap-20 md:grid-cols-2 grid-cols-1">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              What is Frontend Freaks?
            </AccordionTrigger>

            <AccordionContent>
              Frontend Freaks is a vibrant community founded by Vishal Rajput,
              dedicated to helping individuals in frontend development. We
              provide resources to learn frontend basics, work on practical
              projects, and stay up-to-date with the latest industry trends.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              What is Frontend Developer Mentorship?
            </AccordionTrigger>
            <AccordionContent>
              Frontend Developer Mentorship is our program at Frontend Freaks
              Community designed to guide newcomers in learning frontend
              development, building real-world projects, and assisting them in
              securing internships and jobs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Is Frontend Developer Mentorship paid?
            </AccordionTrigger>
            <AccordionContent>
              No, our mentorship programs and resources are completely free of
              cost. At Frontend Freaks, we believe in making quality education
              accessible to everyone.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              When can I join?
            </AccordionTrigger>

            <AccordionContent>
              You can join our community at any time! Our courses and resources
              are self-paced, allowing you to learn at your own convenience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              What types of mentorship do you provide?
            </AccordionTrigger>
            <AccordionContent>
              We offer three batches of mentorship. The first batch is perfect
              for beginners, covering HTML, CSS, and JavaScript fundamentals
              through exciting projects. The second batch focuses on mastering
              ReactJS and building real-world projects. The third batch provides
              guidance on job hunting, application strategies, and securing
              referrals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Not sure which batch to join?
            </AccordionTrigger>

            <AccordionContent>
              If you&apos;re confident in your HTML, CSS, and JavaScript skills,
              join batch 2 to learn ReactJS. Otherwise, start with batch 1 to
              establish a solid foundation before diving into ReactJS. If you
              already have impressive skills and projects, join batch 3 to focus
              on job applications. Otherwise, joining batch 2 to build
              real-world projects would be beneficial.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
