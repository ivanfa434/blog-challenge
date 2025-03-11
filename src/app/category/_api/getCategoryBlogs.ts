// src/app/category/_api/getCategoryBlogs.ts
import { Category } from "@/types/category";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getAllCategories = cache(async () => {
  const apiUrl = `https://fittingjump-us.backendless.app/api/data/category?loadRelations=blogs`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    console.error(`API request failed with status: ${response.status}`);
    return notFound();
  }

  const data = await response.json();
  console.log("API Response:", data); // Log respons lengkap

  if (!data || data.length === 0) { //perbaikan pada baris ini
    console.error("No category data found.");
    return notFound();
  }

  const categories: Category[] = data; //perbaikan pada baris ini
  return categories;
});