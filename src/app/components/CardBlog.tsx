import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface CardBlogProps {
  imageUrl: string;
  category: string;
  title: string;
  createdAt: string;
  author: string;
  description: string;
  slug: string;
}
const CardBlog: React.FC<CardBlogProps> = ({
  author,
  category,
  imageUrl,
  title,
  createdAt,
  description,
  slug,
}) => {
  //Cara pasing propsnya dengan membuat react.fc + nama interfacenya

  return (
    <>
      <Link href={`/${slug}`}>
        <Card className="h-96">
          <CardHeader>
            <div className="relative h-[220px] w-full rounded-md">
              <Image
                src={imageUrl}
                alt="thumbnail"
                fill
                className="rounded object-cover"
              ></Image>
            </div>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="rounded-sm bg-green-100">
              {category}
            </Badge>
            <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
            <p className="text-sm font-light italic">2024-03-17 - {author}</p>
            <p className="line-clamp-3">{description}</p>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default CardBlog;
