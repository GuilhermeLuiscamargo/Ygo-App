import "../style/inicialPage.css";
import { allcardsOffset } from "@/actions/allcardsOffset";
import { LoaderCards } from "@/components/loadercards";
import { CardList } from "../components/cardlist";

const Home = async () => {
  const data = await allcardsOffset(28, 0);

  return (
    <>
      <main className="inicioMainTag container-fluid d-flex justify-content-center pt-4 pb-4">
        <div className="allCardsInicio w-75 overflow-scroll d-flex flex-wrap  column-gap-3 row-gap-4 pt-3  justify-content-center">
          {data && (
            <>
              <CardList cards={data} />
              <LoaderCards inicialPage={28} QtdCards={28} />
            </>
          )}
          {!data && (
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
