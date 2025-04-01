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
    <>
      <ProductOverview />
    </>
  );
};

export default ProductDetails;
