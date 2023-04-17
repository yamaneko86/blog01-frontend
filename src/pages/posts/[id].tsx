import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "~/lib/functions";
import { PostProps } from "~/utils/interface";

export default function PostData({ post }: PostProps) {
  const router = useRouter();

  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-5 w-full">
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-3xl mb-3 font-bold">{post.title}</h1>
        <p className="mb-3">{post.created_at}</p>
        <div className="border w-14"></div>
      </div>
      <p className="whitespace-pre-wrap">{post.content}</p>
    </div>
  );
}

// 投稿一覧のIDを取得
export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: true,
  };
}

// 投稿詳細のデータを取得
export async function getStaticProps({ params }: any) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}
