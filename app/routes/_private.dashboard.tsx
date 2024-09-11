import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard | Cofrinho" }];
};

export default function Dashboard() {
  return (
    <main className="">
      <h1>Dashboard</h1>
    </main>
  );
}
