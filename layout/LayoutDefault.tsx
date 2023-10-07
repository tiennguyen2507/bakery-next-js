import { ReactNode } from "react";

export default function LayoutDefault({ children }: { children: ReactNode }) {
  return (
    <div className="bg-blue-100 min-h-screen">
      <div style={{ maxWidth: "375px" }} className="mx-auto bg-white">
        <main>{children}</main>
      </div>
    </div>
  );
}
