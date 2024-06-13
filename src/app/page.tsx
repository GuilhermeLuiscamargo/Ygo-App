import { allcardsOffset } from "@/actions/allcardsOffset";
import { CarregarCards } from "@/components/loadercards";
import { CardList } from "../components/cardlist";

const Home = async () => {
  const data = await allcardsOffset(26, 0);

  return (
    <>
      <main className="inicioMainTag">
        <div className="allCardsInicio">
          <CardList cards={data} />
          <CarregarCards inicialPage={26} />
        </div>
      </main>
    </>
  );
};
export default Home;
