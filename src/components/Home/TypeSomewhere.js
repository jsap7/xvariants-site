import React from "react";
import Typewriter from "typewriter-effect";

function TypeSomewhere() {
  return (
    <Typewriter
      options={{
        strings: [
          "Somewhere...",
          "Sometime...",
          "Someplace...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeSomewhere;
