import React, { useState, useEffect } from "react";
import Post from "./Post";
import apiClient from "@/lib/apiClient";
import { PostType } from "../types";
import { useAuth } from "@/context/auth";
import Link from "next/link";

export default function Timeline() {
  const [postText, setPostText] = useState<string>("");
  const [latestPost, setLatestPost] = useState<PostType[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await apiClient.get("/posts/get_latest_post");
        setLatestPost(response.data);
      } catch (error) {
        console.log(error);
        alert("エラーです");
      }
    };
    fetchLatestPosts();
  });
  const hundleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newPost = await apiClient.post("/posts/post", {
        content: postText,
      });
      console.log(newPost);
      setLatestPost((prevPosts) => [newPost.data, ...prevPosts]);
      setPostText("");
    } catch (err) {
      console.log(err);
      alert("投稿できませんでした");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-4">
        <div className="bg-white shadow-md rounded p-4 mb-4">
          {user ? (
            <form onSubmit={hundleSubmit}>
              <textarea
                className="w-full h-24 p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="What's on your mind?"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setPostText(e.target.value)
                }
                value={postText}
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-4 rounded"
              >
                投稿
              </button>
            </form>
          ) : (
            <>
              <div className="w-full mb-4 p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
                投稿するにはログインが必要です。
              </div>
              <Link
                href="/login"
                className="bg-gray-700 hover:bg-green-700 duration-200 text-white font-semibold py-2 px-2 rounded"
              >
                ログイン
              </Link>
            </>
          )}
        </div>
        {latestPost.map((post: PostType) => (
          <Post key={post.id} post={post} />
        ))}
      </main>
    </div>
  );
}
