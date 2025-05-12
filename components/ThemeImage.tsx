"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeImage() {
  const { theme } = useTheme();


  const imageSrc = theme == "dark" ? "/png/c.png" : "/png/clg.png";

  return (
    <img
      src={imageSrc}
      alt="Editor Interface"
      className="rounded-lg h-full  p-0 m-0 w-full relative z-10"
    />
  );
}
