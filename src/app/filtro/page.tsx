import { allcardsOffset } from "@/actions/allcardsOffset";
import Filtro from "./filter";

export default async function ListFilter() {
  const res = await allcardsOffset(24, 0);
  return (
    <>
      <Filtro cards={res} />
    </>
  );
}
