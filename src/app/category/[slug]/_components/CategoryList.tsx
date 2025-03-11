
import { getBlogByAuthor } from "@/app/blogs/_api/getBlogByAuthor";
import { FC } from "react";
import BlogCardByCategory from "./BlogCardByCategory";
import { getBlogsWithCategory } from "../../_api/getBlogsWithCategory";

interface CategoryListProps {
  category: string
}
const CategoryList: FC<CategoryListProps> = async ({category}) => {
  const blogs = await getBlogsWithCategory(category);
  return (
    <section className="container mx-auto p-4">
       <p className="text-5xl font-semibold flex justify-center py-10">My Article</p>
      <div className="grid grid-cols-3 gap-4 py-14">
        {blogs.map((category) => {
          return <BlogCardByCategory category={category}/>;
        })}
      </div>
    </section>
  );
};

export default CategoryList;
