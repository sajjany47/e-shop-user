"use client";

import { useEffect, useState } from "react";
import ProductView from "./ProductView";
import { ProductList } from "../Products/ProductService";
import Swal from "sweetalert2";

import Navbar from "./Navbar";
import MainSideFilter from "./MainSideFilter";

export default function ConvertNav() {
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
    <div className="bg-white">
      {/* Mobile menu */}

      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24">
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
      </main>
    </div>
  );
}
