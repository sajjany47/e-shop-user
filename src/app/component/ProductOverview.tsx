/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ProductOverview = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://pagedone.io/asset/uploads/1700472379.png"
  );

  const images = [
    "https://pagedone.io/asset/uploads/1700472379.png",
    "https://pagedone.io/asset/uploads/1711622397.png",
    "https://pagedone.io/asset/uploads/1711622408.png",
    "https://pagedone.io/asset/uploads/1711622419.png",
    "https://pagedone.io/asset/uploads/1711622437.png",
  ];

  return (
    <section className="m-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Slider */}
          <div className="slider-box w-full h-full">
            <div className="relative mb-6">
              <img
                src={selectedImage}
                alt="Selected Product"
                className="rounded-2xl object-cover w-full h-96"
              />
            </div>
            <div className="flex gap-4 justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 transition-all duration-500",
                    selectedImage === image
                      ? "border-indigo-600"
                      : "border-transparent"
                  )}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="pro-detail w-full lg:pl-8 xl:pl-16">
            <div className="flex items-center justify-between gap-6 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Yellow Summer Travel Bag
                </h2>
                <p className="text-base text-gray-500">ABS LUGGAGE</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <h5 className="text-2xl font-semibold text-gray-900">$199.00</h5>
              <span className="text-lg font-semibold text-indigo-600">
                30% off
              </span>
            </div>

            <p className="text-lg font-medium text-gray-900 mb-2">Color</p>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["Black", "Brown", "Beige"].map((color, index) => (
                <div key={index} className="text-center">
                  <div className="border-2 border-gray-100 rounded-xl p-2">
                    <img
                      src={images[index]}
                      alt={color}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">{color}</p>
                </div>
              ))}
            </div>

            <p className="text-lg font-medium text-gray-900 mb-2">Size (KG)</p>
            <div className="grid grid-cols-4 gap-3 mb-8">
              {["Full Set", "10 kg", "25 kg", "35 kg"].map((size, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-sm font-semibold"
                >
                  {size}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-400 rounded-full">
                <Button variant="ghost" className="rounded-l-full px-4">
                  -
                </Button>
                <input
                  type="text"
                  className="w-12 text-center border-0 outline-none"
                  defaultValue="1"
                />
                <Button variant="ghost" className="rounded-r-full px-4">
                  +
                </Button>
              </div>
              <Button variant="secondary" className="w-1/2">
                Add to Cart
              </Button>
            </div>

            <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
