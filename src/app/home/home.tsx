import axios from "axios";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";
import Post from "../post/post";
import { number } from "zod";
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner";


export default function Home() {
  
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        inputValue
          ? `${process.env.NEXT_PUBLIC_HOST}/posts/${inputValue}` // Search API
          : `${process.env.NEXT_PUBLIC_HOST}/posts` // Fetch all posts
      );
      setPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  // Fetch posts based on input value
  useEffect(() => {
    
    
    fetchPosts();
  }, [inputValue]);
  console.log(process.env.NEXT_PUBLIC_PORT)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  const deletePost = async (id: string) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_HOST}/post/${id}`);
      console.log(response.data);// Update state to reflect the deletion
      if(response.status == 200){
        fetchPosts()
        toast("Post has been deleted.")

      }
        
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <main className="flex flex-col items-center px-15 py-10 ">
      <div className="w-full px-10 m-36">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-full ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              value={inputValue}
              onChange={handleInputChange}
              id="default-search"
              className="lg:w-3/4 w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline hover-outline-0"
              placeholder="Search jobs here..."
              required
            />
            {/* <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Search
            </button> */}
          </div>
        </form>
      </div>

      <h1 className="justify-center items-center mb-20 text-neutral-100 text-2xl lg:text-4xl">
        There are {posts?.length} job listing(s) 
      </h1>
      <div className="flex flex-wrap gap-5 w-full items-center justify-center">
        {posts.map((post: {index: Key | null | undefined; id:string;profile: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; desc: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; exp: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; techs: any[]; }, index: any) => (
          <div
            className=" text-sm w-3/4 lg:w-auto cursor-pointer hover:scale-105 duration-500 p-10 flex-col rounded-3xl border border-neutral-500"
            key={post.index}
          >
            <h3 className="text-3xl text-neutral-100 mb-5">{post.profile}</h3>
            <h4 className="text-neutral-300 mb-3">{post.desc}</h4>
            <h4 className="text-neutral-300">
              Experience : {post.exp} year(s)
            </h4>
            <ul className="flex text-sm flex-wrap mt-5 space-x-4 list-none">
              {post.techs.map((tech, index) => (
                <div className=" justify-center text-neutral-500" key={index}>
                  <li className="">{tech}</li>
                </div>
              ))}
            </ul>
            <Button className="bg-red-500 mt-10 hover:bg-red-300" onClick={()=>deletePost(post.id)}>Delete</Button>
          </div>
        ))}
      </div>
      <Toaster />
    </main>
    
  );
}
