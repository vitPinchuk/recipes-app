"use client";

import { siteConfig } from "@/config/siteConfig";
import { NAVIGATION_ITEMS } from "@/constants";
import { usePathname } from "next/navigation";

const Title = () => {
  const pathname = usePathname();

  const currentNavItem = NAVIGATION_ITEMS.find(
    (item) => item.href === pathname
  );

  const pageTitle = currentNavItem ? currentNavItem.label : siteConfig.title;

  return (
    <div className="w-full flex justify-center my-6">
      <h1 className="text-3xl font-bold">{pageTitle}</h1>
    </div>
  );
};

export default Title;
