import loadingImg from "../../public/img/LoadingCard.jpg";
import Image from "next/image";
import Link from "next/link";

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
            );
          })
        : null}
    </>
  );
}
