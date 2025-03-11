// src/app/category/_api/getCategoryBlogs.ts
import { Category } from "@/types/category";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getCategoryWithBlogs = cache(async (slug: string) => {
  const response = await fetch(
    `https://fittingjump-us.backendless.app/api/data/category?where=%60slug%60%20%3D%20'${slug}'`
  );
  if (!response.ok) {
    return notFound();
  }
  const data = await response.json();
  if (!data.data || data.data.length === 0) {
    return notFound();
  }
  const categories: Category[] = data.data;
  return categories;
});
