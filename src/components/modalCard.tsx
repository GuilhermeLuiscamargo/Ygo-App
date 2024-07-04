import rank from "../../public/img/marcadores/rank.webp";
import level from "../../public/img/marcadores/level.svg";
import scale from "../../public/img/marcadores/scale.webp";
import linkMark from "../../public/img/marcadores/LinkMark.png";
import { getAtributteImg } from "@/actions/getAtributte";
import Image from "next/image";

export default function ModalCard({ isOpen, card }: modal) {
  const atributeImg = getAtributteImg(card.attribute);
  if (isOpen === card.id) {
    return (
      <div className="SpanModalCard text-warning d-flex">
        <div>
          <p>{card.name}</p>
          <p>
            <Image src={atributeImg} alt={card.attribute} />
            {card.attribute}
          </p>
        </div>
        <div>
          <p>
            [{card.race}/{card.type}]
          </p>

          {card.frameType === "xyz" ? (
            <>
              <p>
                {" "}
                <Image src={rank} alt="rank" />
                {card.level}
              </p>
            </>
          ) : card.frameType === "xyz_pendulum" ? (
            <>
              <p>
                <Image src={rank} alt="rank" />
                {card.level}
                <Image src={scale} alt="scala" />
                {card.scale}
              </p>
            </>
          ) : card.level && card.scale ? (
            <>
              <p>
                <Image src={level} alt="level" />
                {card.level}
                <Image src={scale} alt="scala" />
                {card.scale}
              </p>
            </>
          ) : card.level ? (
            <p>
              <Image src={level} alt="level" />
              {card.level}
            </p>
          ) : null}

          <p>{card.scale}</p>
        </div>
        <div>
          {card.linkval ? (
            <p>
              ATK/{card.atk} LINK-{card.linkval}
            </p>
          ) : card.atk || card.atk >= 0 ? (
            <p>
              ATK/{card.atk} DEF/{card.def}
            </p>
          ) : //fazer logica das caracteristicas do modal atk 0 é considerado undefined
          null}
          <p>{card.atk}</p>
          <p>{card.def}</p>
          <p>{card.linkval}</p>
        </div>
        <div>
          <p>{card.pend_desc}</p>
          <p>{card.monster_desc}</p>
          <p>{card.desc}</p>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
