/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import { ProductDetails, ProductList } from "../Products/ProductService";
import Swal from "sweetalert2";
import Loader from "./Loader";

const ProductOverview = () => {
  const router = useRouter();
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [details, setDetails] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [relativeData, setRelativeData] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setLoading(true);
    ProductDetails(id)
      .then((res) => {
        setDetails(res);
        setSelectedImage(res.image);
        setImages([res.image]);
        FilterProduct(res.category);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: error.mesaage,
          icon: "error",
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FilterProduct = (category: string) => {
    setLoading(true);
    ProductList()
      .then((res) => {
        const filteredList = res.filter(
          (item: any) => item.category === category
        );
        setRelativeData(filteredList);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: error.mesaage,
          icon: "error",
        });
      });
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <>
      {loading && <Loader />}
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
                    {details.title}
                  </h2>
                  <p className="text-sm text-gray-500">{details.category}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-gray-900">
                    {" "}
                    ₹{(details.price * 80).toFixed(2)}
                  </span>
                  <span className="ml-2 text-sm font-medium text-gray-500 line-through">
                    ₹{(details.price * 80 + 113).toFixed(2)}
                  </span>
                </div>
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Save 10%
                </span>
              </div>
              <p className="text-green-600 text-sm font-semibold mb-4">
                Free Delivery
              </p>
              <div className="flex items-center mb-4">
                <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
                  {details?.rating?.rate} ★
                </span>
                <span className="text-sm text-gray-500 ml-2">
                  {details?.rating?.count} reviews
                </span>
              </div>
              {(details.category === "men's clothing" ||
                details.category === "women's clothing") && (
                <>
                  <p className="text-sm font-medium text-gray-900 mb-2">Size</p>
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="w-full text-xs font-semibold"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </>
              )}
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={handleDecrease}
                    variant="secondary"
                    className="cursor-pointer"
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <Button
                    onClick={handleIncrease}
                    variant="secondary"
                    className="cursor-pointer"
                  >
                    +
                  </Button>
                </div>
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                  variant={"ghost"}
                >
                  Add to Cart
                </Button>
              </div>

              <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 text-sm mt-4">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Related Products</h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {relativeData.map((product: any, index) => (
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
    </>
  );
};

export default ProductOverview;
