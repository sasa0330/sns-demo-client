export interface UserType {
  id: number;
  username: String;
  email: String;
  password: String;
  post: PostType[];
  profile: Profile;
}

export interface PostType {
  id: number;
  content: string;
  createdAt: string;
  authorId: string;
  autor: UserType;
}

export interface Profile {
  id: number;
  bio: string;
  profileImgUrl: string;
  userId: number;
  user: UserType;
}
