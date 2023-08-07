import { DocsConfig, SidebarNav } from "@/types";

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/batch",
        },
      ],
    },
    {
      title: "Learn Batch",
      items: [
        {
          title: "HTML",
          items: [
            {
              title: "Crash Course",
              href: "/batch/learn/html/basic",
            },
          ],
        },
        
        {
          title: "CSS",
          items: [
            {
              title: "Basic Introduction",
              href: "/batch/learn/css/basic",
            },
            {
              title: "Flex Crash Course",
              href: "/batch/learn/css/flex",
            },
            {
              title: "Grid Crash Course",
              href: "/batch/learn/css/grid",
            },
          ],
        }
        ,
        {
          title: "Git & Github",
          items: [
            {
              title: "Crash Course",
              href: "/batch/learn/github/intro",
            },
          ],
        },
        {
          title: "JavaScript",
          items: [
            {
              title: "Basic Introduction",
              href: "/batch/learn/js/intro",
            },
            {
              title: "DOM Manipulation",
              href: "/batch/learn/js/dom",
            },
            {
              title: "Google Keep Clone",
              href: "/batch/learn/js/google-keep",
            },
            {
              title: "Wack a Mole Game",
              href: "/batch/learn/js/wack-a-mole",
            },
            {
              title: "Async JavaScript",
              href: "/batch/learn/js/github-wrapper",
            },
          ],
        }
      ],
    },
    {
      title: "Build Batch",
      items: [
        {
          title: "React JS",
          items: [
            {
              title: "Fundamentals",
              href: "/batch/build/react/fundamentals",
            },
            {
              title: "Build Todo App",
              href: "/batch/build/react/todo",
            },
            {
              title: "Build Quiz App",
              href: "/batch/build/react/quiz",
            },
          ],
        },
        {
          title: "Interview Questions",
          items: [
            {
              title: "Tabs",
              href: "/batch/build/interview/tabs",
            },
            {
              title: "Star rating",
              href: "/batch/build/interview/star-rating",
            },

            {
              title: "Gerenate table",
              href: "/batch/build/interview/table",
            },
            {
              title: "Counter",
              href: "/batch/build/interview/counter",
            },
            {
              title: "Like button",
              href: "/batch/build/interview/like",
            },
            {
              title: "Transfer List",
              href: "/batch/build/interview/transfer-list",
            },
          ],
        },
      ],
    },
    {
      title: "Hire Batch",
      items: [
        {
          title: "Profile and Resume",
          href: "/batch/hire/hire",
        },
      ],
    },
  ],
  mainNav: [
    {
      title: "Learn",
      href: "/",
    },
    {
      title: "Build",
      href: "/batch",
    },
    {
      title: "Hire",
      href: "/docs",
    },
  ],
};
