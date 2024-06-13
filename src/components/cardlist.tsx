import Link from "next/link";

export function CardList({ cards }: individualCardProps) {
  return (
    <>
      {cards ? (
        cards.map((card) => {
          return (
            <Link key={card.id} href={`/card/${card.name}`}>
              {card.card_images[0].image_url ? (
                <img
                  key={card.id}
                  width="200px"
                  src={card.card_images[0].image_url}
                  alt={card.name}
                />
              ) : (
                <img
                  key={card.id}
                  width="200px"
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
