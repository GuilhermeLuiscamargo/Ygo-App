"use client";
import "../style/cardList.css";
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
              <Link
                href={`/card/${card.id}`}
                title={card.name}
                className="flip-card flip-horizontal-left"
                key={card.id}
                onMouseOver={() => setOpen(card.id)}
                onMouseOut={() => setOpen(0)}
              >
                {card.card_images[0].image_url ? (
                  <div className="cardOfCardList flip-card-inner">
                    <div className="flip-card-front">
                      <Image
                        className="cardOfCardListImg img-fluid"
                        src={card.card_images[0].image_url}
                        alt={card.name}
                        width={150}
                        height={214}
                      />
                    </div>
                    <div className="flip-card-back">
                      <ModalCard card={card} isOpen={open} />
                    </div>
                  </div>
                ) : (
                  <Image
                    className="loadingCardOfCardList img-fluid placeholder"
                    src={loadingImg}
                    alt={card.name}
                    style={{ width: "auto", height: "auto" }}
                  />
                )}
              </Link>
            );
          })
        : null}
    </>
  );
}
