import aqua from "../../public/img/tipos/Aqua.webp";
import beastWarrior from "../../public/img/tipos/Beast-Warrior.webp";
import beast from "../../public/img/tipos/Beast.webp";
import continuous from "../../public/img/tipos/Continuous.webp";
import counter from "../../public/img/tipos/Counter.webp";
import creatorGod from "../../public/img/tipos/Creator-God.webp";
import cyberse from "../../public/img/tipos/Cyberse.webp";
import dinosaur from "../../public/img/tipos/Dinosaur.webp";
import divineBeast from "../../public/img/tipos/Divine-Beast.webp";
import dragon from "../../public/img/tipos/Dragon.webp";
import equip from "../../public/img/tipos/Equip.webp";
import fairy from "../../public/img/tipos/Fairy.webp";
import field from "../../public/img/tipos/Field.webp";
import fiend from "../../public/img/tipos/Fiend.webp";
import fish from "../../public/img/tipos/Fish.webp";
import insect from "../../public/img/tipos/Insect.webp";
import machine from "../../public/img/tipos/Machine.webp";
import normal from "../../public/img/tipos/Normal.svg";
import plant from "../../public/img/tipos/Plant.webp";
import psychic from "../../public/img/tipos/Psychic.webp";
import pyro from "../../public/img/tipos/Pyro.webp";
import quickPlay from "../../public/img/tipos/Quick-Play.webp";
import reptile from "../../public/img/tipos/Reptile.webp";
import ritual from "../../public/img/tipos/Ritual.webp";
import rock from "../../public/img/tipos/Rock.webp";
import seaSerpent from "../../public/img/tipos/Sea-Serpent.webp";
import spellCaster from "../../public/img/tipos/Spellcaster.webp";
import thunder from "../../public/img/tipos/Thunder.webp";
import warrior from "../../public/img/tipos/Warrior.webp";
import wingedBeast from "../../public/img/tipos/Winged-Beast.webp";
import wyrm from "../../public/img/tipos/Wyrm.webp";
import zombie from "../../public/img/tipos/Zombie.webp";
export function getType(race: string | undefined) {
  switch (race) {
    case "Aqua":
      return aqua;
    case "Beast-Warrior":
      return beastWarrior;
    case "Beast":
      return beast;
    case "Continuous":
      return continuous;
    case "Counter":
      return counter;
    case "Creator-God":
      return creatorGod;
    case "Cyberse":
      return cyberse;
    case "Dinosaur":
      return dinosaur;
    case "Divine-Beast":
      return divineBeast;
    case "Dragon":
      return dragon;
    case "Equip":
      return equip;
    case "Fairy":
      return fairy;
    case "Field":
      return field;
    case "Fish":
      return fish;
    case "Insect":
      return insect;
    case "Machine":
      return machine;
    case "Plant":
      return plant;
    case "Pyro":
      return pyro;
    case "Quick-Play":
      return quickPlay;
    case "Reptile":
      return reptile;
    case "Ritual":
      return ritual;
    case "Rock":
      return rock;
    case "Sea Serpent":
      return seaSerpent;
    case "Spellcaster":
      return spellCaster;
    case "Thunder":
      return thunder;
    case "Warrior":
      return warrior;
    case "Winged Beast":
      return wingedBeast;
    case "Wyrm":
      return wyrm;
    case "Zombie":
      return zombie;
    case "Psychic":
      return psychic;
    case "Normal":
      return normal;
    case "Fiend":
      return fiend;
  }
}
