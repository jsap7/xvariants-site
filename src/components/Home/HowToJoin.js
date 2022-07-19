import React from "react";
import BorderBot from "./BorderBot";
import BorderTop from "./BorderTop";
import HomeBar from "./HomeBar";
import Home3 from "./Home3";

function HowToJoin() {
  return (
    <section id="howToJoin">
        <BorderBot/>
        <BorderTop/>
        <HomeBar text={"[How To Join]"}/>
        <Home3/>
        <BorderBot/>
    </section>
  );
}

export default HowToJoin;