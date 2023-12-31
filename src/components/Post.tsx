import React, { useEffect } from "react";
import Image from "next/image";
import { PostType } from "../types";
import Link from "next/link";

type Props = {
  post: PostType;
};

export default function Post(props: Props) {
  const { post } = props;
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Link href={`/profile/${post.authorId}`}>
            <Image
              className="w-10 h-10 rounded-full mr-2"
              src={post.autor.profile?.profileImgUrl}
              alt="User Avatar"
              width={100}
              height={100}
            />
          </Link>
          <div>
            <h2 className="font-semibold text-md">{post.autor?.username}</h2>
            <p className="text-gray-500 text-sm">
              {new Date(post?.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-gray-700">{post?.content}</p>
      </div>
    </div>
  );
}
