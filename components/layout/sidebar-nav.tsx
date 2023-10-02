"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { NavItem, SidebarNav, SidebarNavItem } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export interface DocsSidebarNavProps {
  items: SidebarNav[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="w-full text-slate-800 ">
      {items.map((item, index) => (
        <div key={index} className={cn("pb-8")}>
          <h4 className="mb-1 rounded-md py-1 text-base font-medium dark:text-white">
            {item.title}
          </h4>
          {item.items ? (
            <div className="dark:text-gray-400">
              {item.items.map((item) => (
                <>
                  {item.href ? (
                    <DocsSidebarNavItem item={item} pathname={pathname} />
                  ) : (
                    <Accordion type="single" collapsible>
                      <AccordionItem className="border-b-0" value="item-1">
                        <div>
                        
                          <AccordionTrigger className="py-2 hover:no-underline"> {item.title}</AccordionTrigger>
                        </div>
                        <AccordionContent className="pb-[-1rem]">
                          <DocsSidebarNavItems
                            items={item.items}
                            pathname={pathname}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </>
              ))}
            </div>
          ) : null}
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
    <div className="grid grid-flow-row auto-rows-max text-sm">
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
      className={cn("flex w-full items-center rounded-md p-2 hover:underline", {
        "bg-muted": pathname === item.href,
      })}
    >
      {item.title}
    </Link>
  ) : (
    <span className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60">
      {item.title}
    </span>
  );
}
