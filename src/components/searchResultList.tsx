import { getAtributteImg } from "@/actions/getAtributte";
import { getType } from "@/actions/getType";
import Link from "next/link";

export default function SearchResultList({ cardNames }: searchCardsProps) {
  return (
    <div className="searchResultList overflow-auto w-25 mt-1 pt-2 d-flex flex-column gap-2 ">
      {cardNames?.length ? (
        cardNames.map((card) => {
          const attributeImg = getAtributteImg(card.attribute);
          const raceImg = getType(card.race);
          return (
            <Link
              href={`/card/${card.name}`}
              key={`search=${card.id}`}
              className="itemResultList d-flex justify-content-between align-items-center link-warning"
            >
              <img
                src={card.img}
                alt={card.name}
                className="itemResultListImg"
              />
              <p>{card.name}</p>
              <div className="d-flex gap-1">
                {card.attribute ? (
                  <img
                    src={attributeImg}
                    alt={card.attribute}
                    className="itemResultListImgDiv img-fluid"
                  />
                ) : null}

                <img
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
    </div>
  );
}
