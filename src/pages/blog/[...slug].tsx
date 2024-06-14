import { useRouter } from "next/router";

export interface BlogPostsPageProps {}

export default function BlogPostsPage({}: BlogPostsPageProps) {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
