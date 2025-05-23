import { Header } from "@/components";
import Home from "@/screen/Home";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div className="w-[1280px] h-screen container">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
      </div>

      <Outlet />
    </div>
  );
}
