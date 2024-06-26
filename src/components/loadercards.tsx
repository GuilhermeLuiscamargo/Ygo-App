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
  const [loader, setLoader] = useState<boolean>(true);
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreCards = async () => {
    await delay(250);
    const nextPage = page;
    const QtdCards = 24;
    if (filter) {
      const newCards = (await allcardsOffset(QtdCards, nextPage, filter)) ?? [];
      setCards((prevCards: individualCard[]) => [...prevCards, ...newCards]);
      setPage(nextPage + QtdCards);
      !newCards.length ? setLoader(!loader) : null;
    } else {
      const newCards = (await allcardsOffset(QtdCards, nextPage)) ?? [];
      setCards((prevCards: individualCard[]) => [...prevCards, ...newCards]);
      setPage(nextPage + QtdCards);
      !newCards.length ? setLoader(!loader) : null;
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
      {loader ? (
        <div className=" text-center w-100 " ref={ref}>
          <Loader />
        </div>
      ) : null}
    </>
  );
}
