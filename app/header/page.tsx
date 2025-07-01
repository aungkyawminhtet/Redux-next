"use client";
import React, { useState } from "react";
import { Button } from "@radix-ui/themes";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const page = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [selected, setSelected] = useState("");

  const handleChange = (e: any) => {
    setSelected(e.target.value);
    console.log("You selected:", e.target.value);
  };
  return (
    <div className="flex flex-col">
      <AnimatePresence initial={false}>
        {isToggle && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="p-4 h-[100px] bg-blue-200 shadow-md rounded-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
              exercitationem.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Button variant="soft" color="red" onClick={() => setIsToggle(!isToggle)}>
        Click me
      </Button>
      <motion.div
        className="w-[100px] h-[100px] bg-red-100 border"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        Hello framer motion
      </motion.div>
      <Alert>
        <AlertTitle>This is a title</AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          alias!
        </AlertDescription>
      </Alert>
      <div className="flex flex-col bg-gray-200">
        <select value={selected} onChange={handleChange}>
          <option value="">Please select</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
        </select>
      </div>
    </div>
  );
};

export default page;
