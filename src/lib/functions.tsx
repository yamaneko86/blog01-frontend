// Django API server URL
const SERVER_URL = "http://127.0.0.1:8000";

// 投稿一覧を取得
export async function getAllPostsData() {
  const res = await fetch(new URL(`${SERVER_URL}/api/post`));
  const posts = await res.json();
  return posts;
}

// 投稿一覧のIDを取得
export async function getAllPostIds() {
  const res = await fetch(new URL(`${SERVER_URL}/api/post`));
  const posts = await res.json();
  return posts.map((post: { id: string }) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id: String) {
  const res = await fetch(new URL(`${SERVER_URL}/api/post/${id}`));
  const post = await res.json();
  return post;
}
