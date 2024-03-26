import Image from "next/image";
import CardBlog from "./components/CardBlog";
import { getEntries } from "@/api/getEntries";
import { findAsset } from "@/utils/findAsset";

export default async function Home() {
  const blogs = await getEntries();
  // console.log(blogs.items[0].fields.thumbnail);
  console.log(blogs.items[0].fields.author);

  return (
    <>
      <main className="container mx-auto px-4">
        {/* Jumbotron */}
        <section className="mb-10 mt-10 space-y-2 text-center">
          <h1 className="text-5xl font-bold">
            <span className="text-base-content">The</span>{" "}
            <span className="text-cyan-500">
              News<span className="text-indigo-600">Hub</span>{" "}
              <span className="text-base-content">Blogs</span>
            </span>
          </h1>
          <p className="text-xl">
            A blog that provides the latest random news and tips
          </p>
        </section>

        {/* Blog List */}
        <section className="grid-col-1 grid gap-8 md:grid-cols-3">
          {blogs.items.map((blog, index) => {
            //supaya data yang ada di dalam blog bisa masuk kedalam CardBlog kita harus passing props

            const assetId = blog.fields.thumbnail.sys.id;
            const assets = blogs.includes.Asset;
            const image = findAsset(assetId, assets);
            return (
              <CardBlog
                key={index}
                title={blog.fields.title}
                category={blog.fields.category}
                description={blog.fields.description}
                author={blog.fields.author}
                imageUrl={`https:${image?.fields.file.url}`}
                createdAt={blog.fields.createdAt}
                slug={blog.fields.slug}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
