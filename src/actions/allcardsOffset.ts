"use server";
export const allcardsOffset = async (QtdCards: number, InicialPage: number) => {
  try {
    const res = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=${QtdCards}&offset=${InicialPage}`
    );
    const { data } = await res.json();
    return data as IindividualCard[];
  } catch (error) {
    console.error("erro no fetch data", error);
    return undefined;
  }
};
