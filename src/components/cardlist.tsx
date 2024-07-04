"use client";
import loadingImg from "../../public/img/LoadingCard.jpg";
import Image from "next/image";
import Link from "next/link";
import ModalCard from "./modalCard";
import { useState } from "react";

export function CardList({ cards }: individualCardProps) {
  const [open, setOpen] = useState<number>(0);
  const mousePosition = (e: MouseEvent, card: individualCard) => {
    setOpen(card.id);
    alert(e.clientX);
  };
  return (
    <>
      {cards
        ? cards.map((card) => {
            return (
              <>
                <Link
                  href={`/card/${card.id}`}
                  key={card.id}
                  className="cardOfCardList"
                  title={card.name}
                  onMouseOver={() => setOpen(card.id)}
                  onMouseOut={() => setOpen(0)}
                >
                  {card.card_images[0].image_url ? (
                    <Image
                      className="cardOfCardListImg img-fluid"
                      src={card.card_images[0].image_url}
                      alt={card.name}
                      placeholder="blur"
                      blurDataURL={card.card_images[0].image_url}
                      width={150}
                      height={214}
                    />
                  ) : (
                    <Image
                      className="loadingCardOfCardList img-fluid placeholder"
                      src={loadingImg}
                      alt={card.name}
                    />
                  )}
                </Link>
                <ModalCard isOpen={open} card={card} />
              </>
            );
          })
        : null}
    </>
  );
}
