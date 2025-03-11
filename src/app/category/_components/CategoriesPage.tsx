// src/app/category/_components/CategoriesPage.tsx
import { getAllCategories } from "../_api/getCategoryBlogs";
import { CategoryCard } from "./CategoryCard";

export default async function CategoriesPage() {
  try {
    const categories = await getAllCategories();
    console.log("Categories:", categories);
    console.log("Categories (JSON):", JSON.stringify(categories, null, 2));
    console.log("Categories Length:", categories.length);
    categories.forEach(category => console.log("Category:", category));

    return (
      <main className="container py-12 mx-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Categories</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Browse our content by topic
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.objectId || category.slug || JSON.stringify(category)}
                category={category}
              />
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return <div>Error loading categories.</div>;
  }
}