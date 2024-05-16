export const allcardsfetch = async () => {
  try {
    const res = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt`
    );
    const { data } = await res.json();
    return data as individualCard[];
  } catch (error) {
    //console.error("erro no fetch data", error);
    return null;
  }
};
