import { allcardsOffset } from "@/actions/allcardsOffset";
import { CarregarCards } from "@/components/loadercards";
import { CardList } from "../components/cardlist";

const Home = async () => {
  const data = await allcardsOffset(24, 0);

  return (
    <>
      <main className="inicioMainTag container-fluid d-flex justify-content-center pt-4 pb-4">
        <div className="allCardsInicio w-75 overflow-auto d-flex flex-wrap justify-content-center p-2 gap-3 ">
          <CardList cards={data} />
          <CarregarCards inicialPage={24} />
        </div>
      </main>
    </>
  );
};
export default Home;
