import React from "react";
import Hero from "../../components/Home/Hero";
import PopularReads from "../../components/Home/PopularReads";
import Notification from "../Notifications/Notification";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <Hero />
      <PopularReads />
      <Notification />
    </div>
  );
}
