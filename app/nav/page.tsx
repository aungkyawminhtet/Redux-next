"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import axio from "axios";
// import { Dropdown, DropdownItem } from "flowbite-react";
import { Button } from "flowbite-react";
import { motion, animate, AnimatePresence } from "framer-motion";

const page = () => {
  //   const [isdata, setisData] = useState<any>([]);
  const [name, setName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { data, isError, isSuccess } = useQuery({
    queryKey: ["get-all-posts"],
    queryFn: async () => {
      const response: any = await axio.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //   setisData(response);
      return response.data;
    },
  });
  if (isError) return <h1>Error....</h1>;

  const { mutateAsync } = useMutation({
    mutationFn: async (data: any) => {
      axio.post("https://jsonplaceholder.typicode.com/posts", data);
    },
    onSuccess: () => {
      console.log("succeess posts");
      queryClient.invalidateQueries({ queryKey: ["get-all-posts"] });
    },
  });

  const handleClick = () => {
    const data = {
      userId: 11,
      id: 10000,
      title: "New Post",
      body: "this is a new post",
    };
    mutateAsync(data);
  };

  const handlestate = (value: string) => {
    setName(value);
    console.log("i am close");
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col ">
      <h1>User lists</h1>
      <div className="bg-red-300 p-4">adding</div>
      <div className="flex">
        <div className="bg-red-300 p-6">adding</div>
      </div>
      <div className="w-[300px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" w-full text-white cursor-pointer py-3 bg-[#4E6688] rounded shadow p-2"
        >
          {name ? name : "Default Label"}
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-70 p-1 rounded shadow-md">
                <div
                  className="hover:bg-gray-200 p-2 transition-duration-400 transition"
                  onClick={() => handlestate("Dashboard")}
                >
                  Dashboard
                </div>
                <div
                  className="hover:bg-gray-200 p-2 transition-duration-400 transition"
                  onClick={() => handlestate("Settings")}
                >
                  Settings
                </div>
                <div
                  className="hover:bg-gray-200 p-2 transition-duration-400 transition"
                  onClick={() => handlestate("Earnings")}
                >
                  Earnings
                </div>
                <div
                  className="hover:bg-gray-200 p-2 transition-duration-400 transition"
                  onClick={() => handlestate("Sign out")}
                >
                  Sign out
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Button pill onClick={handleClick} className="mt-4">
        Add post
      </Button>
      <ul className="space-y-2 p-4">
        {!data
          ? null
          : data.map((post: any) => (
              <div key={post.id} className="P-2 bg-gray-100/80">
                <li>{post.id}</li>
                <li>{post.title}</li>
                <li>{post.body}</li>
              </div>
            ))}
      </ul>
    </div>
  );
};

export default page;
