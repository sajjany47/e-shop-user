"use client";

import React, { useEffect, useState } from "react";
import MainSideFilter from "@/app/component/MainSideFilter";
import { ProductList } from "../ProductService";
import Swal from "sweetalert2";
import ProductView from "@/app/component/ProductView";

const Home = () => {
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
    <section aria-labelledby="products-heading" className="pt-6 pb-24">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
        {/* Sidebar */}
        <MainSideFilter />
        {/* Product grid */}
        <div className="lg:col-span-3 lg:ml-[11%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((item, index) => (
              <div key={index}>
                <ProductView data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
