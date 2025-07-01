"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const page = () => {
  const { data } = useQuery({
    queryKey: ["get-post-id"],
    queryFn: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/100"
      );
      // console.log(res.data);
      return res.data;
    },
  });

  console.log("data is ", data);

  return (
    <div>
      <h1>testing page.</h1>
      {!data ? null : (
        <div className="p-4">
          <h1 className="font-bold">{data.title}</h1>
            <h1>User Id : {data.id}</h1>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default page;
