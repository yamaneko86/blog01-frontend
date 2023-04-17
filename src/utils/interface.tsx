export interface Post {
  id: string;
  title: string;
  image: string;
  content: string;
  created_at: string;
}

export interface PostProps {
  post: Post;
}

export interface PostsProps {
  posts: Post[];
}
