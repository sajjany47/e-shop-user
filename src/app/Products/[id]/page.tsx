import ProductOverview from "@/app/component/ProductOverview";
import React from "react";

interface ProductDetailsParams {
  params: {
    id: string;
  };
}

const ProductDetails = ({ params }: ProductDetailsParams) => {
  console.log(params.id);
  return (
    <div className="mt-8">
      <ProductOverview />
    </div>
  );
};

export default ProductDetails;
