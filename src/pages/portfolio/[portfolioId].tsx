import { useRouter } from "next/router";

export interface PortfolioProjectPageProps {}

export default function PortfolioProjectPage({}: PortfolioProjectPageProps) {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
