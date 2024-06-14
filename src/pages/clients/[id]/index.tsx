import { useRouter } from "next/router";

export interface ClientProjectsPageProps {}

export default function ClientProjectsPage({}: ClientProjectsPageProps) {
  const router = useRouter();

  console.log(router.query);

  function loaderProjectHandler() {
    // router.push("/clients/ruslan/projectA");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "ruslan", clientProjectId: "projectA" },
    });
  }

  return (
    <div>
      <h1>The Projects of Given client</h1>
      <button onClick={loaderProjectHandler}>Loading Project A</button>
    </div>
  );
}
