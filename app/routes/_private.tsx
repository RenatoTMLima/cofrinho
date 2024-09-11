import { Tabs, TabsList, TabsTrigger } from "@base/tabs";
import { Link, Outlet, useLocation } from "@remix-run/react";

export default function PrivateLayout() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen w-full px-8 py-6">
      <header className="mb-4">
        <Tabs defaultValue={pathname}>
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger asChild value="/">
              <Link to="/">Home</Link>
            </TabsTrigger>
            <TabsTrigger asChild value="/dashboard">
              <Link to="/dashboard">Dashboard</Link>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </header>
      <Outlet />
    </div>
  );
}
