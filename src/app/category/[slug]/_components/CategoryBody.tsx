// CategoryBody.jsx
import { FC } from "react";
import Markdown from "@/components/Markdown";
import { getCategoryWithBlogs } from "../../_api/getCategoryWithBlogs";
import { Category } from "@/types/category"; // Import Category type

interface CategoryBodyProps {
  slug: string;
}

const CategoryBody: FC<CategoryBodyProps> = async ({ slug }) => {
  const categories: Category[] = await getCategoryWithBlogs(slug); // Provide slug argument

  const filteredCategories = categories.filter(
    (category) => category.slug === slug
  );

  if (filteredCategories.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">
          No content found for this category
        </h3>
      </div>
    );
  }

  const category = filteredCategories[0];

  return (
    <div className="relative">
      <div
        className="prose prose-lg md:prose-xl max-w-none mx-auto dark:prose-invert 
                     prose-headings:text-gray-800 dark:prose-headings:text-white
                     prose-p:text-gray-600 dark:prose-p:text-gray-300
                     prose-a:text-blue-600 hover:prose-a:text-blue-700
                     dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300
                     prose-img:rounded-xl prose-img:shadow-md"
      >
        <Markdown content={category.description} />
      </div>
    </div>
  );
};

export default CategoryBody;