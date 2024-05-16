import Link from "next/link";

export function CardList({ cards }: individualCardProps) {
  return (
    <>
      <div>
        {cards ? (
          cards.map((card) => {
            return (
              <Link href={`/card/${card.id}`}>
                <img
                  key={card.id}
                  width="400px"
                  src={card.card_images[0].image_url}
                  alt={card.name}
                />
              </Link>
            );
          })
        ) : (
          <div>não há cartas no momento</div>
        )}
      </div>
    </>
  );
}
