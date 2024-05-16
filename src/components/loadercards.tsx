"use client";
import { allcardsOffset } from "@/actions/allcardsOffset";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "./loader";
import { CardList } from "./cardlist";

export function CarregarCards() {
  const [cards, setCards] = useState<individualCard[]>([]);
  const [page, setPage] = useState(12);
  const [ref, inView] = useInView();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  //
  const loadMoreCards = async () => {
    await delay(1300);
    const nextPage = page;
    const newProducts = (await allcardsOffset(nextPage)) ?? [];
    setCards((prevProducts: individualCard[]) => [
      ...prevProducts,
      ...newProducts,
    ]);
    setPage(nextPage + 12);
  };
  useEffect(() => {
    if (inView) {
      loadMoreCards();
    }
  }, [inView]);
  return (
    <>
      <CardList cards={cards} />
      <div ref={ref}>
        <Loader />
      </div>
    </>
  );
}
