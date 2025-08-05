"use client";
import { useState } from "react";
import LanguageLoader from "./ui/Loader";
import HomPage from "./ui/HomePage";

export default function Home() {
   const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LanguageLoader onLoadingComplete={handleLoadingComplete} />}
      {!isLoading && <HomPage />}
    </>
  );
}
