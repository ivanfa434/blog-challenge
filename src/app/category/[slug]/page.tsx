import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import getBlogsWithCategory from "../_api/getBlogsWithCategory";


export default async function CategoriDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Find the category with the matching slug
  const slug = (await params).slug;
  const category = getBlogsWithCategory(slug);

  // If no category is found, return 404
  if (!category) {
    notFound();
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            {/* <div className="p-2 rounded-full bg-primary/10">
              <category.icon className="h-6 w-6 text-primary" />
            </div> */}
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {(await category).title}
            </h1>
          </div>
          <p className="text-muted-foreground md:text-lg">
            {(await category).description}
          </p>
        </div>
      </div>

      {/* Category Posts */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          Posts in {(await category).title}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(await category).blogs.map((post) => (
            <Card key={post.objectId} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {post.created}
                  </span>
                </div>
                <CardTitle className="mb-2">
                  <Link href={`/blogs/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" className="p-0" asChild>
                  <Link href={`/blogs/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

