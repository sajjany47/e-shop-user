"use client";

import React from "react";
import { useState } from "react";

import { Minus, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { NavigationData } from "@/shared/StaticData";

const MainSideFilter = () => {
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({});

  const combileNavigation = NavigationData.categories.flatMap((category) =>
    category.sections.map((section) => ({
      categoryId: category.id,
      categoryName: category.name,
      sectionId: section.id,
      sectionName: section.name,
      sectionItem: section.items,
    }))
  );

  const toggleSection = (sectionId: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };
  return (
    <aside className="hidden lg:block fixed top-24 left-0 h-[calc(100vh-6rem)] w-1/7 overflow-y-auto border-r border-gray-200 bg-white">
      {combileNavigation.map((section, index) => (
        <div key={index} className="border-b border-gray-200 py-6 px-4">
          <Collapsible onOpenChange={() => toggleSection(section.sectionId)}>
            <CollapsibleTrigger>
              <h3 className="-my-3 flow-root" style={{ width: "170px" }}>
                <div
                  className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                  aria-controls={`filter-section-${index}`}
                  aria-expanded="false"
                >
                  <span className="font-medium text-gray-900">
                    {section.sectionName}
                  </span>
                  <span className="ml-6 flex items-center cursor-pointer">
                    {collapsedSections[section.sectionId] ? (
                      <Minus className="size-5" />
                    ) : (
                      <Plus className="size-5" />
                    )}
                  </span>
                </div>
              </h3>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-8">
              {collapsedSections[section.sectionId] && (
                <div className="pt-6" id={`filter-section-${index}`}>
                  <div className="space-y-4">
                    {section.sectionItem.map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                        <Checkbox id={`${item._id}-${idx}`} />
                        <label
                          htmlFor={`${item._id}-${idx}`}
                          className="text-sm text-gray-600"
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ))}
    </aside>
  );
};

export default MainSideFilter;
