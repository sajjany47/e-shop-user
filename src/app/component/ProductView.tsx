import React from "react";

const ProductView = () => {
  return (
    <>
      {/* component */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <img
            className="mx-auto h-full dark:hidden"
            src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/8/k/15-fa1226tx-gaming-laptop-hp-original-imah4bjbx8ctzdg6.jpeg"
            alt=""
          />
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {" "}
              Up to 35% off{" "}
            </span>
            <div className="flex items-center justify-end gap-1">
              <button
                type="button"
                data-tooltip-target="tooltip-quick-look"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only"> Quick look </span>
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
                    strokeWidth={2}
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
              <div
                id="tooltip-quick-look"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
              >
                Quick look
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                type="button"
                data-tooltip-target="tooltip-add-to-favorites"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only"> Add to Favorites </span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                  />
                </svg>
              </button>
              <div
                id="tooltip-add-to-favorites"
                role="tooltip"
                className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                data-popper-placement="top"
              >
                Add to favorites
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            HP Victus Gaming Laptop
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Intel Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home/4
            GB Graphics/NVIDIA GeForce RTX 2050)
          </p>

          <div className="flex items-center mb-4">
            <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
              4.5 ★
            </span>
            <span className="text-sm text-gray-500 ml-2">1,234 reviews</span>
          </div>
          <ul className="text-sm text-gray-700 mb-6">
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
          </ul>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-3xl font-bold text-gray-900">$899.00</span>
              <span className="ml-2 text-sm font-medium text-gray-500 line-through">
                $1,000.00
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
    </>
  );
};

export default ProductView;
