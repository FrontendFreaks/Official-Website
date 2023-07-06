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
      title: "Learn",
      items: [
        {
          title: "Html",
          items: [
            {
              title: "baisc",
              href: "/batch/learn/html/basic",
            },
          ],
        },
        {
          title: "Javascript",
          items: [
            {
              title: "basic",
              href: "/batch/learn/js/intro",
            },
            {
              title: "DOM",
              href: "/batch/learn/js/dom",
            },
            {
              title: "Google Keep",
              href: "/batch/learn/js/google-keep",
            },
            {
              title: "Wack a mole",
              href: "/batch/learn/js/wack-a-mole",
            },
            {
              title: "Github Wrapper",
              href: "/batch/learn/js/github-wrapper",
            },
          ],
        },
        {
          title: "Git/Github",
          items: [
            {
              title: "basic",
              href: "/batch/learn/github/intro",
            },
          ],
        },
        {
          title: "CSS",
          items: [
            {
              title: "basic",
              href: "/batch/learn/css/basic",
            },
            {
              title: "Flex",
              href: "/batch/learn/css/flex",
            },
            {
              title: "Grid",
              href: "/batch/learn/css/grid",
            },
          ],
        },
      ],
    },
    {
      title: "Build",
      items: [
        {
          title: "React js",
          items: [
            {
              title: "Fundamentals",
              href: "/batch/build/react/fundamentals",
            },
            {
              title: "Todo App",
              href: "/batch/build/react/todo",
            },
            {
              title: "Quiz App",
              href: "/batch/build/react/quiz",
            },
          ],
        },
        {
          title: "Interview Qs",
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
      title: "Hired",
      items: [
        {
          title: "Linkedin",
          href: "/batch/learn/html/basic",
        },
        {
          title: "Wellfound",
          href: "/batch/learn/html/basic",
        },
        {
          title: "Resume",
          href: "/batch/learn/html/basic",
        },
      ],
    },
  ],
  mainNav: [
    {
      title: "about",
      href: "/",
    },
    {
      title: "join",
      href: "/batch",
    },
    {
      title: "docs",
      href: "/docs",
    },
  ],
};
