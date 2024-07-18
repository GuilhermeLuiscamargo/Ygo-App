/*Card----------------------------------------------------*/
interface IindividualCard {
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
  scale: number;
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
interface IindividualCardProps {
  cards: IindividualCard[] | undefined;
}
/*filter page----------------------------------------------------*/
interface IcardsFiltered {
  data?: IindividualCard[];
  error?: string | undefined;
}
interface IfilterInputsObj {
  type?: string;
  atk?: string;
  def?: string;
  level?: string;
  linkval?: string;
  scale?: string;
  race?: string;
  attribute?: string;
  archetype?: string;
  format?: string;
}
/*search input----------------------------------------------------*/
interface IsearchCards {
  name: string;
  race: string;
  attribute?: string;
  img: string;
  alternativeImg: string;
  id: number;
}
interface IsearchCardsProps {
  cardNames: IsearchCards[] | undefined;
}
/*loader cards----------------------------------------------------*/
interface Iloadcards {
  QtdCards: number;
  inicialPage: number;
  filter?: string;
}

/*cardList----------------------------------------------------*/
interface Imodal {
  isOpen: number;
  card: IindividualCard;
}
/*individual card page----------------------------------------------------*/
interface IaboutCardprop {
  params: {
    cardId: string;
  };
}
interface IimgParalax {
  img?: string;
  name?: string;
}
