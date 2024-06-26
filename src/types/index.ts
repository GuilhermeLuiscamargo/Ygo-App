interface individualCard {
  id: number;
  name: string;
  type: string;
  frameType: string;
  desc: string;
  pend_desc?: string;
  monster_desc?: string;
  atk: number;
  def: number;
  level?: number;
  linkval?: number;
  scale?: number;
  race: string;
  attribute: string;
  archetype?: string;
  card_images: [
    {
      image_url: string;
      image_url_small: string;
      image_url_cropped: string;
    }
  ];
}
interface individualCardProps {
  cards: individualCard[] | undefined;
}

interface searchCards {
  name: string;
  race: string;
  attribute?: string;
  img: string;
  id: number;
}
interface searchCardsProps {
  cardNames: searchCards[] | undefined;
}
interface fillInputs {
  type?: string | undefined;
  atk?: string;
  def?: string;
  level?: string;
  linkval?: string;
  scale?: string;
  race?: string;
  attribute?: string;
  archetype?: string;
}
interface loadcards {
  inicialPage: number;
  filter?: string;
}
type attributeFillters = string | undefined;
type imgParalax = { img?: string; name?: string };
