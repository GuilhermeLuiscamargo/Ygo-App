export const CardsbyId = async (name: string | number) => {
  const idcard = Number(name);
  if (Number.isNaN(idcard)) {
    try {
      const res = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?&name=${name}`
      );
      const { data } = await res.json();
      return data[0] as individualCard;
    } catch (error) {
      return null;
    }
  } else {
    try {
      const res = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?&id=${name}`
      );
      const { data } = await res.json();
      return data[0] as individualCard;
    } catch (error) {
      return null;
    }
  }
};
