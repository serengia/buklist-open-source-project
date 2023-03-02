import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function LayoutGeneral({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
