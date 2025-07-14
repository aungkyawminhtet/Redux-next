"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import axio from "axios";
// import { Dropdown, DropdownItem } from "flowbite-react";
import { Button } from "flowbite-react";
import { motion, animate, AnimatePresence } from "framer-motion";
import SelectItem from "@/components/SelectItem";

const page = () => {
  //   const [isdata, setisData] = useState<any>([]);
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

  return (
    <div className="flex flex-col ">
      <h1>User lists</h1>
      <div className="bg-red-300 p-4">adding</div>
      <div className="flex">
        <div className="bg-red-300 p-6">adding</div>
      </div>
     <SelectItem />
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
