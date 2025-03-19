"use client";

import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { SheetContent } from "@/components/ui/sheet";
import { Sheet } from "@/components/ui/sheet";
import { Minus, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navigation = {
  categories: [
    {
      id: "product",
      name: "Product",
      sections: [
        {
          id: "bulb",
          name: "Bulb",
          items: [
            { name: "9 Watt LED Bulb", _id: "676" },
            { name: "12 Watt LED Bulb", _id: "677" },
            { name: "15 Watt LED Bulb", _id: "678" },
            { name: "Smart LED Bulb", _id: "679" },
            { name: "Emergency LED Bulb", _id: "680" },
          ],
        },
        {
          id: "fan",
          name: "Fan",
          items: [
            { name: "Ceiling Fan", _id: "681" },
            { name: "Table Fan", _id: "682" },
            { name: "Wall Fan", _id: "683" },
            { name: "Exhaust Fan", _id: "684" },
            { name: "Pedestal Fan", _id: "685" },
          ],
        },
        {
          id: "wire",
          name: "Wire",
          items: [
            { name: "Copper Wire (1.5mm)", _id: "686" },
            { name: "Copper Wire (2.5mm)", _id: "687" },
            { name: "Aluminum Wire (1.5mm)", _id: "688" },
            { name: "Aluminum Wire (2.5mm)", _id: "689" },
            { name: "Flexible Wire", _id: "690" },
          ],
        },
        {
          id: "fuse",
          name: "Fuse",
          items: [
            { name: "5 Amp Fuse", _id: "691" },
            { name: "10 Amp Fuse", _id: "692" },
            { name: "15 Amp Fuse", _id: "693" },
            { name: "20 Amp Fuse", _id: "694" },
            { name: "25 Amp Fuse", _id: "695" },
          ],
        },
        {
          id: "wiring_pipe",
          name: "Wiring Pipe",
          items: [
            { name: "PVC Pipe (1/2 inch)", _id: "696" },
            { name: "PVC Pipe (3/4 inch)", _id: "697" },
            { name: "Conduit Pipe (1/2 inch)", _id: "698" },
            { name: "Conduit Pipe (3/4 inch)", _id: "699" },
            { name: "Flexible Pipe", _id: "700" },
          ],
        },
        {
          id: "switch",
          name: "Switch",
          items: [
            { name: "Single Pole Switch", _id: "701" },
            { name: "Double Pole Switch", _id: "702" },
            { name: "Three-Way Switch", _id: "703" },
            { name: "Four-Way Switch", _id: "704" },
            { name: "Dimmer Switch", _id: "705" },
          ],
        },
        {
          id: "socket",
          name: "Socket",
          items: [
            { name: "2-Pin Socket", _id: "706" },
            { name: "3-Pin Socket", _id: "707" },
            { name: "Universal Socket", _id: "708" },
            { name: "Industrial Socket", _id: "709" },
            { name: "USB Socket", _id: "710" },
          ],
        },
      ],
    },
    {
      id: "brands",
      name: "Brands",
      sections: [
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Philips", _id: "801" },
            { name: "Syska", _id: "802" },
            { name: "Havells", _id: "803" },
            { name: "Wipro", _id: "804" },
            { name: "Bajaj", _id: "805" },
            { name: "Orient", _id: "806" },
            { name: "Usha", _id: "807" },
            { name: "Crompton", _id: "808" },
            { name: "Finolex", _id: "809" },
            { name: "RR Kabel", _id: "810" },
            { name: "Polycab", _id: "811" },
            { name: "KEI", _id: "812" },
            { name: "L&T", _id: "813" },
            { name: "Siemens", _id: "814" },
            { name: "ABB", _id: "815" },
            { name: "Schneider", _id: "816" },
            { name: "Astral", _id: "817" },
            { name: "Supreme", _id: "818" },
            { name: "Prince", _id: "819" },
            { name: "Legrand", _id: "820" },
            { name: "Anchor", _id: "821" },
          ],
        },
      ],
    },
  ],
};

const combileNavigation = navigation.categories.flatMap((category) =>
  category.sections.map((section) => ({
    categoryId: category.id,
    categoryName: category.name,
    sectionId: section.id,
    sectionName: section.name,
    sectionItem: section.items,
  }))
);

export default function ConvertNav() {
  const [open, setOpen] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({});

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  return (
    <div className="bg-white ">
      {/* Mobile menu */}

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent side="left">
          <div className="max-h-[600px] overflow-y-auto mt-8">
            {combileNavigation.map((section, index) => (
              <div key={index} className="border-t border-gray-200 px-4 py-6">
                <Collapsible
                  onOpenChange={() => toggleSection(section.sectionId)}
                >
                  <CollapsibleTrigger>
                    <h3
                      className="-mx-2 -my-3 flow-root"
                      style={{ width: "250px" }}
                    >
                      <div
                        className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                        aria-controls={`filter-section-mobile-${index}`}
                        aria-expanded="false"
                      >
                        <span className="font-medium text-gray-900">
                          {section.sectionName}
                        </span>
                        <span className="ml-6 flex items-center">
                          {collapsedSections[section.sectionId] ? (
                            <Minus className="size-5" />
                          ) : (
                            <Plus className="size-5" />
                          )}
                        </span>
                      </div>
                    </h3>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-8">
                    {collapsedSections[section.sectionId] && (
                      <div
                        className="pt-6"
                        id={`filter-section-mobile-${index}`}
                      >
                        <div className="space-y-6">
                          {section.sectionItem.map((item, idx) => (
                            <div key={idx} className="flex gap-3">
                              <Checkbox id={`${item._id}-${idx}`} />
                              <label
                                htmlFor={`${item._id}-${idx}`}
                                className="min-w-0 flex-1 text-gray-500"
                              >
                                {item.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            ))}
          </div>
          {/* Auth Links */}
          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Sign in
              </a>
            </div>
            <div className="flow-root">
              <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                Create account
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over $100
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <Bars3Icon
                aria-hidden="true"
                className="size-6 lg:hidden"
                onClick={() => setOpen(true)}
              />

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <Image
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                    width={180}
                    height={38}
                    priority
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <div className="hidden lg:ml-8 lg:block lg:self-stretch"></div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="size-6"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {combileNavigation.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 py-3">
                    <Collapsible
                      onOpenChange={() => toggleSection(section.sectionId)}
                    >
                      <CollapsibleTrigger>
                        <h3
                          className="-my-3 flow-root"
                          style={{ width: "250px" }}
                        >
                          <div
                            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                            aria-controls={`filter-section-${index}`}
                            aria-expanded="false"
                          >
                            <span className="font-medium text-gray-900">
                              {section.sectionName}
                            </span>
                            <span className="ml-6 flex items-center cursor-pointer">
                              {collapsedSections[section.sectionId] ? (
                                <Minus className="size-5" />
                              ) : (
                                <Plus className="size-5" />
                              )}
                            </span>
                          </div>
                        </h3>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-8">
                        {collapsedSections[section.sectionId] && (
                          <div className="pt-6" id={`filter-section-${index}`}>
                            <div className="space-y-4">
                              {section.sectionItem.map((item, idx) => (
                                <div key={idx} className="flex gap-3">
                                  <Checkbox id={`${item._id}-${idx}`} />
                                  <label
                                    htmlFor={`${item._id}-${idx}`}
                                    className="text-sm text-gray-600"
                                  >
                                    {item.name}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}
              </form>
              {/* Product grid */}
              <div className="lg:col-span-3">
                dhsfhdsgfhj
                <div></div>
              </div>
            </div>
          </section>
        </main>
      </header>
    </div>
  );
}
