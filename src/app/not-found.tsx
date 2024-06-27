"use client";

import Parallax from "react-next-parallax";

export default function NotFound() {
  return (
    <main className="container-fluid d-flex flex-column  align-items-center pt-4 pb-4 gap-5">
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
    </main>
  );
}
