/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

const ProductView = (props: any) => {
  const router = useRouter();
  const data = props.data;
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <Card>
      <div className="h-56 w-full">
        <img
          className="mx-auto h-full object-cover"
          src={data.image}
          alt={data.title}
        />
      </div>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-primary/20 text-primary px-2.5 py-0.5 text-xs font-medium rounded">
            Up to 35% off
          </span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push(`/Products/${data.id}`)}
            >
              <Eye className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2"> {data.title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          {showFullDescription
            ? data?.description
            : `${data?.description?.slice(0, 120)}...`}
          {data?.description?.length > 100 && (
            <span
              onClick={() => setShowFullDescription(!showFullDescription)}
              style={{ color: "blue", cursor: "pointer" }}
            >
              {showFullDescription ? " View Less" : " View More"}
            </span>
          )}
          {/* {data.description} */}
        </p>
        <div className="flex items-center mb-4">
          <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
            {data.rating.rate} ★
          </span>
          <span className="text-sm text-gray-500 ml-2">
            {data.rating.count} reviews
          </span>
        </div>
        {/* <ul className="text-sm text-gray-700 mb-6 space-y-1">
          {[
            "Core i5 Processor (12th Gen)",
            "8 GB DDR4 RAM",
            "Windows 11 Home",
            "512 GB SSD",
          ].map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul> */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-gray-900">
              {" "}
              ₹{(data.price * 80).toFixed(2)}
            </span>
            <span className="ml-2 text-sm font-medium text-gray-500 line-through">
              ₹{(data.price * 80 + 113).toFixed(2)}
            </span>
          </div>
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Save 10%
          </span>
        </div>
        <p className="text-green-600 text-sm font-semibold mb-4">
          Free Delivery
        </p>
        <div className="flex gap-4">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            Buy Now
          </Button>
          {quantity > 0 ? (
            <div className="flex items-center space-x-2">
              <Button onClick={handleDecrease} variant="secondary">
                -
              </Button>
              <span className="text-lg font-semibold">{quantity}</span>
              <Button onClick={handleIncrease} variant="secondary">
                +
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleIncrease}
              variant="outline"
              className="flex-1"
            >
              Add to Cart
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductView;
