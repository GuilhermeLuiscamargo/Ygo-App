import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import type { Metadata } from "next";
import logo from "../../public/img/exodiaLogo.jpg";
import Image from "next/image";
import Link from "next/link";
import CardSearch from "@/components/search";

export const metadata: Metadata = {
  title: "Yu-Gi-Oh App",
  description: "Projeto pessoal com NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="Pt-Br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="img/exodiaLogo.jpg"
          type="image/x-icon"
        />
      </head>
      <body>
        <div className="mainContainer container-fluid d-flex flex-column justify-content-between align-items-center">
          <header className="sticky-top">
            <nav className="navbar p-0">
              <Image src={logo} alt="logo" className="img-fluid" />
              <div className="d-flex gap-5 h5">
                <Link href={"/"} className="link-warning">
                  Inicio
                </Link>
                <Link href={"/filtro"} className="link-warning">
                  Filtro
                </Link>
              </div>
              <CardSearch />
            </nav>
          </header>
          {children}
          <footer className="footerLayout w-100 bg-warning container-fluid d-flex justify-content-center  p-3">
            <div className=" w-50 d-flex justify-content-between">
              <div className="Contato d-flex flex-column">
                <h2 className="">Contato</h2>
                <a
                  target="_blank"
                  href="mailto:guilhermeluiscamargoneto@gmail.com"
                >
                  Gmail-guilhermeluiscamargoneto@gmail.com
                </a>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5544984017260"
                >
                  Whatsapp
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/guilherme-luis-camargo-neto-49a40b2b1"
                >
                  Linkedin
                </a>
                <a
                  target="_blank"
                  href="https://github.com/GuilhermeLuiscamargo"
                >
                  Github
                </a>
              </div>
              <div className="Tecnologias d-flex flex-column">
                <h2>Tecnologias</h2>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                >
                  Html
                </a>
                <a
                  target="_blank"
                  href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                >
                  css
                </a>
                <a
                  target="_blank"
                  href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
                >
                  TypeScript
                </a>
                <a
                  target="_blank"
                  href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                >
                  Bootstrap
                </a>
                <a target="_blank" href="https://nextjs.org/docs">
                  NextJs
                </a>
                <a target="_blank" href="https://ygoprodeck.com/api-guide/">
                  Api Yu-Gi-Oh
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
