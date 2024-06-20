"use client";
import Parallax from "react-next-parallax";

export default function ParallaxImg({ img, name }: imgParalax) {
  return (
    <Parallax>
      <img src={img} alt={name} />
    </Parallax>
  );
}
