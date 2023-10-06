import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div style={{ maxWidth: "375px" }} className="mx-auto bg-white">
        <Header />
        <SideBar />
        <main>{children}</main>
      </div>
    </div>
  );
}
