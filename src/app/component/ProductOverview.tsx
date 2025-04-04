/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RelativeData } from "@/shared/StaticData";
import { useRouter } from "next/navigation";

const ProductOverview = () => {
  const router = useRouter();
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Slider */}
          <div className="slider-box w-full h-full">
            <div className="relative mb-4">
              <img
                src={selectedImage}
                alt="Selected Product"
                className="rounded-xl object-cover w-full h-64"
              />
            </div>
            <div className="flex gap-3 justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "cursor-pointer rounded-lg border transition-all duration-300",
                    selectedImage === image
                      ? "border-indigo-600"
                      : "border-transparent"
                  )}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="pro-detail w-full lg:pl-6 xl:pl-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Yellow Summer Travel Bag
                </h2>
                <p className="text-sm text-gray-500">ABS LUGGAGE</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <h5 className="text-lg font-semibold text-gray-900">$199.00</h5>
              <span className="text-sm font-semibold text-indigo-600">
                30% off
              </span>
            </div>

            <p className="text-sm font-medium text-gray-900 mb-2">Color</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {["Black", "Brown", "Beige"].map((color, index) => (
                <div key={index} className="text-center">
                  <div className="border rounded-lg p-1">
                    <img
                      src={images[index]}
                      alt={color}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{color}</p>
                </div>
              ))}
            </div>

            <p className="text-sm font-medium text-gray-900 mb-2">Size (KG)</p>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {["Full Set", "10 kg", "25 kg", "35 kg"].map((size, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-xs font-semibold"
                >
                  {size}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center border border-gray-400 rounded-full">
                <Button variant="ghost" className="rounded-l-full px-3">
                  -
                </Button>
                <input
                  type="text"
                  className="w-10 text-center border-0 outline-none"
                  defaultValue="1"
                />
                <Button variant="ghost" className="rounded-r-full px-3">
                  +
                </Button>
              </div>
              <Button variant="secondary" className="w-1/2 ">
                Add to Cart
              </Button>
            </div>

            <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 text-sm">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {RelativeData.map((product, index) => (
            <div
              key={index}
              className="w-48 border rounded-lg p-3 flex-shrink-0 shadow-sm flex flex-col"
            >
              {/* Fixed Image Size */}
              <div className="w-40 h-32 mx-auto overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Fixed Title Height to Avoid Card Expansion */}
              <div className="h-[40px] flex items-center justify-center">
                <h3 className="text-sm font-semibold line-clamp-2 text-center">
                  {product.title}
                </h3>
              </div>

              {/* Price Section */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-gray-900">
                  ₹{(product.price * 80).toFixed(2)}
                </span>
                <span className="text-xs text-gray-500 line-through">
                  ₹{(product.price * 80 + 113).toFixed(2)}
                </span>
              </div>

              {/* Discount Label */}
              <span className="text-xs font-medium text-green-600 block text-center">
                Save 10%
              </span>

              {/* Buttons with Fixed Height */}
              <div className="flex gap-2 mt-3">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs h-9"
                  onClick={() => router.push(`/Products/${product.id}`)}
                >
                  Buy Now
                </Button>
                <Button variant="outline" className="flex-1 text-xs h-9">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
