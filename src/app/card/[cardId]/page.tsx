import Image from "next/image";
import rank from "../../../../public/img/marcadores/rank.webp";
import level from "../../../../public/img/marcadores/level.svg";
import scale from "../../../../public/img/marcadores/scale.webp";
import linkMark from "../../../../public/img/marcadores/LinkMark.png";
import { CardsbyId } from "@/actions/cardsId";
import { getAtributteImg } from "@/actions/getAtributte";
import { getType } from "@/actions/getType";
import { LuSwords, LuShield } from "react-icons/lu";
import ParallaxImg from "./paralaxImg";

interface props {
  params: {
    cardId: string;
  };
}

export default async function AboutCard({ params }: props) {
  const cardUrlName = params.cardId;
  const card = await CardsbyId(cardUrlName);
  const atributteImg = getAtributteImg(card?.attribute);
  const raceImg = getType(card?.race);
  return (
    <main className="mainAboutCardTag container-fluid">
      {card ? (
        <div
          key={card.id}
          className="d-flex align-items-center container gap-3"
        >
          <ParallaxImg
            img={card.card_images[0].image_url_small}
            name={card.name}
          />

          <div className="cardInfoDiv container text-warning ">
            <h1>{card.name}</h1>
            <ul className="tableInfo w-75 d-flex flex-wrap  row-gap-3 column-gap-3">
              <li className="w-25">
                <span>Type</span>
                <p>{card.type}</p>
              </li>
              <li className="w-25">
                <span>Typing</span>
                <p>
                  <Image
                    src={raceImg}
                    alt={card.race}
                    className="iconCard"
                    width={20}
                  />{" "}
                  {card.race}
                </p>
              </li>
              {card.archetype ? (
                <li className="w-25">
                  <span>Archetype</span>
                  <p> {card.archetype}</p>
                </li>
              ) : null}

              {card.attribute ? (
                <li className="w-25">
                  <span>Attribute</span>
                  <p>
                    <Image
                      src={atributteImg}
                      alt={card.attribute}
                      className="iconCard"
                    />{" "}
                    {card.attribute}
                  </p>
                </li>
              ) : null}
              {(card.level && card.frameType === "xyz_pendulum") ||
              card.frameType === "xyz" ? (
                <li className="w-25">
                  <span>Rank</span>
                  <p>
                    <Image src={rank} alt="rank" className="iconCard" />{" "}
                    {card.level}
                  </p>
                </li>
              ) : card.level ? (
                <li className="w-25 ">
                  <span>Level</span>
                  <p>
                    <Image src={level} alt="Level" className="iconCard" />{" "}
                    {card.level}
                  </p>
                </li>
              ) : card.linkval ? (
                <li className="w-25">
                  <span>LinkVal</span>
                  <p>
                    <Image src={linkMark} alt="linkVal" className="iconCard" />{" "}
                    {card.linkval}
                  </p>
                </li>
              ) : null}

              {card.scale ? (
                <li className="w-25">
                  <span>Escala Pêndulo</span>
                  <p>
                    <Image src={scale} alt="Escala" className="iconCard" />{" "}
                    {card.scale}
                  </p>
                </li>
              ) : null}
              {card.atk >= 0 && card.def >= 0 ? (
                <>
                  <li className="w-25">
                    <span>ATK</span>
                    <p>
                      <LuSwords /> {card.atk}
                    </p>
                  </li>
                  <li className="w-25">
                    <span>DEF</span>
                    <p>
                      <LuShield /> {card.def}
                    </p>
                  </li>
                </>
              ) : card.atk >= 0 ? (
                <li className="w-25">
                  <span>ATK</span>
                  <p>
                    <LuSwords />
                    {card.atk}
                  </p>
                </li>
              ) : null}
            </ul>
            <div className="CardDesc">
              {card.pend_desc ? (
                <div>
                  <span className="h5">[Pendulum Effect]</span>
                  <p>{card.pend_desc}</p>
                  <span className="h5">[Efeito Monstro]</span>
                  <p>{card.monster_desc}</p>
                </div>
              ) : (
                <div>
                  <p>
                    [Descrição/Efeito Monstro]
                    <br /> {card.desc}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center container ">
          <ParallaxImg />
        </div>
      )}
    </main>
  );
}
