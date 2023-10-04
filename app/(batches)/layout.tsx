import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import MainNav from "@/components/layout/main-nav";
import { DocsSidebarNav } from "@/components/layout/sidebar-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { navConfig } from "@/config/nav";
import { docsConfig } from "@/config/sidebar";
import Link from "next/link";


interface BatchRootLayoutProps {
  children: React.ReactNode;
}

const CourseRootLayout = ({ children }: BatchRootLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={navConfig}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>

          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
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
