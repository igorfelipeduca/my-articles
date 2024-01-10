"use client";

import Image from "next/image";
import icon from "../assets/icon.svg";
import Post, { TPost } from "@/components/post";
import HighlightParagraph from "@/components/highlightParagraph";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=yelldutz")
      .then((response) => {
        console.log({ data: response.data });
        setPosts(response.data);
      });
  }, []);

  return (
    <main className="p-16">
      <div className="flex justify-center">
        <Image src={icon} className="h-24 w-24" alt="logo" />
      </div>
      <div className="mt-8 flex flex-col justify-center">
        <div className="text-center text-zinc-600 text-[32px] font-medium font-['Geist']">
          Front-end developer, <br />
          building public knowledge.
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="text-zinc-400 text-xl font-medium font-['Geist']">
          Opinions are my own.
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="px-20 w-full grid grid-cols-2">
          {posts.length ? (
            <>
              <Post post={posts[0]} />
              <Post post={posts[1]} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex mt-16 justify-center px-24">
        {posts.length ? <HighlightParagraph id={posts[0].id} /> : <></>}
      </div>
      <div className="flex justify-center mt-16">
        <div className="px-20 w-full grid grid-cols-2 gap-y-16">
          {posts.length ? (
            posts
              .slice(2)
              .map((post, index) => <Post post={post} key={index} />)
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
}
