import SearchList from "./searchlist";

export default function CardSearch() {
  async function Search(search: string) {
    "use server";
    const cardRes = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    );
    const res: { data: IindividualCard[] } = await cardRes.json();
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    let resFill = res.data
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
      .map((p) => {
        return {
          id: p.id,
          name: p.name,
          attribute: p.attribute,
          race: p.race,
          img: p.card_images[0].image_url_cropped,
          alternativeImg: p.card_images[0].image_url_small,
        };
      })
      .slice(0, 10);
    return resFill;
  }
  return (
    <>
      <SearchList search={Search} />
    </>
  );
}
