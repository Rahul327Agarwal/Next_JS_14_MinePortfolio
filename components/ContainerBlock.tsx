import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface ContainerBlockProps {
  children: React.ReactNode;
}

const ContainerBlock: React.FC<ContainerBlockProps> = ({ children }) => {
  return (
    <div>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default ContainerBlock;
