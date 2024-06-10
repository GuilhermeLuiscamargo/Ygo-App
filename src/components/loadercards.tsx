"use client";
import { allcardsOffset } from "@/actions/allcardsOffset";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Loader } from "./loader";
import { CardList } from "./cardlist";

export function CarregarCards({ filter }: any) {
  const [cards, setCards] = useState<individualCard[]>([]);
  const [page, setPage] = useState(12);
  const [ref, inView] = useInView();
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  //
  const loadMoreCards = async () => {
    await delay(1300);
    const nextPage = page;
    if (filter) {
      const newCards = (await allcardsOffset(nextPage, 12, filter)) ?? [];
      setCards((prevCards: individualCard[]) => [...prevCards, ...newCards]);
      setPage(nextPage + 12);
    } else {
      const newCards = (await allcardsOffset(nextPage, 12)) ?? [];
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
