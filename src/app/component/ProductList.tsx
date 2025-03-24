/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { ProductList } from "../Products/ProductService";
import Swal from "sweetalert2";
import { Heart } from "lucide-react";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tooltip } from "@radix-ui/react-tooltip";

const Product = () => {
  const [list, setList] = useState([]);

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
    </section>
  );
};

export default Product;
