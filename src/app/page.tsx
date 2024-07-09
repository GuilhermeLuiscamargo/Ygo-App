import "../style/inicialPage.css";
import { allcardsOffset } from "@/actions/allcardsOffset";
import { CarregarCards } from "@/components/loadercards";
import { CardList } from "../components/cardlist";

const Home = async () => {
  const data = await allcardsOffset(24, 0);

  return (
    <>
      <main className="inicioMainTag container-fluid d-flex justify-content-center pt-4 pb-4">
        <div className="allCardsInicio w-75 overflow-scroll d-flex flex-wrap  p-2 gap-3 ">
          {data ? (
            <>
              <CardList cards={data} />
              <CarregarCards inicialPage={24} />
            </>
          ) : (
            <p className=" text-warning h3">
              Aconteceu um erro inesperado recarregue a pagina
            </p>
          )}
        </div>
      </main>
    </>
  );
};
export default Home;
