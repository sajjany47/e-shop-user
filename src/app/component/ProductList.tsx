/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { ProductList } from "../Products/ProductService";
import Swal from "sweetalert2";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter, ArrowDownZA, Heart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const Product = () => {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState("bottom");
  const [open, setOpen] = useState(false);

  const sortOptions = [
    { label: "The most popular", value: "popular" },
    { label: "Newest", value: "newest" },
    { label: "Increasing price", value: "price-asc" },
    { label: "Decreasing price", value: "price-desc" },
    { label: "No. reviews", value: "reviews" },
    { label: "Discount %", value: "discount" },
  ];
  useEffect(() => {
    ProductList()
      .then((res) => {
        setList(res);
      })
      .catch((error) => {
        Swal.fire({
          title: error.mesaage,
          icon: "error",
        });
      });
  }, []);
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/* Heading & Filters */}
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => setOpen(true)}
              type="button"
              variant="outline"
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              <Filter className="-ms-0.5 me-2 h-4 w-4" />
              Filters
              <ChevronDown className="-me-0.5 ms-2 h-4 w-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                >
                  <ArrowDownZA className="-ms-0.5 me-2 h-4 w-4" />
                  Sort
                  <ChevronDown className="-me-0.5 ms-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  {sortOptions.map((item, index) => (
                    <DropdownMenuRadioItem
                      value={item.value}
                      key={index}
                      // className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((item, index) => (
            <div
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              key={index}
            >
              <div className="h-56 w-full">
                <img
                  className="mx-auto h-full dark:hidden"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="pt-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                    {" "}
                  </span>
                  <div className="flex items-center justify-end gap-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Heart className="h-5 w-5 cursor-pointer" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Add to favorites</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h1>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>

                <div className="flex items-center mb-4">
                  <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
                    {item.rating.rate} ★
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    {item.rating.count} reviews
                  </span>
                </div>
                {/* <ul className="text-sm text-gray-700 mb-6">
                  <li className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Core i5 Processor (12th Gen)
                  </li>
                  <li className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    8 GB DDR4 RAM
                  </li>
                  <li className="flex items-center mb-1">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Windows 11 Home
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    512 GB SSD
                  </li>
                </ul> */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">
                      ₹{item.price * 80 + 113}
                    </span>
                    <span className="ml-2 text-sm font-medium text-gray-500 line-through">
                      ₹{item.price * 80}
                    </span>
                  </div>
                  <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Save 10%
                  </span>
                </div>
                <p className="text-green-600 text-sm font-semibold mb-4">
                  Free Delivery
                </p>
                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                    Buy Now
                  </button>
                  <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full text-center">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Show more
          </button>
        </div>
      </div>
      {/* Filter modal */}

      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Filter</DialogTitle>
          </DialogHeader>
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="brand">Brand</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="advance">Advance</TabsTrigger>
            </TabsList>
            <TabsContent value="brands">Brands</TabsContent>
            <TabsContent value="product">Product</TabsContent>
            <TabsContent value="advance">Advance</TabsContent>
          </Tabs>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <form
        action="#"
        method="get"
        id="filterModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-xl md:h-auto">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
            {/* Modal header */}
            <div className="flex items-start justify-between rounded-t p-4 md:p-5">
              <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Filters
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="filterModal"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="px-4 md:px-5">
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="-mb-px flex flex-wrap text-center text-sm font-medium"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  <li className="mr-1" role="presentation">
                    <button
                      className="inline-block pb-2 pr-1"
                      id="brand-tab"
                      data-tabs-target="#brand"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Brand
                    </button>
                  </li>
                  <li className="mr-1" role="presentation">
                    <button
                      className="inline-block px-2 pb-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                      id="advanced-filers-tab"
                      data-tabs-target="#advanced-filters"
                      type="button"
                      role="tab"
                      aria-controls="advanced-filters"
                      aria-selected="false"
                    >
                      Advanced Filters
                    </button>
                  </li>
                </ul>
              </div>
              <div id="myTabContent">
                <div
                  className="grid grid-cols-2 gap-4 md:grid-cols-3"
                  id="brand"
                  role="tabpanel"
                  aria-labelledby="brand-tab"
                >
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                      A
                    </h5>
                    <div className="flex items-center">
                      <input
                        id="apple"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="apple"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Apple (56){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="asus"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="asus"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Asus (97){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="acer"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="acer"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Acer (234){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="allview"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="allview"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Allview (45){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="atari"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="asus"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Atari (176){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="amd"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="amd"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        AMD (49){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="aruba"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="aruba"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Aruba (16){" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                      B
                    </h5>
                    <div className="flex items-center">
                      <input
                        id="beats"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="beats"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Beats (56){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="bose"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="bose"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Bose (97){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="benq"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="benq"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        BenQ (45){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="bosch"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="bosch"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Bosch (176){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="brother"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="brother"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Brother (176){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="biostar"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="biostar"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Biostar (49){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="braun"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="braun"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Braun (16){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="blaupunkt"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="blaupunkt"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Blaupunkt (45){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="benq2"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="benq2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        BenQ (23){" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                      C
                    </h5>
                    <div className="flex items-center">
                      <input
                        id="canon"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="canon"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Canon (49){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="cisco"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="cisco"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Cisco (97){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="cowon"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="cowon"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Cowon (234){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="clevo"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="clevo"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Clevo (45){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="corsair"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="corsair"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Corsair (15){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="csl"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="csl"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Canon (49){" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                      D
                    </h5>
                    <div className="flex items-center">
                      <input
                        id="dell"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="dell"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Dell (56){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="dogfish"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="dogfish"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Dogfish (24){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="dyson"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="dyson"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Dyson (234){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="dobe"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="dobe"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Dobe (5){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="digitus"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="digitus"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Digitus (1){" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                      E
                    </h5>
                    <div className="flex items-center">
                      <input
                        id="emetec"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="emetec"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Emetec (56){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="extreme"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="extreme"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Extreme (10){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="elgato"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="elgato"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Elgato (234){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="emerson"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="emerson"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Emerson (45){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="emi"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="emi"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        EMI (176){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="fugoo"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="fugoo"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Fugoo (49){" "}
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-lg font-medium uppercase text-black dark:text-white">
                      F
                    </h5>
                    <div className="flex items-center">
                      <input
                        id="fujitsu"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="fujitsu"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Fujitsu (97){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="fitbit"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="fitbit"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Fitbit (56){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="foxconn"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="foxconn"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Foxconn (234){" "}
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="floston"
                        type="checkbox"
                        defaultValue=""
                        className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      />
                      <label
                        htmlFor="floston"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        {" "}
                        Floston (45){" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="space-y-4"
                id="advanced-filters"
                role="tabpanel"
                aria-labelledby="advanced-filters-tab"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="min-price"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Min Price{" "}
                      </label>
                      <input
                        id="min-price"
                        type="range"
                        min={0}
                        max={7000}
                        defaultValue={300}
                        step={1}
                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="max-price"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Max Price{" "}
                      </label>
                      <input
                        id="max-price"
                        type="range"
                        min={0}
                        max={7000}
                        defaultValue={3500}
                        step={1}
                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                    <div className="col-span-2 flex items-center justify-between space-x-2">
                      <input
                        type="number"
                        id="min-price-input"
                        defaultValue={300}
                        min={0}
                        max={7000}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 "
                        placeholder=""
                      />
                      <div className="shrink-0 text-sm font-medium dark:text-gray-300">
                        to
                      </div>
                      <input
                        type="number"
                        id="max-price-input"
                        defaultValue={3500}
                        min={0}
                        max={7000}
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label
                        htmlFor="min-delivery-time"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Min Delivery Time (Days){" "}
                      </label>
                      <input
                        id="min-delivery-time"
                        type="range"
                        min={3}
                        max={50}
                        defaultValue={30}
                        step={1}
                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                    <input
                      type="number"
                      id="min-delivery-time-input"
                      defaultValue={30}
                      min={3}
                      max={50}
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 "
                      placeholder=""
                    />
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                    Condition
                  </h6>
                  <ul className="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="condition-all"
                          type="radio"
                          defaultValue=""
                          name="list-radio"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="condition-all"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          All{" "}
                        </label>
                      </div>
                    </li>
                    <li className="w-full border-r border-gray-200 dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id="condition-new"
                          type="radio"
                          defaultValue=""
                          name="list-radio"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="condition-new"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          New{" "}
                        </label>
                      </div>
                    </li>
                    <li className="w-full">
                      <div className="flex items-center pl-3">
                        <input
                          id="condition-used"
                          type="radio"
                          defaultValue=""
                          name="list-radio"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="condition-used"
                          className="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          Used{" "}
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div>
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                      Colour
                    </h6>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="blue"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="blue"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-primary-600" />
                          Blue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="gray"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="gray"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-gray-400" />
                          Gray
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="green"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="green"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-green-400" />
                          Green
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="pink"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="pink"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-pink-400" />
                          Pink
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="red"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="red"
                          className="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          <div className="mr-2 h-3.5 w-3.5 rounded-full bg-red-500" />
                          Red
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                      Rating
                    </h6>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="five-stars"
                          type="radio"
                          defaultValue=""
                          name="rating"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="five-stars"
                          className="ml-2 flex items-center"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="four-stars"
                          type="radio"
                          defaultValue=""
                          name="rating"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="four-stars"
                          className="ml-2 flex items-center"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="three-stars"
                          type="radio"
                          defaultValue=""
                          name="rating"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="three-stars"
                          className="ml-2 flex items-center"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="two-stars"
                          type="radio"
                          defaultValue=""
                          name="rating"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="two-stars"
                          className="ml-2 flex items-center"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="one-star"
                          type="radio"
                          defaultValue=""
                          name="rating"
                          className="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="one-star"
                          className="ml-2 flex items-center"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-300 dark:text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                      Weight
                    </h6>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          id="under-1-kg"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="under-1-kg"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          Under 1 kg{" "}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="1-1-5-kg"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="1-1-5-kg"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          1-1,5 kg{" "}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="1-5-2-kg"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="1-5-2-kg"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          1,5-2 kg{" "}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="2-5-3-kg"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="2-5-3-kg"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          2,5-3 kg{" "}
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="over-3-kg"
                          type="checkbox"
                          defaultValue=""
                          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        />
                        <label
                          htmlFor="over-3-kg"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {" "}
                          Over 3 kg{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="mb-2 text-sm font-medium text-black dark:text-white">
                    Delivery type
                  </h6>
                  <ul className="grid grid-cols-2 gap-4">
                    <li>
                      <input
                        type="radio"
                        id="delivery-usa"
                        name="delivery"
                        defaultValue="delivery-usa"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="delivery-usa"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            USA
                          </div>
                          <div className="w-full">Delivery only for USA</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="delivery-europe"
                        name="delivery"
                        defaultValue="delivery-europe"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="delivery-europe"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Europe
                          </div>
                          <div className="w-full">Delivery only for USA</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="delivery-asia"
                        name="delivery"
                        defaultValue="delivery-asia"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="delivery-asia"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Asia
                          </div>
                          <div className="w-full">Delivery only for Asia</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="delivery-australia"
                        name="delivery"
                        defaultValue="delivery-australia"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="delivery-australia"
                        className="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500 md:p-5"
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            Australia
                          </div>
                          <div className="w-full">
                            Delivery only for Australia
                          </div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="flex items-center space-x-4 rounded-b p-4 dark:border-gray-600 md:p-5">
              <button
                type="submit"
                className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
              >
                Show 50 results
              </button>
              <button
                type="reset"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Product;
