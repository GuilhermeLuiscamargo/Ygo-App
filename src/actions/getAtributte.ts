import light from "../../public/img/atributos/LIGHT.svg";
import earth from "../../public/img/atributos/EARTH.svg";
import dark from "../../public/img/atributos/DARK.svg";
import fire from "../../public/img/atributos/FIRE.svg";
import water from "../../public/img/atributos/WATER.svg";
import divine from "../../public/img/atributos/DIVINE.svg";
import wind from "../../public/img/atributos/WIND.svg";

export function getAtributteImg(attribute: string | undefined) {
  switch (attribute) {
    case "LIGHT":
      return light;
    case "EARTH":
      return earth;
    case "DARK":
      return dark;
    case "FIRE":
      return fire;
    case "WATER":
      return water;
    case "DIVINE":
      return divine;
    case "WIND":
      return wind;
  }
}
