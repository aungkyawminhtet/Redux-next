"use client";
import { Theme } from "@radix-ui/themes"
import React from "react"

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <Theme>{children}</Theme>
  )
}

export default ThemeProvider