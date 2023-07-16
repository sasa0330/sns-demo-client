import apiClient from "@/lib/apiClient";
import Image from "next/image";
import { GetServerSideProps } from "next/types";
import React from "react";
import { PostType, Profile } from "../../types";
type Props = {
  profile: Profile;
  posts: PostType[];
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { userId } = context.query;
  try {
    const profileResponse = await apiClient.get(`/users/profile/${userId}`);
    const postsRresponse = await apiClient.get(`/posts/${userId}`);
    console.log("postsRresponse.data");
    console.log(postsRresponse.data);
    return {
      props: {
        profile: profileResponse.data,
        posts: postsRresponse.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

const userProfile = ({ profile, posts }: Props) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="w-full max-w-xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <div className="flex items-center">
              <Image
                className="w-20 h-20 rounded-full mr-4"
                src={profile.profileImgUrl}
                alt="User Avatar"
                width={100}
                height={100}
              />
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  {profile.user.username}
                </h2>

                <p className="text-gray-600">{profile.bio}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl mx-auto">
          {posts.map((post) => (
            <>
              <div
                key={post.id}
                className="bg-white shadow-md rounded-lg p-6 mb-4"
              >
                <div>ユーザー名：{post.autor.username}</div>
                <div suppressHydrationWarning={true}>
                  投稿日時{new Date(post.createdAt).toLocaleString()}
                </div>
                <div>内容{post.content}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default userProfile;
