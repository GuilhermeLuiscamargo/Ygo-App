import { allcardsOffset } from "@/actions/allcardsOffset";
import { CarregarCards } from "@/components/loadercards";
import { CardList } from "../components/cardlist";

const Home = async () => {
  const data = await allcardsOffset(0);

  return (
    <>
      <main>
        <CardList cards={data} />
        <CarregarCards />
      </main>
    </>
  );
};
export default Home;
