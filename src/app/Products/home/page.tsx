"use client";

import React, { useEffect, useState } from "react";
import MainSideFilter from "@/app/component/MainSideFilter";
import { ProductList } from "../ProductService";
import Swal from "sweetalert2";
import ProductView from "@/app/component/ProductView";
import { useSelector } from "react-redux";
import Loader from "@/app/component/Loader";

const Home = () => {
  const checkList = useSelector((state: any) => state.filter.checkList);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    ProductList()
      .then((res) => {
        if (checkList.length > 0) {
          const filteredList = res.filter((item: any) =>
            checkList.includes(item.category)
          );
          setList(filteredList);
        } else {
          setList(res);
        }
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
  }, [checkList]);

  return (
    <>
      {loading && <Loader />}
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
    </>
  );
};

export default Home;
