"use client";
import loadingImg from "../../public/img/LoadingCard.jpg";
import Image from "next/image";
import Link from "next/link";
import ModalCard from "./modalCard";
import { useState } from "react";

export function CardList({ cards }: individualCardProps) {
  const [open, setOpen] = useState<number>(0);

  return (
    <>
      {cards
        ? cards.map((card) => {
            return (
              <div
                key={card.id}
                className="cardOfCardList"
                onMouseOver={() => setOpen(card.id)}
                onMouseOut={() => setOpen(0)}
              >
                <ModalCard card={card} isOpen={open} />
                <Link href={`/card/${card.id}`} title={card.name}>
                  {card.card_images[0].image_url ? (
                    <Image
                      className="cardOfCardListImg img-fluid"
                      src={card.card_images[0].image_url}
                      alt={card.name}
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
              </div>
            );
          })
        : null}
    </>
  );
}
