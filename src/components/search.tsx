//import { IoSearch } from "react-icons/io5";
import SearchList from "./searchlist";
export default function CardSearch() {
  async function Search(search: string) {
    "use server";
    const cardRes = await await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php"
    );
    const res: { data: individualCard[] } = await cardRes.json();
    let resFill = res.data
      .filter(
        (p: {
          name: string;
          race: string;
          attribute: string;
          card_images: [{ image_url_cropped: string }];
        }) => p.name.toLowerCase().includes(search.toLowerCase())
      )
      .map(
        (p: {
          name: string;
          race: string;
          attribute: string;
          card_images: [{ image_url_cropped: string }];
        }) => {
          return {
            name: p.name,
            attribute: p.attribute,
            race: p.race,
            img: p.card_images[0].image_url_cropped,
          };
        }
      )
      .slice(0, 7);
    return resFill;
  }
  return (
    <div>
      <SearchList search={Search} />;
    </div>
  );
}
