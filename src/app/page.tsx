"use client";
import { useRouter } from "next/navigation";
import Home from "./home/home";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Post from "./post/post";
import { AppProps } from "next/app";
import { useSession, signIn, signOut } from "next-auth/react"
import SessionWrapper from "./component/sessionWrapper";
export default function Main() {
  const [showComponentOne, setShowComponentOne] = useState(true);

  const toggleComponent = () => {
    setShowComponentOne((prev) => !prev);
  };
  // const { data: session } = useSession();
  const { data: session } = useSession()
  if(session){
    return (
      <SessionWrapper>
      <main className="flex flex-col justify-center items-center p-10">
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="justify-between flex flex-row lg:gap-20 gap-5 items-center ">
        <Button className="bg-neutral-500 " onClick={toggleComponent}>
          {showComponentOne ? "Post" : "Find"} a job
        </Button>
        <h3 className="text-neutral-100 text-sm lg:text-2xl">Welcome, {session.user.name}!</h3> 
        <Button className="bg-red-500" onClick={() => signOut()}>Sign out</Button>
        
        </div>
        {showComponentOne ? <Home /> : <Post />}
      </main>
      </SessionWrapper>
    );
  }
  return (
    <SessionWrapper>

    <main className="flex flex-col justify-center items-center p-20 text-3xl text-neutral-200">
    <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    Please sign in to continue :)<br/>
    <Button className="mt-20 p-5 text-xl bg-blue-500" onClick={() => signIn("github")}>Sign in using GitHub</Button>
    <Button className="mt-20 p-5 text-xl bg-blue-500" onClick={() => signIn("google")}>Sign in using Google</Button>
    </main>
    </SessionWrapper>
  );
}
