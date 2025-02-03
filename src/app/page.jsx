"use client";
import dynamic from "next/dynamic";
const App = dynamic(() => import("@/App"), { ssr: false });

const Home = () => {
  return (
    <div>
      <App />
    </div>
  );
};
export default Home;
