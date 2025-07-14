"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { ChangeEvent, useState } from "react";
import { z } from "zod";

const itemProps = z.object({
  id: z.number(),
  name: z.string(),
  value: z.string(),
});

type Props = z.infer<typeof itemProps>;

interface ItemProps {
  mainLabel?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  value?: string;
}

const SelectItem = ({
  mainLabel = "ရွေးချယ်ပါ",
  onChange,
  value,
}: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const handlestate = (value: string) => {
    setName(value);
    onChange?.(value);
    setIsOpen(false);
  };

  const ItemLists: Props[] = [
    { id: 1, name: "Dashboard", value: "Dashboard" },
    { id: 2, name: "Settings", value: "Settings" },
    { id: 3, name: "Earnings", value: "Earnings" },
    { id: 4, name: "Logout", value: "Logout" },
  ];

  return (
    <div className="relative">
      <h1 className="opacity-50 mb-1 text-sm">{mainLabel}</h1>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" w-full text-white cursor-pointer py-3 bg-[#4E6688] rounded shadow p-2 select-none"
        onMouseOut={() => setIsOpen(false)}
      >
        {name ? name : "Default Label"}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div
              className="bg-gray-100 p-1 rounded shadow-md z-30 absolute w-full"
              onMouseOver={() => setIsOpen(true)}
              onMouseOut={() => setIsOpen(false)}
            >
              {ItemLists.map((item) => (
                <div
                  key={item.id}
                  className="hover:bg-gray-200 p-2 transition-duration-400 transition cursor-pointer select-none"
                  onClick={() => handlestate(item.value)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectItem;
