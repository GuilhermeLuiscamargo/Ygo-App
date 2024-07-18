import rank from "../../public/img/marcadores/rank.webp";
import level from "../../public/img/marcadores/level.svg";
import scale from "../../public/img/marcadores/scale.webp";
import linkMark from "../../public/img/marcadores/LinkMark.png";
import { getAtributteImg } from "@/actions/getAtributte";
import Image from "next/image";
import { getType } from "@/actions/getType";

export default function ModalCard({ isOpen, card }: Imodal) {
  const atributeImg = getAtributteImg(card.attribute);
  const typeImg = getType(card.race);
  if (isOpen === card.id) {
    return (
      <div className="SpanModalCard  text-white">
        <div className="nameLineModal w-100">
          <strong>
            <p className=" align-self-center">{card.name}</p>
          </strong>
        </div>
        <div className="attributeTypeRaceLineModal">
          {(card.frameType === "spell" || card.frameType === "trap") && (
            <span className=" d-flex gap-3 align-items-center ">
              <p>{card.type}</p>
              <p>
                <Image src={typeImg} alt={card.type} className="iconModalImg" />
                {card.race}
              </p>
            </span>
          )}
          {card.attribute && (
            <p>
              <Image
                src={atributeImg}
                alt={card.attribute}
                className="iconModalImg"
              />{" "}
              {card.attribute}
            </p>
          )}
        </div>
        {card.frameType !== "spell" && card.frameType !== "trap" && (
          <>
            <div className="levelRankScaleLineModal d-flex flex-column">
              <p>
                [{card.race}/{card.type}]
              </p>
              {card.frameType === "xyz" && (
                <p>
                  {" "}
                  <Image src={rank} alt="rank" className="iconModalImg" />
                  {card.level}
                </p>
              )}
              {card.frameType === "xyz_pendulum" && (
                <span className=" d-flex align-items-center justify-content-center gap-3">
                  <p>
                    <Image src={rank} alt="rank" className="iconModalImg" />
                    {card.level}
                  </p>
                  <p>
                    <Image src={scale} alt="scala" className="iconModalImg" />
                    {card.scale}
                  </p>
                </span>
              )}
              {card.frameType !== "xyz_pendulum" && card.scale && (
                <span className=" d-flex align-items-center justify-content-center gap-3">
                  <p>
                    <Image src={level} alt="level" className="iconModalImg" />
                    {card.level}
                  </p>
                  <p>
                    <Image src={scale} alt="scala" className="iconModalImg" />
                    {card.scale}
                  </p>
                </span>
              )}

              {!card.scale &&
                card.frameType !== "xyz" &&
                !card.linkval &&
                card.level && (
                  <span className=" d-flex align-items-center justify-content-center ">
                    <p>
                      <Image src={level} alt="level" className="iconModalImg" />
                      {card.level}
                    </p>
                  </span>
                )}
            </div>
            <div className="atkDefLineModal">
              {card.linkval && (
                <p>
                  ATK/{card.atk}{" "}
                  <Image src={linkMark} alt="link" className="iconModalImg" />{" "}
                  {card.linkval}
                </p>
              )}

              {card.atk >= 0 && card.def >= 0 && (
                <p>
                  ATK/{card.atk} DEF/{card.def}
                </p>
              )}
            </div>
          </>
        )}
        <div className="descriptionCardLineModal w-100">
          {card.pend_desc && (
            <>
              <p>
                <strong>[Pendulum effect]</strong>
                <br />
                {card.pend_desc}
              </p>
              <br />
              <p>
                <strong>[Monster effect]</strong>
                <br />
                {card.monster_desc}
              </p>
            </>
          )}
          {!card.pend_desc && (
            <>
              <p>
                <strong>[Description]</strong>
              </p>
              <p>{card.desc}</p>
            </>
          )}
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
