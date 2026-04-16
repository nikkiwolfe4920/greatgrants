import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal, Home } from "lucide-react";

import { cn } from "./utils";

function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        "text-sm font-semibold leading-5 text-[#717680] hover:text-[#414651] transition-colors whitespace-nowrap",
        className,
      )}
      style={{ fontFamily: 'Cabin, sans-serif' }}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "text-sm font-semibold leading-5 text-[#107569] whitespace-nowrap",
        className,
      )}
      style={{ fontFamily: 'Cabin, sans-serif' }}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("flex items-center", className)}
      {...props}
    >
      {children ?? <ChevronRight className="w-4 h-4 text-[#A4A7AE]" strokeWidth={1.33} />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "text-sm font-semibold leading-5 text-[#717680]",
        className,
      )}
      style={{ fontFamily: 'Cabin, sans-serif' }}
      {...props}
    >
      ...
    </span>
  );
}

function BreadcrumbHome({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-home"
      className={cn("flex items-center justify-center w-5 h-5", className)}
      {...props}
    >
      <Home className="w-4 h-4 text-[#A4A7AE]" strokeWidth={1.67} />
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  BreadcrumbHome,
};
