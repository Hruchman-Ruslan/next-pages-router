import Link from "next/link";

export interface ClientsPageProps {}

export default function ClientsPage({}: ClientsPageProps) {
  const clients = [
    { id: "ruslan", name: "Ruslan" },
    { id: "sam", name: "Sam" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map(({ id, name }) => (
          <li key={id}>
            {/* <Link href={`/clients/${id}`}>{name}</Link> */}
            <Link href={{ pathname: "/clients/[id]", query: { id } }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
