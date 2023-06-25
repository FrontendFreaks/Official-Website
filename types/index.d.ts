interface NavItem {
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
