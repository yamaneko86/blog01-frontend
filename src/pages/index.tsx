import Head from "next/head";
import Image from "next/image";
import Post from "~/components/post/post";
import { PostsProps } from "~/utils/interface";
import { getAllPostsData } from "~/lib/functions";

export default function Home({ posts }: PostsProps) {
  return (
    <div>
      <Head>
        <title>Next.js & DRF Blog</title>
      </Head>
      <div className="mb-10 p-3 border rounded">
        <Image
          className="object-cover rounded"
          src={"/top.jpg"}
          alt="top"
          width={1280}
          height={300}
        />
      </div>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="text-lg mb-3">BLOG POSTS</div>
        <div className="border w-14"></div>
      </div>
      <div className="flex flex-wrap -m-4 mb-5">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
    revalidate: 3,
  };
}
