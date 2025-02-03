"use client";
import dynamic from "next/dynamic";
import App from "@/App";

dynamic(() => import("@/App"), { ssr: false });
const Home = () => {
  return (
    <div>
      <App />
    </div>
  );
};
export default Home;
