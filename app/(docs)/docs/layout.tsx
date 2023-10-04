import { DocSideNav } from "@/components/layout/docs-nav";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DocumentationConfig } from "@/config/docs";
import React from "react";

interface CourseRootLayoutProps {
  children: React.ReactNode;
}

const CourseRootLayout = ({ children }: CourseRootLayoutProps) => {
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10" >
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r">
        <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
          <DocSideNav items={DocumentationConfig} />
        </ScrollArea>
      </aside>
      {children}
    </div>
  );
};

export default CourseRootLayout;
