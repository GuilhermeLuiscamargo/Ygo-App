import Link from "next/link";
import { NULL } from "sass";

export function CardList({ cards }: individualCardProps) {
  return (
    <>
      {cards
        ? cards.map((card) => {
            return (
              <Link
                href={`/card/${card.id}`}
                key={card.id}
                className="cardOfCardList"
                title={card.name}
              >
                {card.card_images[0].image_url ? (
                  <img
                    className="cardOfCardListImg img-fluid"
                    src={card.card_images[0].image_url}
                    alt={card.name}
                  />
                ) : (
                  <img
                    className="ardOfCardListImg img-fluid placeholder"
                    src="img/LoadingCard.jpg"
                    alt={card.name}
                  />
                )}
              </Link>
            );
          })
        : null}
    </>
  );
}
