"use client";
import "../style/notFound.css";
import Image from "next/image";
import errorImg from "../../public/img/404.jpeg";

import Parallax from "react-next-parallax";

export default function NotFound() {
  return (
    <main className="ParralaximgNotFoundDiv container-fluid d-flex justify-content-center pt-4 pb-4 ">
      <Parallax
        scale={1.1}
        spotGlareSizePercent={120}
        shadow="0 0 2.5rem rgba(255, 255, 255, 1.5)"
      >
        <Image
          src={errorImg}
          className="parallaxImgNotFound img-fluid"
          alt="Aconteceu um Erro"
        />
      </Parallax>
    </main>
  );
}
