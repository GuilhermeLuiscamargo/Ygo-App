"use client";
import Parallax from "react-next-parallax";

export default function ParallaxImg({ img, name }: IimgParalax) {
  return (
    <>
      {img && name ? (
        <Parallax
          scale={1.2}
          spotGlareSizePercent={130}
          shadow="0 0 2rem rgba(218, 165, 32, 0.5)"
        >
          <img className="parallaxImg img-fluid" src={img} alt={name} />
        </Parallax>
      ) : (
        <Parallax
          scale={1.2}
          spotGlareSizePercent={120}
          shadow="0 0 2.5rem rgba(218, 165, 32, 2)"
        >
          <img
            className="parallaxImgError img-fluid"
            src="/img/NotFoundCard.jpeg"
            alt="aconteceu um erro "
          />
        </Parallax>
      )}
    </>
  );
}
