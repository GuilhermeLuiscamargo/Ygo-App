"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { allcardsOffset } from "@/actions/allcardsOffset";
import { CardList } from "./cardlist";
import { LoaderSpin } from "./loaderSpin";
import { allcardsfiltered } from "@/actions/allcardsfiltered";

export function LoaderCards({ QtdCards, inicialPage, filter }: Iloadcards) {
  const [cards, setCards] = useState<IindividualCard[]>([]);
  const [page, setPage] = useState(inicialPage);
  const [ref, inView] = useInView();
  const [loader, setLoader] = useState<boolean>(true);
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreCards = async () => {
    await delay(250);
    const nextPage = page;
    if (filter) {
      const res = await allcardsfiltered(QtdCards, nextPage, filter);
      const newCards = res?.data ? res.data : [];

      setCards((prevCards: IindividualCard[]) => [...prevCards, ...newCards]);
      setPage(nextPage + QtdCards);
      !newCards.length ? setLoader(!loader) : null;
    } else {
      const newCards = (await allcardsOffset(QtdCards, nextPage)) ?? [];
      setCards((prevCards: IindividualCard[]) => [...prevCards, ...newCards]);
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
      {loader && (
        <div className=" text-center w-100 " ref={ref}>
          <LoaderSpin classname="LoaderSpin" />
        </div>
      )}
    </>
  );
}
