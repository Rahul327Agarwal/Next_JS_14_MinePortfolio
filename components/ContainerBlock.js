import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children }) {
  return (
    <div>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
