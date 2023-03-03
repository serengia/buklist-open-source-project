import React from "react";
import Hero from "../components/Home/Hero";
import PopularReads from "../components/Home/PopularReads";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#e6e6e9" }}>
      <Hero />
      <PopularReads />
    </div>
  );
}
