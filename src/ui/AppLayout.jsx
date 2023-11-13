import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-[#e5e5e5] ">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
