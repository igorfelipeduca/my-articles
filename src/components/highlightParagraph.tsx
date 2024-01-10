"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function HighlightParagraph({ id }: { id: number }) {
  const [post, setPost] = useState<any>();

  useEffect(() => {
    axios.get(`https://dev.to/api/articles/${id}`).then((response) => {
      console.log({ data: response.data });

      setPost(response.data);
    });
  }, []);

  const firstParagraph = (content: string) => {
    return content.split("</p>")[0].split("<p>")[1];
  };

  return (
    <div className="space-y-8">
      <div className="text-4xl font-medium w-full text-zinc-500">
        {post ? firstParagraph(post?.body_html) : ""}
      </div>

      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-4">
          <div className="h-px w-24 bg-zinc-400" />
          <h3 className="font-medium text-zinc-400 text-xl">{post?.title}</h3>
        </div>

        <a
          href={post?.url}
          className="text-zinc-400 text-xl transition-all duration-150 easy-linear hover:text-zinc-500"
        >
          Read the full article
        </a>
      </div>
    </div>
  );
}
