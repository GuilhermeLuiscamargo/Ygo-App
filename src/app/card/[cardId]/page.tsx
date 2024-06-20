import { Cardsbyname } from "@/actions/cardsbyname";
import { getAtributteImg } from "@/actions/getAtributte";
import { getType } from "@/actions/getType";
import { LuSwords, LuShield } from "react-icons/lu";
interface props {
  params: {
    cardId: string;
  };
}

export default async function AboutCard({ params }: props) {
  const cardUrlName = params.cardId;
  const card = await Cardsbyname(cardUrlName);
  const atributteImg = getAtributteImg(card?.attribute);
  const raceImg = getType(card?.race);

  return (
    <main className="mainAboutCardTag">
      {card ? (
        <div key={card.id}>
          <img src={card.card_images[0].image_url_small} alt={card.name} />
          <p>{card.name}</p>
          <p>Type: {card.type}</p>
          <p>
            Typing:<img width="20px" src={raceImg} alt={card.race}></img>{" "}
            {card.race}
          </p>
          {card.archetype ? <p>archetype: {card.archetype}</p> : null}
          {card.attribute ? (
            <p>
              <img width="20px" src={atributteImg} alt={card.attribute} />
              {card.attribute}
            </p>
          ) : null}

          {card.level || card.linkval ? (
            <p>
              Level/Rank/Link:{" "}
              <img width="20px" src="/img/level.svg" alt="level/rank/link" />
              {card.level}
              {card.linkval}
            </p>
          ) : null}
          {card.scale ? <p>Escala Pêndulo:{card.scale}</p> : null}

          {card.pend_desc ? (
            <div>
              <p>
                [Efeito Pendulum ]
                <br />
                {card.pend_desc}
              </p>
              <p>
                [Efeito Monstro]
                <br />
                {card.monster_desc}
              </p>
            </div>
          ) : (
            <p>
              [Descrição]
              <br /> {card.desc}
            </p>
          )}
          {card.atk >= 0 && card.def >= 0 ? (
            <p>
              ATK: <LuSwords />
              {card.atk} DEF:
              <LuShield /> {card.def}
            </p>
          ) : card.atk >= 0 ? (
            <div>
              <p>
                ATK: <LuSwords />
                {card.atk}
              </p>{" "}
              <span>LINK-{card.linkval}</span>
            </div>
          ) : null}
        </div>
      ) : (
        <img width="600px" src="/img/404.jpeg" alt="aconteceu um erro " />
      )}
    </main>
  );
}
