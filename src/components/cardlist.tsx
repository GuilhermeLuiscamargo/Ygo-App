"use client";
import "../style/cardList.css";
import loadingImg from "../../public/img/LoadingCard.jpg";
import Image from "next/image";
import Link from "next/link";
import ModalCard from "./modalCard";
import { useState } from "react";

export function CardList({ cards }: { cards: IindividualCard[] | undefined }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <>
      {cards &&
        cards.map((card) => (
          <Link
            href={`/card/${card.id}`}
            title={card.name}
            className="cardOfCardList flip-card flip-horizontal-left"
            key={card.id}
            onMouseOver={() => setOpen(card.id)}
            onMouseOut={() => setOpen(0)}
          >
            {card.card_images[0].image_url && (
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    className="cardOfCardListImg "
                    src={card.card_images[0].image_url}
                    alt={card.name}
                    width={150}
                    height={220}
                  />
                </div>
                <div className="flip-card-back">
                  <ModalCard card={card} isOpen={open} />
                </div>
              </div>
            )}
            {!card.card_images[0].image_url && (
              <Image
                className="loadingCardOfCardList img-fluid placeholder"
                src={loadingImg}
                alt={card.name}
              />
            )}
          </Link>
        ))}
    </>
  );
}
