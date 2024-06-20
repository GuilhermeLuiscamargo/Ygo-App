import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import type { Metadata } from "next";
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
        <header className="sticky-top">
          <nav className="navbar align-items-center">
            <img
              className="img-fluid"
              src="img/exodiaLogo.jpg"
              alt="Logo"
              width="90px"
            />
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
        <footer className="footerLayout w-100 bg-danger">
          <div>
            ///////////////////////////////////////////////////////////////////////////////////////////
          </div>
        </footer>
      </body>
    </html>
  );
}
