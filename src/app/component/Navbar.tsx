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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

export const Categories = [
  { name: "Men's Clothing", value: "men's clothing" },
  { name: "Jewelery", value: "jewelery" },
  { name: "Electronics", value: "electronics" },
  { name: "Women's Clothing", value: "women's clothing" },
];

const Navbar = () => {
  const userDetails = useSelector((state: any) => state?.user);
  const cartDetails = useSelector((state: any) => state?.cart);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent side="left">
          <div className="max-h-[600px] overflow-y-auto mt-8">
            <div className="border-t border-gray-200 px-4 py-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Categories
              </h3>
              <div className="space-y-4">
                {Categories.map((category, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Checkbox id={`category-${index}`} />
                    <label
                      htmlFor={`category-${index}`}
                      className="text-sm text-gray-600"
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Auth Links */}
          <div className="space-y-6 border-t border-gray-200 px-4 py-6 cutom-avatar">
            {userDetails?.token.acccessToken ? (
              <Menubar>
                <MenubarMenu>
                  <small className="text-center">
                    <b>{userDetails.data.username}</b>
                    <br />
                  </small>
                  <MenubarTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Password</MenubarItem>
                    <MenubarItem>Setting</MenubarItem>
                    <MenubarItem>Logout</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            ) : (
              <>
                <div className="flow-root">
                  <Button
                    variant="ghost"
                    className="-m-2 block p-2 font-medium text-gray-900"
                    onClick={() => router.push("/login")}
                  >
                    <strong>Sign in</strong>
                  </Button>
                </div>
                <div className="flow-root">
                  <a
                    href="#"
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    <strong>Create account</strong>
                  </a>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
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
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 cutom-avatar">
                  {userDetails?.token.acccessToken ? (
                    <Menubar>
                      <MenubarMenu>
                        <small className="text-center">
                          <b>{userDetails.data.username}</b>
                          <br />
                          {/* <small>{userDetails.data.position}</small> */}
                        </small>
                        <MenubarTrigger>
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>Password</MenubarItem>
                          <MenubarItem>Setting</MenubarItem>
                          <MenubarItem>Logout</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => router.push("/login")}
                      >
                        Sign in
                      </Button>
                      <span
                        aria-hidden="true"
                        className="h-6 w-px bg-gray-200"
                      />
                      <Button
                        variant="ghost"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Create account
                      </Button>
                    </>
                  )}
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
                      {cartDetails?.cartNumber || 0}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
