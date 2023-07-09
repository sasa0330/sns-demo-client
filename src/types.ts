export interface UserType {
  id: number;
  username: String;
  email: String;
  password: String;
  post: PostType[];
}

export interface PostType {
  id: number;
  content: string;
  createdAt: string;
  authorId: string;
  autor: UserType;
}
