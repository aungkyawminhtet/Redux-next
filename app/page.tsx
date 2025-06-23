"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "@/feature/todoSlice";
export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { lists } = useSelector((state: any) => state.todoCounter);
  console.log(lists);
  return (
    <div>
      <h1>Hello counter Lists</h1>
      <ul className="space-y-1">
        {lists.map((item: any, index: any) => (
          <div key={item.id} className="bg-amber-100 shadow p-2 flex justify-between mx-4">
            <li>{item.title}</li>
            <Button handleClick={() => dispatch(remove({"id": item.id}))}>Close</Button>
          </div> 
        ))}
      </ul>
      <Button bg="bg-blue-200" handleClick={() => router.push("/login")}>
        Go to Login
      </Button>
      <Button bg="bg-blue-200" handleClick={() => router.push("/register")}>
        Go to Register
      </Button>
    </div>
  );
}
