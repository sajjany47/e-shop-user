import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Check } from "lucide-react";

const ProductView = () => {
  return (
    <Card>
      <div className="h-56 w-full">
        <img
          className="mx-auto h-full object-cover"
          src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/k/8/k/15-fa1226tx-gaming-laptop-hp-original-imah4bjbx8ctzdg6.jpeg"
          alt="HP Victus Gaming Laptop"
        />
      </div>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-primary/20 text-primary px-2.5 py-0.5 text-xs font-medium rounded">
            Up to 35% off
          </span>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Eye className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2">HP Victus Gaming Laptop</h1>
        <p className="text-sm text-gray-500 mb-4">
          Intel Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home/4 GB
          Graphics/NVIDIA GeForce RTX 2050)
        </p>
        <div className="flex items-center mb-4">
          <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">
            4.5 ★
          </span>
          <span className="text-sm text-gray-500 ml-2">1,234 reviews</span>
        </div>
        <ul className="text-sm text-gray-700 mb-6 space-y-1">
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
        <div className="flex gap-4">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            Buy Now
          </Button>
          <Button variant="outline" className="flex-1">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductView;
