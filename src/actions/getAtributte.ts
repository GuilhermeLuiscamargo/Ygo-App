export function getAtributteImg(attribute: string | undefined) {
  switch (attribute) {
    case "LIGHT":
      return "/img/atributos/LIGHT.svg";
    case "EARTH":
      return "/img/atributos/EARTH.svg";
    case "DARK":
      return "/img/atributos/DARK.svg";
    case "FIRE":
      return "/img/atributos/FIRE.svg";
    case "WATER":
      return "/img/atributos/WATER.svg";
    case "DIVINE":
      return "/img/atributos/DIVINE.svg";
    case "WIND":
      return "/img/atributos/WIND.svg";
  }
}
