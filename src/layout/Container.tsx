import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = (props: Props) => {
  return (
    <div className="font-sans">
      <>
        <Navbar />
        {props.children}
        <Footer />
      </>
    </div>
  );
};
export default Container;
