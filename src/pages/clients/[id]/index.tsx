import { useRouter } from "next/router";

export interface ClientProjectsPageProps {}

export default function ClientProjectsPage({}: ClientProjectsPageProps) {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Projects of Given client</h1>
    </div>
  );
}
