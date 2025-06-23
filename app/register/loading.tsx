import { TextField, Button } from "@radix-ui/themes";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col shadow-md p-4 w-[300px] space-y-4">
        <div>
          <Skeleton className="w-[300px] h-[20px] bg-red-300"  />
        </div>
        <div>
          <TextField.Root placeholder="Enter your email" type="email" />
        </div>
        <div>
          <TextField.Root placeholder="Enter your password" type="password" />
        </div>
        <Button type="submit" variant="solid" color="blue">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default loading;
