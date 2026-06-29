import type { ReactNode } from "react";

export default function Parent({ children }: { children: ReactNode }) {
  return (
    <main className=" container mt-5">{children}</main>
  );
}
