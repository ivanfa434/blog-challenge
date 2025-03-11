// BlogCardByCategory.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Blog } from "@/types/blog";
import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface BlogCardProps {
    category: Category;
}

const BlogCardByCategory: FC<BlogCardProps> = ({ category }) => {
  return (
    <Link href={`/blogs/${category.blogs[0].slug}`}>
      <Card key={category.objectId}>
        <CardHeader>
          <div className="relative w-full h-[220px] rounded-lg overflow-hidden">
            <Image
              src={category.blogs[0].thumbnail}
              alt="blog"
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold">{category.blogs[0].title}</h2>
          <p className="text-justify line-clamp-4">{category.blogs[0].description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCardByCategory;