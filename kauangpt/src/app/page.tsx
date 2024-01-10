"use client";
import { ChatArea } from "@/components/ChatArea";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const [sideBarOpened, setSideBarOpened] = useState(false);
  const OpenSideBar = () => {
    setSideBarOpened(true);
  };
  const closeSideBar = () => {
    setSideBarOpened(false);
  };

  const handleClearConversation = () => {};

  const handleNewChat = () => {};
  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sideBarOpened}
        onClose={closeSideBar}
        onClear={handleClearConversation}
        //onNewChat e a prop qque recebe uma função void , handleNewChat a funcao
        onNewChat={handleNewChat}
      >
        <div className="w-16 h-96">... </div>
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header
          OpenSideBarClick={OpenSideBar}
          title={`bla bla bla bla`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={undefined} />
        {/* <button onClick={() => setSideBarOpened(true)}>Abrir botão</button> */}
      </section>
    </main>
  );
};

export default Page;
