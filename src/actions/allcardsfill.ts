"use server";
export const allcardsfill = async (
  num: number,
  offset: number,
  filter?: string
) => {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  try {
    const res = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=${num}&offset=${offset}${filter}`
    );
    const data = await res.json();
    return data as individualCardFill;
  } catch (error) {
    console.error("erro no fetch data", error);
    return undefined;
  }
};
