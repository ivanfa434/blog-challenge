// src/app/category/[slug]/page.tsx
import { Suspense } from "react";
import Loading from "@/components/Loading";
import CategoryHeader from "./_components/CategoryHeader";
import CategoryBody from "./_components/CategoryBody";
import { CategoryParams } from "@/types/CategoryParams";
import CategoryList from "./_components/CategoryList";

// Make the component async and use proper type definition
export default async function CategoryDetail(props: { params: CategoryParams }) {
  // No need to type assert since we're properly typing the props parameter
  const { slug } = props.params;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Suspense fallback={<Loading />}>
          <CategoryHeader slug={slug} />
          <CategoryBody slug={slug} />
          <CategoryList category={slug} />
        </Suspense>
      </div>
    </div>
  );
}