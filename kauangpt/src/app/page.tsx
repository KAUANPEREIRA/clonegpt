"use client";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const closeSideBar = () => {
    setSideBarOpened(false);
  };
  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar open={sideBarOpened} onClose={closeSideBar}>
        {}
      </Sidebar>
      <section className="flex flex-col w-full">
        ...
        <button onClick={() => setSideBarOpened(true)}>Abrir botão</button>
      </section>
    </main>
  );
};

export default Page;
