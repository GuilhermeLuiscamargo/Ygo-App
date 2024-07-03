"use server";
export const allcardsOffset = async (num: number, offset: number) => {
  try {
    const res = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=${num}&offset=${offset}`
    );
    const { data } = await res.json();
    return data as individualCard[];
  } catch (error) {
    console.error("erro no fetch data", error);
    return undefined;
  }
};
