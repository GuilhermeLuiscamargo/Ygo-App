import { allcardsfetch } from "@/actions/allcardsfetch";
interface props {
  params: { cardId: number };
}
export default async function AboutCard({ params }: props) {
  const data = await allcardsfetch();
  const card = data?.filter((cards) => cards.id == params.cardId)[0];
  console.log(card);
  return (
    <>
      {card ? (
        <div>
          <img src={card.card_images[0].image_url_small} alt={card.name} />
          <p>{card.name}</p>
          <p>Type: {card.type}</p>
          <p>Typing: {card.race}</p>
          {card.archetype ? <p>archetype: {card.archetype}</p> : null}
          {card.attribute ? <p>Atributo: {card.attribute}</p> : null}
          {card.level || card.linkval ? (
            <p>
              Level/Rank/Link: {card.level}
              {card.linkval}
            </p>
          ) : null}
          {card.scale ? <p>Escala Pêndulo:{card.scale}</p> : null}

          {card.pend_desc ? (
            <div>
              <p>[Efeito Pendulum ]{card.pend_desc}</p>
              <p>[Efeito Monstro]{card.monster_desc}</p>
            </div>
          ) : (
            <p>[Descrição] {card.desc}</p>
          )}
          {card.atk >= 0 && card.def >= 0 ? (
            <p>
              Atk: {card.atk} Def: {card.def}
            </p>
          ) : card.atk >= 0 ? (
            <p>Atk: {card.atk}</p>
          ) : null}
          <p></p>
          <p></p>
          <p></p>
        </div>
      ) : (
        <p>não existe</p>
      )}
    </>
  );
}
