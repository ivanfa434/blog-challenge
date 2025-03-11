import { FC } from "react";
import BlogCard from "../../_components/BlogCard";
import { Blog } from "@/types/blog";

interface BlogListBodyProps {
  isPending: boolean;
  blogs?: Blog[];
}
const BlogListBody: FC<BlogListBodyProps> = ({ isPending, blogs }) => {
  return (
    <section className="grid grid-cols-4 gap-4 mt-12">
      {isPending && (
        <div className="flex justify-center items-center h-[50vh] col-span-4 ">
          <p>Loading..</p>
        </div>
      )}
      {blogs?.map((blog) => {
        return <BlogCard key={blog.objectId} blog={blog} />;
      })}
    </section>
  );
};

export default BlogListBody;