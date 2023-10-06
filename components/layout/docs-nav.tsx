"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NavItem, SidebarNavItem, documentationConfig } from "@/types";

export interface DocsSidebarNavProps {
  items: documentationConfig;
}

export function DocSideNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="w-full text-slate-800">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-8")}>
          <h4 className="mb-1 rounded-md py-1 text-base font-medium dark:text-white">
            {item.title}
          </h4>
          <div className="dark:text-gray-400">
            {item.items ? (
              <DocsSidebarNavItems items={item.items} pathname={pathname} />
              ) : null}
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: NavItem[] | undefined;
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm" >
      {items.map((item, index) => {
        return (
          <DocsSidebarNavItem key={index} item={item} pathname={pathname} />
        );
      })}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsrops {
  item: NavItem | SidebarNavItem;
  pathname: string | null;
}

export function DocsSidebarNavItem({
  item,
  pathname,
}: DocsSidebarNavItemsrops) {
  return item.href ? (
    <Link
      href={item.href}
      className={cn("flex w-full items-center rounded-md p-2 hover:underline" , {
        "bg-muted": pathname === item.href,
      }) }
    >
      {item.title}
    </Link>
  ) : (
    <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60" >
      {item.title}
    </span>
  );
}
