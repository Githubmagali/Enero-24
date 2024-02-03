import { useEffect, useState } from "react";
import Anime from "react-animejs-wrapper";
import "./styles.css";
export const Pattern = ({ parameter }: { parameter: string }) => {
  return (
    <div className={`pattern ${parameter}`}>
      <Anime
        data-direction="left"
        config={{
          backgroundPosition: [0, "50000000px"],
          loop: true,
          duration: 500000000,
          easing: "linear",
        }}
      >
        <div className="pattern__stripe pattern__stripe--top"></div>
      </Anime>

      <Anime
        data-direction="left"
        config={{
          backgroundPosition: [0, "-50000000px"],
          loop: true,
          duration: 500000000,
          easing: "linear",
        }}
      >
        <div className="pattern__stripe pattern__stripe--bottom"></div>
      </Anime>
    </div>
  );
};
