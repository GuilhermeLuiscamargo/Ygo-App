"use server";
export const allcardsOffset = async (offset: number) => {
  try {
    const num: number = 12;
    const res = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt&num=${num}&offset=${offset}`
    );
    const { data } = await res.json();
    return data as individualCard[];
  } catch (error) {
    console.error("erro no fetch data", error);
    return null;
  }
};
