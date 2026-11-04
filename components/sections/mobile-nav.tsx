"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { phoneHref, school } from "@/content/school";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="text-primary inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-black/5 lg:hidden"
        >
          <Menu aria-hidden="true" className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-surface w-[88%] max-w-sm gap-0 p-0"
      >
        <SheetHeader className="border-line border-b p-5">
          <SheetTitle className="font-heading text-primary text-xl">
            {school.name}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col p-3">
          {school.nav.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="rounded-card text-primary px-3 py-3 text-lg font-medium hover:bg-black/5"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="border-line mt-auto flex flex-col gap-3 border-t p-5">
          <SheetClose asChild>
            <Link href="/admissions" className="btn btn-primary">
              Enquire now
            </Link>
          </SheetClose>
          <a href={phoneHref} className="text-center text-sm font-medium">
            Call {school.phone}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
