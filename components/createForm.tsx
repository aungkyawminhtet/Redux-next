"use client";

import { FormSchema } from "@/validation/FormValidation";
import { Button, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { data, h1 } from "framer-motion/client";
import { useRouter } from "next/navigation";
import SelectItem from "./SelectItem";

const CreateForm = () => {
    const [dada, setData] = useState<any>([]);
    const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const SubmitHandler =  handleSubmit(async(data) => {
      setData((prev: any) => [...prev, data]);
      console.log(data);
      router.refresh()
      
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={SubmitHandler}
        className="flex flex-col shadow-md p-4 w-[300px] space-y-4"
      >
        <div>
          <TextField.Root
            placeholder="Enter your name"
            {...register("name")}
            type="text"
          />
          {errors.name && <h1>{errors.name.message}</h1>}
        </div>
        <div>
          <TextField.Root
            placeholder="Enter your email"
            {...register("email")}
            type="email"
          />
          {errors.email && <h1>{errors.email.message}</h1>}
        </div>
        <div>
          <TextField.Root
            placeholder="Enter your password"
            {...register("password")}
            type="password"
          />
          {errors.password && <h1>{errors.password.message}</h1>}
        </div>
        <Controller
          name="selectedValue"
          control={control}
          defaultValue=""
          render={({ field: {value, onChange} }) => (
            <SelectItem
              value={value}
              onChange={onChange} 
              mainLabel="Choose Item"
            />
          )}
        />{" "}
        <Button type="submit" variant="solid" color="blue">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateForm;
