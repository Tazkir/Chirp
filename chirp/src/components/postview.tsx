import type { RouterOutputs } from "~/utils/api";
import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export const PostView = (props: PostWithUser) => {
  const { post, author } = props;

  return (
    <div className="flex gap-3 border-b border-slate-400 p-4" key={post.id}>
      <Image
        src={author.profileImageUrl}
        alt={`@${author.username}'s profile picture`}
        width={56}
        height={56}
        className="h-14 w-14 rounded-full"
        loading="lazy"
      />
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-300">
          <Link href={`/@${author.username}`}>
            <span>{`@${author.username}`}</span>
          </Link>
          ·
          <Link href={`/post/${post.id}`}>
            <span>{`  ${dayjs(post.createdAt).fromNow()}`}</span>
          </Link>
        </div>
        <span className="text-lg">{post.content}</span>
      </div>
    </div>
  );
};
