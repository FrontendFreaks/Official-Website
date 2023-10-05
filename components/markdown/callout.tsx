import { cn } from "@/lib/utils";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger" | "info" | "calm";
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-red-900 bg-red-50 dark:bg-transparent": type === "danger",
        "border-yellow-900 bg-yellow-50 dark:bg-transparent":
          type === "warning",
        "border-green-900 bg-green-50 dark:bg-transparent": type === "info",
        "border-sky-900 bg-sky-50 dark:bg-transparent": type === "calm",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
