"use client";

import { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { SheetContent } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sheet } from "@/components/ui/sheet";

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
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

export default function ConvertNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile menu */}

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent side="left" style={{ gap: "4px" }}>
          <Tabs defaultValue={navigation.categories[0].name} className="mt-2">
            {/* Tabs List with Gap */}
            <TabsList className="border-b border-gray-200 flex gap-x-2">
              {navigation.categories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.name}
                  className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content with Scrollable Data */}
            <div className="max-h-[400px] overflow-y-auto">
              {navigation.categories.map((category) => (
                <TabsContent
                  key={category.name}
                  value={category.name}
                  className="space-y-10 px-4 pt-10 pb-8"
                >
                  {category.sections.map((section) => (
                    <div key={section.name}>
                      <p
                        id={`${category.id}-${section.id}-heading-mobile`}
                        className="font-medium text-gray-900"
                      >
                        {section.name}
                      </p>
                      <ul
                        role="list"
                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                        className="mt-6 flex flex-col space-y-6"
                      >
                        {section.items.map((item) => (
                          <li key={item.name} className="flow-root">
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </div>
          </Tabs>

          {/* Pages Section */}
          <div className="space-y-6 border-t border-gray-200 px-4 py-6">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <a
                  href={page.href}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  {page.name}
                </a>
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
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                    onClick={() => setOpen(true)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                  </button>
                </DialogTrigger>
              </Dialog>

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
              <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name}>
                      <PopoverTrigger asChild>
                        <button className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[state=open]:border-indigo-600 data-[state=open]:text-indigo-600">
                          {category.name}
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-[state=closed]:opacity-0 data-[state=open]:duration-200 data-[state=open]:ease-out data-[state=closed]:duration-150 data-[state=closed]:ease-in">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow-sm"
                        />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          {item.name}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>

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
      </header>
    </div>
  );
}
