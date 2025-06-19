"use client";
import Button from '@/components/button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, addList } from '@/feature/todoSlice';
import { useRouter } from 'next/navigation';

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const add = () => {
    dispatch(increase({id: 20}));
  }
  const addNew = () => {

    let id = Math.floor(Math.random() * 1000);
    const newItem = {
      id,
      title: "New Item " + lists.length,
      completed: false,
    };

    dispatch(addList(newItem));

  }

 

  const {count, lists} = useSelector((state: any) => state.todoCounter);

  console.log(count);
  console.log(lists);


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <Button bg='bg-blue-200' handleClick={() => router.back() }>Back page</Button>
      
        <h1>Login Counter</h1>
        <h1>Counter - {count}</h1>
        <h1>Number of list count - {lists.length}</h1>
        <ul></ul>
        <Button bg='bg-blue-200' handleClick={add}>Add</Button>
        <Button bg='bg-blue-200' handleClick={addNew}>Add Item</Button>
    </div>
  )
}

export default page