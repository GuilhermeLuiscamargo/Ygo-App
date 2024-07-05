import rank from "../../public/img/marcadores/rank.webp";
import level from "../../public/img/marcadores/level.svg";
import scale from "../../public/img/marcadores/scale.webp";
import linkMark from "../../public/img/marcadores/LinkMark.png";
import { getAtributteImg } from "@/actions/getAtributte";
import Image from "next/image";
import { getType } from "@/actions/getType";

export default function ModalCard({ isOpen, card }: modal) {
  const atributeImg = getAtributteImg(card.attribute);
  const typeImg = getType(card.race);
  if (isOpen === card.id) {
    return (
      <div className="SpanModalCard text-warning ">
        <div className="line1 w-100">
          <strong>
            <p>{card.name}</p>
          </strong>
          {card.frameType === "spell" || card.frameType === "trap" ? (
            <span className=" d-flex gap-3 align-items-center">
              <p>{card.type}</p>
              <p>
                <Image src={typeImg} alt={card.type} className="iconModalImg" />
                {card.race}
              </p>
            </span>
          ) : (
            <>
              <p>
                <Image
                  src={atributeImg}
                  alt={card.attribute}
                  className="iconModalImg"
                />
                {card.attribute}
              </p>
            </>
          )}
        </div>
        {card.frameType !== "spell" && card.frameType !== "trap" ? (
          <>
            <div className="line2 ">
              <p>
                [{card.race}/{card.type}]
              </p>
              {card.frameType === "xyz" ? (
                <>
                  <p>
                    {" "}
                    <Image src={rank} alt="rank" className="iconModalImg" />
                    {card.level}
                  </p>
                </>
              ) : card.frameType === "xyz_pendulum" ? (
                <span className=" d-flex align-items-center gap-3">
                  <p>
                    <Image src={rank} alt="rank" className="iconModalImg" />
                    {card.level}
                  </p>
                  <p>
                    <Image src={scale} alt="scala" className="iconModalImg" />
                    {card.scale}
                  </p>
                </span>
              ) : card.level && card.scale >= 0 ? (
                <span className=" d-flex align-items-center gap-3">
                  <p>
                    <Image src={level} alt="level" className="iconModalImg" />
                    {card.level}
                  </p>
                  <p>
                    <Image src={scale} alt="scala" className="iconModalImg" />
                    {card.scale}
                  </p>
                </span>
              ) : card.level ? (
                <p>
                  <Image src={level} alt="level" className="iconModalImg" />
                  {card.level}
                </p>
              ) : null}
            </div>
            <div className="line3">
              {card.linkval ? (
                <p>
                  ATK/{card.atk}{" "}
                  <Image src={linkMark} alt="link" className="iconModalImg" />{" "}
                  {card.linkval}
                </p>
              ) : card.atk || card.atk >= 0 ? (
                <p>
                  ATK/{card.atk} DEF/{card.def}
                </p>
              ) : null}
            </div>
          </>
        ) : null}
        <div className="line4 w-100">
          {card.pend_desc ? (
            <>
              <p>
                [Pendulum effect]
                <br />
                {card.pend_desc}
              </p>
              <p>
                [Monster effect]
                <br />
                {card.monster_desc}
              </p>
            </>
          ) : (
            <p>{card.desc}</p>
          )}
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
