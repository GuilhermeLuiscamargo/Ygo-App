"use client";
import Parallax from "react-next-parallax";

export default function ParallaxImg({ img, name }: imgParalax) {
  return (
    <>
      {img ? (
        <Parallax
          scale={1.2}
          spotGlareSizePercent={130}
          shadow="0 0 2rem rgba(218, 165, 32, 0.5)"
        >
          <img className="parallaxImg img-fluid" src={img} alt={name} />
        </Parallax>
      ) : (
        <Parallax
          scale={1.1}
          spotGlareSizePercent={120}
          shadow="0 0 2.5rem rgba(255, 255, 255, 1.5)"
        >
          <img
            className="parallaxImgError img-fluid"
            src="/img/404.jpeg"
            alt="aconteceu um erro "
          />
        </Parallax>
      )}
    </>
  );
}
