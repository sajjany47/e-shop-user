"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "@/store/reducer/FilterReducer";

export const Categories = [
  { name: "Men's Clothing", value: "men's clothing" },
  { name: "Jewelery", value: "jewelery" },
  { name: "Electronics", value: "electronics" },
  { name: "Women's Clothing", value: "women's clothing" },
];

const MainSideFilter = () => {
  const dispatch = useDispatch();
  const checkList = useSelector((state: any) => state.filter.checkList);

  const handleCheckboxChange = (value: string) => {
    const updatedList = checkList?.includes(value)
      ? checkList.filter((item: string) => item !== value)
      : [...checkList, value];

    dispatch(setFilter(updatedList));
  };
  console.log(checkList, "checkList");
  return (
    <aside className="hidden lg:block fixed top-24 left-0 h-[calc(100vh-6rem)] w-1/7 overflow-y-auto border-r border-gray-200 bg-white">
      <div className="py-6 px-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
        <div className="space-y-4">
          {Categories.map((category, index) => (
            <div key={index} className="flex items-center gap-3">
              <Checkbox
                id={`category-${index}`}
                checked={checkList.includes(category.value)}
                onCheckedChange={() => handleCheckboxChange(category.value)}
              />
              <label
                htmlFor={`category-${index}`}
                className="text-sm text-gray-600"
              >
                {category.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default MainSideFilter;
