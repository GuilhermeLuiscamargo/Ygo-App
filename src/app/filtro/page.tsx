import Filter from "./filter";
import { allcardsfiltered } from "@/actions/allcardsfiltered";

export default async function FilterPage() {
  const res = await allcardsfiltered(28, 0);
  return (
    <>
      <Filter data={res?.data} error={res?.error} />
    </>
  );
}
