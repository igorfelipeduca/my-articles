"use client";

import { TPost } from "@/components/post";
import axios from "axios";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./styles.css";
import { Image } from "@nextui-org/react";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ["latin"] });

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const [article, setArticle] = useState<TPost | null>(null);

  useEffect(() => {
    axios.get(`https://dev.to/api/articles/${params.id}`).then((response) => {
      setArticle(response.data);
    });
  }, []);

  return (
    <div className="h-screen w-screen bg-zinc-900">
      <Image
        className="w-screen h-72 object-cover rounded-none mb-16"
        src={article?.cover_image}
      />

      <div className="flex justify-center pb-16 text-3xl">
        <h1 className={"font-bold"}>{article?.title}</h1>
      </div>

      <div className={`flex justify-center ${inter.className}`}>
        <div className="max-w-prose ">
          <div
            className={"article"}
            dangerouslySetInnerHTML={{ __html: article?.body_html as string }}
          />
        </div>
      </div>
    </div>
  );
}
