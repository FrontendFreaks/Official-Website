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
