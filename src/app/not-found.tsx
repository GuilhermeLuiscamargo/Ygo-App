"use client";
import Image from "next/image";
import errorImg from "../../public/img/404.jpeg";

import Parallax from "react-next-parallax";

export default function NotFound() {
  return (
    <main className="container-fluid d-flex flex-column  align-items-center pt-4 pb-4 gap-5">
      <Parallax
        scale={1.1}
        spotGlareSizePercent={120}
        shadow="0 0 2.5rem rgba(255, 255, 255, 1.5)"
      >
        <Image
          src={errorImg}
          className="parallaxImgError img-fluid"
          alt="Aconteceu um Erro"
        />
      </Parallax>
    </main>
  );
}
