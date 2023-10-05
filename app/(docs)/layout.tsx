import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { DocSideNav } from "@/components/layout/docs-nav";
import MainNav from "@/components/layout/main-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { DocumentationConfig } from "@/config/docs";
import { docsConfig } from "@/config/sidebar";
import Link from "next/link";

interface BatchRootLayoutProps {
  children: React.ReactNode;
}

const CourseRootLayout = ({ children }: BatchRootLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 justify-between sm:space-x-0">
          <MainNav items={docsConfig.mainNav}>
            <DocSideNav items={DocumentationConfig} />
          </MainNav>

          <div className="flex md:flex-1 items-center space-x-4 sm:justify-end">
            <nav className="flex space-x-4 items-center">
              <div className=" px-3 hidden md:flex">
                <CommandMenu />
              </div>
              <ModeToggle/>
              <Link href="https://github.com/FrontendFreaks" target="_blank" rel="noreferrer">
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
    </div>
  );
};

export default CourseRootLayout;
