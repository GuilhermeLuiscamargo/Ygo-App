"use client";
import Parallax from "react-next-parallax";
import NotFoundImg from "../../../../public/img/NotFoundCard.jpeg";
import Image from "next/image";

export default function ParallaxImg({ img, name }: IimgParalax) {
  return (
    <>
      {img && name ? (
        <Parallax
          scale={1.2}
          spotGlareSizePercent={130}
          shadow="0 0 2rem rgba(218, 165, 32, 0.5)"
        >
          <Image
            className="parallaxImg img-fluid"
            src={img}
            alt={name}
            width={250}
            height={250}
          />
        </Parallax>
      ) : (
        <Parallax
          scale={1.2}
          spotGlareSizePercent={120}
          shadow="0 0 2.5rem rgba(218, 165, 32, 2)"
        >
          <Image
            className="parallaxImgError img-fluid"
            src={NotFoundImg}
            alt="aconteceu um erro "
            priority={true}
          />
        </Parallax>
      )}
    </>
  );
}
