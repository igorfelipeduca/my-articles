import { Image } from "@nextui-org/react";

export type TPost = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: null | number;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  crossposted_at: null | string;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: null | string;
    github_username: string;
    user_id: number;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
  };
};

export default function Post({ post }: { post: TPost }) {
  return (
    <div className="w-[42rem]">
      <div className="w-full flex justify-between">
        <div className="text-zinc-500 text-xl font-medium max-w-[30rem] truncate">
          {post?.title}
        </div>

        <a
          href={post?.url}
          className="pt-px w-24 h-7 flex justify-center align-center transition-all text-zinc-500 duration-150 ease-linear hover:bg-gray-300 bg-gray-200 rounded-full shadow-inner"
        >
          Read{" "}
        </a>
      </div>

      <div className="w-full mt-4">
        <Image
          src={post?.cover_image}
          alt="image"
          className="w-full h-auto aspect-video rounded-none object-cover"
        />
      </div>
    </div>
  );
}
