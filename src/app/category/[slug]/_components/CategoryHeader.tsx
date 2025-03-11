// CategoryHeader.jsx
import { FC } from "react";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { getCategoryWithBlogs } from "../../_api/getCategoryWithBlogs";

interface CategoryHeaderProps {
  slug: string;
}

const CategoryHeader: FC<CategoryHeaderProps> = async ({ slug }) => {
  // Call getCategoryWithBlogs with slug
  const categories = await getCategoryWithBlogs(slug); // Provide slug argument

  // Then filter the categories by slug if needed - use exact match to prevent duplicates
  const filteredCategories = categories.filter(category => 
    category.slug === slug // Use exact match only
  );

  // Use the first matching category or handle empty case
  if (filteredCategories.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          No blog found for this category
        </h2>
        <Link href="/category" className="mt-4 inline-block text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition">
          ← Browse all categories
        </Link>
      </div>
    );
  }

  const category = filteredCategories[0];

  return (
    <div className="relative mb-8 mx-auto">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Use a plain div instead of Badge component */}
          <div className="capitalize px-3 py-1 bg-blue-500 text-white font-medium rounded-full text-sm">
            {category.title || "Uncategorized"}
          </div>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(category.created), "dd MMMM yyyy")}
          </time>
        </div>

        <div className="relative w-full h-64 sm:h-80 md:h-96 mt-6 overflow-hidden rounded-xl shadow-lg">
          <Image
            src={category.image}
            alt={category.title}
            fill
            unoptimized
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;