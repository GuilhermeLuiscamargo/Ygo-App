export const Cardsbyname = async (name: string | number) => {
  try {
    const res = await fetch(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?&name=${name}`
    );
    const { data } = await res.json();
    return data[0] as individualCard;
  } catch (error) {
    //console.error("erro no fetch data", error);
    return null;
  }
};
