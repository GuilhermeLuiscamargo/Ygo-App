import Link from "next/link";

export function CardList({ cards }: individualCardProps) {
  return (
    <>
      {cards ? (
        cards.map((card) => {
          return (
            <Link
              href={`/card/${card.name}`}
              key={card.id}
              className="cardOfCardList"
            >
              {card.card_images[0].image_url ? (
                <img
                  className="cardOfCardListImg img-fluid"
                  src={card.card_images[0].image_url}
                  alt={card.name}
                />
              ) : (
                <img
                  className="ardOfCardListImg img-fluid"
                  src="img/LoadingCard.jpg"
                  alt={card.name}
                />
              )}
            </Link>
          );
        })
      ) : (
        <div className="cardListEmpty">não há cartas no momento</div>
      )}
    </>
  );
}
