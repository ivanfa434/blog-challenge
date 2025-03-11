import { Category } from "@/types/category";

import { notFound } from "next/navigation";
import { cache } from "react";

export const getBlogsWithCategory = cache(async (category: string) => {
  const response = await fetch(
    `https://mediateoatmeal-us.backendless.app/api/data/category?where=%60title%60%20%3D%20'${category}'&loadRelations=blogs`
  );
  const blogs: Category[] = await response.json();
  if (!blogs.length) {
    return notFound();
  }
  return blogs;
});
