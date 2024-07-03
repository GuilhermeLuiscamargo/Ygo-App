"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { allcardsOffset } from "@/actions/allcardsOffset";
import { CardList } from "./cardlist";
import { LoaderSpin } from "./loaderSpin";
import { allcardsfill } from "@/actions/allcardsfill";

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
    console.log(filter);
    if (filter) {
      const res = await allcardsfill(QtdCards, nextPage, filter);
      const newCards = res?.data ? res.data : [];
      console.log(res, newCards);
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
          <LoaderSpin classname="LoaderSpinCardLoader" />
        </div>
      ) : null}
    </>
  );
}
