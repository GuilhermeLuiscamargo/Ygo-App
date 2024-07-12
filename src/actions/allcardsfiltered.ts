"use server";
export const allcardsfiltered = async (
  QtdCards: number,
  InicialPage: number,
  filter?: string
) => {
  try {
    const res = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=${QtdCards}&offset=${InicialPage}${filter}`
    );
    const data = await res.json();
    return data as IcardsFiltered;
  } catch (error) {
    console.error("erro no fetch data", error);
    return undefined;
  }
};
