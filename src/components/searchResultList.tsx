import { getAtributteImg } from "@/actions/getAtributte";
import { getType } from "@/actions/getType";
import Link from "next/link";
import Image from "next/image";

export default function SearchResultList({ cardNames }: searchCardsProps) {
  return (
    <>
      {cardNames?.length ? (
        cardNames.map((card) => {
          const attributeImg = getAtributteImg(card.attribute);
          const raceImg = getType(card.race);
          return (
            <Link
              href={`/card/${card.id}`}
              key={`search=${card.id}`}
              type="submit"
              className="itemResultList d-flex justify-content-between align-items-center link-warning"
              title={card.name}
            >
              <Image
                src={card.img}
                alt={card.name}
                className="itemResultListImg"
                placeholder="blur"
                blurDataURL={card.img}
                width={70}
                height={70}
              />
              <p>{card.name}</p>
              <div className="d-flex gap-1">
                {card.attribute ? (
                  <Image
                    src={attributeImg}
                    alt={card.attribute}
                    className="itemResultListImgDiv img-fluid"
                  />
                ) : null}

                <Image
                  src={raceImg}
                  alt={card.race}
                  className=" itemResultListImgDiv img-fluid"
                />
              </div>
            </Link>
          );
        })
      ) : (
        <p className=" text-center text-warning">Card não encontrado!!!</p>
      )}
    </>
  );
}
