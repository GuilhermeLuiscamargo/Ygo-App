"use client";
import { allcardsOffset } from "@/actions/allcardsOffset";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "./loader";
import { CardList } from "./cardlist";

export function CarregarCards({ inicialPage, filter }: loadcards) {
  const [cards, setCards] = useState<individualCard[]>([]);
  const [page, setPage] = useState(inicialPage);
  const [ref, inView] = useInView();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  //
  const loadMoreCards = async () => {
    await delay(1300);
    const nextPage = page;
    if (filter) {
      const newCards = (await allcardsOffset(12, nextPage, filter)) ?? [];
      setCards((prevCards: individualCard[]) => [...prevCards, ...newCards]);
      setPage(nextPage + 12);
    } else {
      const newCards = (await allcardsOffset(12, nextPage)) ?? [];
      setCards((prevCards: individualCard[]) => [...prevCards, ...newCards]);
      setPage(nextPage + 12);
    }
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
