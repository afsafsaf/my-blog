import { getEntryBySlug } from "@/api/getEntryBySlug";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { format } from "date-fns"; //Import manual
import { findAsset } from "@/utils/findAsset";
import { notFound } from "next/navigation";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer"; //Import manual
import { BLOCKS } from "@contentful/rich-text-types";

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const BlogDetail: React.FC<BlogDetailProps> = async ({ params }) => {
  const blog = await getEntryBySlug(params.slug);
  //   console.log(blog.items[0].fields.createdAt);

  if (!blog.items.length) {
    notFound();
  }

  const assetId = blog.items[0].fields.thumbnail.sys.id;
  const assets = blog.includes.Asset;
  const image = findAsset(assetId, assets);

  const RICHTTEXTOPTION: Options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className="my-2 text-lg font-semibold text-white md:text-xl ">
            {" "}
            {children}
          </h2>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, Children) => {
        return (
          <>
            <p className="text-lg font-light">{Children}</p>
          </>
        );
      },
    },
  };
  return (
    <>
      {/* HEADER */}
      <main className="container mx-auto max-w-6xl px-4">
        <section>
          <Badge variant="outline" className="rounded-sm bg-green-100">
            {blog.items[0].fields.category}
          </Badge>
          <h1 className="text-2xl font-semibold md:text-4xl ">
            {blog.items[0].fields.title}
          </h1>
          <p className="text-sm font-light italic">
            {format(new Date(blog.items[0].sys.createdAt), "dd MMMM yyyy")} -{" "}
            {blog.items[0].fields.author}
          </p>

          <div className="relative h-[300px] w-full md:h-[400px]">
            <Image
              src={`https:${image?.fields.file.url}`}
              alt="thumbnail"
              fill
              className="h-96 w-96 object-cover object-center
               "
            ></Image>
          </div>
        </section>

        {/* CONTENT */}

        <section className="text-justify">
          {documentToReactComponents(
            blog.items[0].fields.content,
            RICHTTEXTOPTION,
          )}
        </section>
      </main>
    </>
  );
};

export default BlogDetail;
