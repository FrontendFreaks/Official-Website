
import { Icon } from "@/components/icons";
import { LucideProps } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { ElementType } from "react";

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export type SidebarNav = {
  title: string;
} & (
  | {
      href: string;
      items: never;
    }
  | {
      href?: string;
      items: SidebarNavItem[];
    }
);

export type DocsConfig = {
  mainNav: NavItem[];
  sidebarNav: SidebarNav[];
};

export type SocialConfig = {
  title: string
  href: string,
  iconName: Icon,
}

export type documentationConfig = SidebarNavItem[];
