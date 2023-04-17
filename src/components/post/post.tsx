import Link from "next/link";
import Image from "next/image";
import { PostProps } from "~/utils/interface";

export default function Post({ post }: PostProps) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="p-4 cursor-pointer sm:w-1/2 lg:-1/4">
        <Image
          alt="post"
          className="object-cover"
          src={post.image}
          width={200}
          height={200}
        />
        <div className="text-center my-4">
          <p>{post.title}</p>
        </div>
      </div>
    </Link>
  );
}
