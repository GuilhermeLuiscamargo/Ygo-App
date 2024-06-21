"use client";
import Parallax from "react-next-parallax";

export default function ParallaxImg({ img, name }: imgParalax) {
  return (
    <Parallax
      scale={1.2}
      spotGlareSizePercent={120}
      shadow="0 0 1.5rem rgba(218, 165, 32, 0.5)"
    >
      <img className="parallaxImg img-fluid" src={img} alt={name} />
    </Parallax>
  );
}
