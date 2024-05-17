import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { Search } from "@/components/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ygo App",
  description: "Projeto pessoal com next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
          <nav>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <Link href={"/"}>Inicio</Link>
              <Link href={"/filtro"}>Filtro</Link>
            </div>
            <div>
              <Search />
            </div>
          </nav>
        </header>
        {children}
        <footer>
          <div>
            ///////////////////////////////////////////////////////////////////////////////////////////
          </div>
        </footer>
      </body>
    </html>
  );
}
