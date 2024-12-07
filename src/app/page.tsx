"use client";

import { useRouter } from "next/navigation";
import Home from "./home/home";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Post from "./post/post";

export default function Main() {
  const [showComponentOne, setShowComponentOne] = useState(true);

  const toggleComponent = () => {
    setShowComponentOne((prev) => !prev);
  };

  return (
    <main className="justify-center items-center flex flex-col p-10">
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Button className="bg-neutral-500 " onClick={toggleComponent}>
        {showComponentOne ? "Post" : "Find"} a job
      </Button>
      {showComponentOne ? <Home /> : <Post />}
    </main>
  );
}
