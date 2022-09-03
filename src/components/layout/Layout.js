import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export function Layout() {
  return (
    <div>
      <Header />
      <main className="container py-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
