"use client";
import "../../style/filterPage.css";
import { allcardsfiltered } from "@/actions/allcardsfiltered";
import { fillstring } from "@/actions/cardsfill";
import { CardList } from "@/components/cardlist";
import { LoaderSpin } from "@/components/loaderSpin";
import { LoaderCards } from "@/components/loadercards";
import { useState } from "react";

export default function Filter({ data, error }: IcardsFiltered) {
  const [fetchResponse, setFetchResponse] = useState<IcardsFiltered>({
    data: data,
    error: error,
  });
  const [filterInputsObject, setFilterInputsObject] =
    useState<IfilterInputsObj>({
      atk: "",
      def: "",
      level: "",
      linkval: "",
      scale: "",
      type: "",
      attribute: "",
      race: "",
      archetype: "",
      format: "",
    });
  const filteredCards = async (fill: string | undefined) => {
    const res = await allcardsfiltered(28, 0, fill);
    setFetchResponse(() => ({ data: res?.data, error: res?.error }));
  };
  const ResetForm = () => {
    const resetFetchData = async () => {
      setFetchResponse((prev) => ({ ...prev, data: data }));
    };
    setFilterInputsObject({
      atk: "",
      def: "",
      level: "",
      linkval: "",
      scale: "",
      type: "",
      attribute: "",
      race: "",
      archetype: "",
      format: "",
    });
    setFetchResponse(() => ({ data: undefined, error: undefined }));
    setTimeout(resetFetchData, 500);
  };
  const filterString = fillstring(filterInputsObject);
  return (
    <main className="mainFiltroTag container-fluid d-flex flex-column  align-items-center pt-4 pb-4 gap-5 ">
      <div className="formDivFilterTag  w-75">
        <form
          action="submit"
          className="w-100 text-warning d-flex flex-column gap-3 p-3 "
          onSubmit={(ev) => {
            ev.preventDefault();
            setFetchResponse(() => ({ data: undefined, error: undefined }));
            filteredCards(filterString);
          }}
        >
          <div className="inputDivSelects d-flex gap-3">
            <div className="typeDivSelect w-25">
              <select
                className="selectType form-control form-control-sm bg-dark text-warning focus-warning"
                id="filter-type"
                onChange={(ev) =>
                  ev.target.value === "Select Type"
                    ? setFilterInputsObject((prev) => ({
                        ...prev,
                        type: undefined,
                      }))
                    : setFilterInputsObject((prev) => ({
                        ...prev,
                        type: ev.target.value,
                      }))
                }
              >
                <option>Select Type</option>
                <option>Effect Monster</option>
                <option>Flip Effect Monster</option>
                <option>Fusion Monster</option>
                <option>Gemini Monster</option>
                <option>Link Monster</option>
                <option>Normal Monster</option>
                <option>Normal Tuner Monster</option>
                <option>Pendulum Effect Fusion Monster</option>
                <option>Pendulum Effect Monster</option>

                <option>Pendulum Flip Effect Monster</option>
                <option>Pendulum Normal Monster</option>
                <option>Pendulum Tuner Effect Monster</option>
                <option>Ritual Effect Monster</option>
                <option>Ritual Monster</option>
                <option>Skill Card</option>
                <option>Spell Card</option>
                <option>Spirit Monster</option>
                <option>Synchro Monster</option>
                <option>Synchro Pendulum Effect Monster</option>
                <option>Synchro Tuner Monster</option>
                <option>Token</option>
                <option>Toon Monster</option>
                <option>Trap Card</option>
                <option>Tuner Monster</option>
                <option>Union Effect Monster</option>
                <option>XYZ Monster</option>
                <option>XYZ Pendulum Effect Monster</option>
              </select>
            </div>
            <div className="attributeDivSelect w-25">
              <select
                className="selectAttribute form-control form-control-sm bg-dark text-warning"
                id="filter-attribute"
                onChange={(ev) =>
                  ev.target.value === "Select Attribute"
                    ? setFilterInputsObject((prev) => ({
                        ...prev,
                        attribute: undefined,
                      }))
                    : setFilterInputsObject((prev) => ({
                        ...prev,
                        attribute: ev.target.value,
                      }))
                }
              >
                <option>Select Attribute</option>
                <option>DARK</option>
                <option>DIVINE</option>
                <option>EARTH</option>
                <option>FIRE</option>
                <option>LIGHT</option>
                <option>WATER</option>
                <option>WIND</option> ?&gt;
              </select>
            </div>
            <div className="raceDivSelect w-25">
              <select
                className="selectRace form-control form-control-sm bg-dark text-warning"
                id="filter-race"
                onChange={(ev) =>
                  ev.target.value === "Select Race"
                    ? setFilterInputsObject((prev) => ({
                        ...prev,
                        race: undefined,
                      }))
                    : setFilterInputsObject((prev) => ({
                        ...prev,
                        race: ev.target.value,
                      }))
                }
              >
                <option>Select Race</option>
                <option>Aqua</option>
                <option>Beast</option>
                <option>Beast-Warrior</option>
                <option>Continuous</option>
                <option>Counter</option>
                <option>Creator-God</option>
                <option>Cyberse</option>
                <option>Dinosaur</option>
                <option>Divine-Beast</option>
                <option>Dragon</option>
                <option>Equip</option>
                <option>Fairy</option>
                <option>Field</option>
                <option>Fiend</option>
                <option>Fish</option>
                <option>Illusion</option>
                <option>Insect</option>
                <option>Machine</option>
                <option>Normal</option>
                <option>Plant</option>
                <option>Psychic</option>
                <option>Pyro</option>
                <option>Quick-Play</option>
                <option>Reptile</option>
                <option>Ritual</option>
                <option>Rock</option>
                <option>Sea Serpent</option>
                <option>Spellcaster</option>
                <option>Thunder</option>
                <option>Warrior</option>
                <option>Winged Beast</option>
                <option>Wyrm</option>
                <option>Zombie</option> ?&gt;
              </select>
            </div>
            <div className="archtypeDivSelect w-25">
              <select
                className="selectArchtype form-control form-control-sm bg-dark text-warning"
                id="filter-archetype"
                onChange={(ev) =>
                  ev.target.value === "Select Archetype"
                    ? setFilterInputsObject((prev) => ({
                        ...prev,
                        archetype: undefined,
                      }))
                    : setFilterInputsObject((prev) => ({
                        ...prev,
                        archetype: ev.target.value,
                      }))
                }
              >
                <option>Select Archetype</option>
                <option>-Eyes Dragon</option>
                <option>"C"</option>
                <option>@Ignister</option>
                <option>A-to-Z</option>
                <option>A.I.</option>
                <option>ABC</option>
                <option>Abyss Actor</option>
                <option>Abyss Script</option>
                <option>Abyss-</option>
                <option>Adamancipator</option>
                <option>Advanced Crystal Beast</option>
                <option>Adventurer Token</option>
                <option>Aesir</option>
                <option>Aether</option>
                <option>Albaz Dragon</option>
                <option>Alien</option>
                <option>Alligator</option>
                <option>Allure Queen</option>
                <option>Ally of Justice</option>
                <option>Altergeist</option>
                <option>Amazement</option>
                <option>Amazoness</option>
                <option>Amorphage</option>
                <option>Ancient Gear</option>
                <option>Ancient Treasure</option>
                <option>Ancient Warriors</option>
                <option>Anti</option>
                <option>Apoqliphort</option>
                <option>Appliancer</option>
                <option>Aquaactress</option>
                <option>Aquamirror</option>
                <option>Arcana Force</option>
                <option>Archfiend</option>
                <option>Armed Dragon</option>
                <option>Aroma</option>
                <option>Artifact</option>
                <option>Ashened</option>
                <option>Assault Mode</option>
                <option>Atlantean</option>
                <option>Attraction</option>
                <option>Attribute Summoner</option>
                <option>B.E.S.</option>
                <option>Bamboo Sword</option>
                <option>Barbaros</option>
                <option>Barian's</option>
                <option>Batteryman</option>
                <option>Battleguard</option>
                <option>Battlewasp</option>
                <option>Battlin' Boxer</option>
                <option>Battlin' Boxing</option>
                <option>Beetrooper</option>
                <option>Black Luster Soldier</option>
                <option>Blackwing</option>
                <option>Blaze Accelerator</option>
                <option>Blue Tears</option>
                <option>Blue-Eyes</option>
                <option>Bonding</option>
                <option>Book of</option>
                <option>Boot-Up</option>
                <option>Borrel</option>
                <option>Bounzer</option>
                <option>Branded</option>
                <option>Broken World</option>
                <option>Bugroth</option>
                <option>Bujin</option>
                <option>Burning Abyss</option>
                <option>Butterfly</option>
                <option>Butterspy</option>
                <option>Bystial</option>
                <option>Cataclysmic</option>
                <option>Celtic Guard</option>
                <option>Centur-Ion</option>
                <option>Chaos</option>
                <option>Chaos Phantom</option>
                <option>Charmer</option>
                <option>Chemicritter</option>
                <option>Chimera</option>
                <option>Chronomaly</option>
                <option>Chrysalis</option>
                <option>Cipher</option>
                <option>Circular</option>
                <option>Clear Wing</option>
                <option>Cloudian</option>
                <option>Code Talker</option>
                <option>Codebreaker</option>
                <option>Constellar</option>
                <option>Contact</option>
                <option>Cosmic Synchro Monster</option>
                <option>Counter Fairy</option>
                <option>Crusadia</option>
                <option>Crystal</option>
                <option>Crystal Beast</option>
                <option>Crystron</option>
                <option>Cubic</option>
                <option>Cupid</option>
                <option>Curse of Dragon</option>
                <option>CXyz</option>
                <option>Cyber</option>
                <option>Cyber Angel</option>
                <option>Cyber Dragon</option>
                <option>Cyberdark</option>
                <option>Cynet</option>
                <option>D.D.</option>
                <option>D/D</option>
                <option>Danger!</option>
                <option>Dark Contract</option>
                <option>Dark counterpart</option>
                <option>Dark Magician</option>
                <option>Dark Scorpion</option>
                <option>Dark World</option>
                <option>Darklord</option>
                <option>Deep Sea</option>
                <option>Demise</option>
                <option>Deskbot</option>
                <option>Despia</option>
                <option>Destiny HERO</option>
                <option>Destruction Sword</option>
                <option>Diabellstar</option>
                <option>Dice</option>
                <option>Digital Bug</option>
                <option>Dinomist</option>
                <option>Dinomorphia</option>
                <option>Dinowrestler</option>
                <option>Divine Dragon</option>
                <option>Djinn</option>
                <option>Dododo</option>
                <option>Dogmatika</option>
                <option>Doll</option>
                <option>Doll Monster</option>
                <option>Doodle Beast</option>
                <option>Doodlebook</option>
                <option>Doriado</option>
                <option>Draconia</option>
                <option>Dracoslayer</option>
                <option>Dracoverlord</option>
                <option>Dragonmaid</option>
                <option>Dragunity</option>
                <option>Dream Mirror</option>
                <option>Drytron</option>
                <option>Dual Avatar</option>
                <option>Duston</option>
                <option>Earthbound</option>
                <option>Edge Imp</option>
                <option>Egyptian God</option>
                <option>Eldlich</option>
                <option>Elemental HERO</option>
                <option>Elemental Lord</option>
                <option>Elementsaber</option>
                <option>Emblema</option>
                <option>Empower</option>
                <option>Empowered Warrior</option>
                <option>Endymion</option>
                <option>Evil Eye</option>
                <option>Evil HERO</option>
                <option>Evil★Twin</option>
                <option>Evol</option>
                <option>Evolsaur</option>
                <option>Evoltile</option>
                <option>Evolzar</option>
                <option>Exchange of the Spirit</option>
                <option>Exodia</option>
                <option>Exodo</option>
                <option>Exosister</option>
                <option>Eyes Restrict</option>
                <option>F.A.</option>
                <option>Fabled</option>
                <option>Fairy</option>
                <option>Fairy Tail</option>
                <option>Favorite</option>
                <option>Felgrand</option>
                <option>Field Searcher</option>
                <option>Fiendsmith</option>
                <option>Fire Fist</option>
                <option>Fire Formation</option>
                <option>Fire King</option>
                <option>Firewall</option>
                <option>Fishborg</option>
                <option>Flame Swordsman</option>
                <option>Flamvell</option>
                <option>Fleur</option>
                <option>Floowandereeze</option>
                <option>Flower Cardian</option>
                <option>Fluffal</option>
                <option>Forbidden</option>
                <option>Fortune Fairy</option>
                <option>Fortune Lady</option>
                <option>Fossil</option>
                <option>Frightfur</option>
                <option>Frog</option>
                <option>From the Underworld</option>
                <option>Fur Hire</option>
                <option>Fusion</option>
                <option>G Golem</option>
                <option>Gadget</option>
                <option>Gagaga</option>
                <option>Gaia Knight</option>
                <option>Gaia The Fierce Knight</option>
                <option>Galaxy</option>
                <option>Galaxy-Eyes</option>
                <option>Gandora</option>
                <option>Gate Guardian</option>
                <option>Geargia</option>
                <option>Gem-</option>
                <option>Generaider</option>
                <option>Genex</option>
                <option>Ghostrick</option>
                <option>Ghoti</option>
                <option>Gimmick Puppet</option>
                <option>Gishki</option>
                <option>Gizmek</option>
                <option>Glacial Beast</option>
                <option>Gladiator Beast</option>
                <option>Goblin</option>
                <option>Gogogo</option>
                <option>Gold Pride</option>
                <option>Golden Castle of Stromberg</option>
                <option>Golden Land</option>
                <option>Gorgonic</option>
                <option>Gouki</option>
                <option>GranSolfachord</option>
                <option>Gravekeeper's</option>
                <option>Graydle</option>
                <option>Greed</option>
                <option>Grepher</option>
                <option>Guardian</option>
                <option>Guardragon</option>
                <option>Gunkan</option>
                <option>Gusto</option>
                <option>Harpie</option>
                <option>Hazy</option>
                <option>Heart</option>
                <option>Herald</option>
                <option>Heraldic</option>
                <option>Heraldry</option>
                <option>HERO</option>
                <option>Heroic</option>
                <option>Hi-Speedroid</option>
                <option>Hieratic</option>
                <option>Hole</option>
                <option>Holy Knight</option>
                <option>Horus</option>
                <option>Horus the Black Flame Dragon</option>
                <option>Hyperion</option>
                <option>Ice Barrier</option>
                <option>Icejade</option>
                <option>Igknight</option>
                <option>Impcantation</option>
                <option>Infernity</option>
                <option>Infernoble Arms</option>
                <option>Infernoble Knight</option>
                <option>Infernoid</option>
                <option>Infestation</option>
                <option>Infinitrack</option>
                <option>Invoked</option>
                <option>Inzektor</option>
                <option>Iron Chain</option>
                <option>Jar</option>
                <option>Jester</option>
                <option>Jinzo</option>
                <option>Junk</option>
                <option>Jurrac</option>
                <option>Kaiju</option>
                <option>Kairyu-Shin</option>
                <option>Karakuri</option>
                <option>Kashtira</option>
                <option>Ki-sikil</option>
                <option>Knight</option>
                <option>Knightmare</option>
                <option>Koa'ki Meiru</option>
                <option>Koala</option>
                <option>Kozmo</option>
                <option>Krawler</option>
                <option>Kuriboh</option>
                <option>Labrynth</option>
                <option>Labyrinth Wall</option>
                <option>Lady of Lament</option>
                <option>Laval</option>
                <option>Legendary Knight</option>
                <option>Libromancer</option>
                <option>Lightsworn</option>
                <option>Lil-la</option>
                <option>Live☆Twin</option>
                <option>Lswarm</option>
                <option>Lunalight</option>
                <option>Lyrilusc</option>
                <option>Machina</option>
                <option>Machine Angel</option>
                <option>Madolche</option>
                <option>Madoor</option>
                <option>Magical Musket</option>
                <option>Magician</option>
                <option>Magician Girl</option>
                <option>Magikey</option>
                <option>Magistus</option>
                <option>Magnet Warrior</option>
                <option>Majespecter</option>
                <option>Majestic</option>
                <option>Maju</option>
                <option>Malefic</option>
                <option>Malicevorous</option>
                <option>Man-Eater Bug</option>
                <option>Mannadium</option>
                <option>Marincess</option>
                <option>Martial Art Spirit</option>
                <option>Mask</option>
                <option>Masked HERO</option>
                <option>Materiactor</option>
                <option>Mathmech</option>
                <option>Mayakashi</option>
                <option>Mecha Phantom Beast</option>
                <option>Megalith</option>
                <option>Mekk-Knight</option>
                <option>Meklord</option>
                <option>Melffy</option>
                <option>Melodious</option>
                <option>Memento</option>
                <option>Mermail</option>
                <option>Metalfoes</option>
                <option>Metaphys</option>
                <option>Mikanko</option>
                <option>Millennium</option>
                <option>Mirror Trap</option>
                <option>Mist Valley</option>
                <option>Mokey Mokey</option>
                <option>Monarch</option>
                <option>Morphtronic</option>
                <option>Multchummy</option>
                <option>Mystical Beast of the Forest</option>
                <option>Mythical Beast</option>
                <option>Myutant</option>
                <option>Naturia</option>
                <option>Nekroz</option>
                <option>Nemeses</option>
                <option>Nemleria</option>
                <option>Nemurelia</option>
                <option>Neo Space</option>
                <option>Neo-Spacian</option>
                <option>Neos</option>
                <option>Nephthys</option>
                <option>Nimble</option>
                <option>Ninja</option>
                <option>Ninjitsu Art</option>
                <option>Noble Arms</option>
                <option>Noble Knight</option>
                <option>Nordic</option>
                <option>Nouvelles</option>
                <option>Number</option>
                <option>Numeron</option>
                <option>Odd-Eyes</option>
                <option>Ogdoadic</option>
                <option>Ojama</option>
                <option>Onomat</option>
                <option>Orcust</option>
                <option>Overlay</option>
                <option>P.U.N.K.</option>
                <option>Paladins of Dragons</option>
                <option>Paleozoic</option>
                <option>Parasite</option>
                <option>Parshath</option>
                <option>Patissciel</option>
                <option>Pendulum</option>
                <option>Pendulum Dragon</option>
                <option>Penguin</option>
                <option>Performage</option>
                <option>Performapal</option>
                <option>Phantasm</option>
                <option>Phantasm Spiral</option>
                <option>Phantom Knights</option>
                <option>Photon</option>
                <option>Plunder Patroll</option>
                <option>Polymerization</option>
                <option>Possessed</option>
                <option>Potan</option>
                <option>Power Tool</option>
                <option>Prank-Kids</option>
                <option>Predap</option>
                <option>Predaplant</option>
                <option>Prediction Princess</option>
                <option>Priestess</option>
                <option>Prophecy</option>
                <option>PSY-Frame</option>
                <option>Puppet</option>
                <option>Purrely</option>
                <option>Qli</option>
                <option>Ragnaraika</option>
                <option>Raidraptor</option>
                <option>Rainbow Bridge</option>
                <option>Rank-Up-Magic</option>
                <option>Recipe</option>
                <option>Red-Eyes</option>
                <option>Relinquished</option>
                <option>Reptilianne</option>
                <option>Rescue Squad</option>
                <option>Rescue-ACE</option>
                <option>Resonator</option>
                <option>Rikka</option>
                <option>Risebell</option>
                <option>Ritual Beast</option>
                <option>Roid</option>
                <option>Rokket</option>
                <option>Roland</option>
                <option>Rose</option>
                <option>Rose Dragon</option>
                <option>Runick</option>
                <option>S-Force</option>
                <option>Saber</option>
                <option>Sacred Beast</option>
                <option>Salamandra</option>
                <option>Salamangreat</option>
                <option>Sangen</option>
                <option>Scareclaw</option>
                <option>Scrap</option>
                <option>Scrap-Iron</option>
                <option>Sea Stealth</option>
                <option>Secret Six Samurai</option>
                <option>Sennen</option>
                <option>Seventh</option>
                <option>Shaddoll</option>
                <option>Shark</option>
                <option>Shining Sarcophagus</option>
                <option>Shinobird</option>
                <option>Shiranui</option>
                <option>Signature move</option>
                <option>Silent Magician</option>
                <option>Silent Swordsman</option>
                <option>Simorgh</option>
                <option>Sinful Spoils</option>
                <option>Six Samurai</option>
                <option>Skilled Magician</option>
                <option>Skull Servant</option>
                <option>Sky Scourge</option>
                <option>Sky Striker</option>
                <option>Slime</option>
                <option>Snake-Eye</option>
                <option>Solemn</option>
                <option>Solfachord</option>
                <option>Speedroid</option>
                <option>Spellbook</option>
                <option>Sphinx</option>
                <option>Spider</option>
                <option>Spirit Message</option>
                <option>Spiritual Art</option>
                <option>Spright</option>
                <option>Springans</option>
                <option>SPYRAL</option>
                <option>Star</option>
                <option>Star Seraph</option>
                <option>Stardust</option>
                <option>Starliege</option>
                <option>Starry Knight</option>
                <option>Stealth Kragen</option>
                <option>Steelswarm</option>
                <option>Stellarknight</option>
                <option>Subterror</option>
                <option>Sunavalon</option>
                <option>Sunseed</option>
                <option>Sunvine</option>
                <option>Super Defense Robot</option>
                <option>Super Quant</option>
                <option>Superheavy</option>
                <option>Superheavy Samurai</option>
                <option>Supreme King</option>
                <option>Swarm of</option>
                <option>Swordsoul</option>
                <option>Sylvan</option>
                <option>Symphonic Warrior</option>
                <option>Synchro</option>
                <option>Synchron</option>
                <option>T.G.</option>
                <option>Tachyon</option>
                <option>Tearlaments</option>
                <option>Tellarknight</option>
                <option>Tenpai Dragon</option>
                <option>Tenyi</option>
                <option>The Agent</option>
                <option>The Sanctuary in the Sky</option>
                <option>The Weather</option>
                <option>Therion</option>
                <option>Thunder Dragon</option>
                <option>Time Thief</option>
                <option>Timelord</option>
                <option>Tindangle</option>
                <option>Tistina</option>
                <option>Toon</option>
                <option>Toy</option>
                <option>Train</option>
                <option>Transcendosaurus</option>
                <option>Trap Hole</option>
                <option>Trap Monster</option>
                <option>Traptrix</option>
                <option>Tri-Brigade</option>
                <option>Triamid</option>
                <option>Trickstar</option>
                <option>True Draco</option>
                <option>U.A.</option>
                <option>Umbral Horror</option>
                <option>Umi</option>
                <option>Unchained</option>
                <option>Underworld</option>
                <option>Ursarctic</option>
                <option>Utopia</option>
                <option>Utopic</option>
                <option>Vaalmonica</option>
                <option>Valkyrie</option>
                <option>Vampire</option>
                <option>Vanquish Soul</option>
                <option>Vassal</option>
                <option>Vaylantz</option>
                <option>Veda</option>
                <option>Vendread</option>
                <option>Venom</option>
                <option>Vernusylph</option>
                <option>Virtual World</option>
                <option>Visas</option>
                <option>Vision HERO</option>
                <option>Voiceless Voice</option>
                <option>Void</option>
                <option>Volcanic</option>
                <option>Vylon</option>
                <option>War Rock</option>
                <option>Watt</option>
                <option>White</option>
                <option>White Forest</option>
                <option>Wicked God</option>
                <option>Wight</option>
                <option>Wind-Up</option>
                <option>Windwitch</option>
                <option>Witchcrafter</option>
                <option>with Eyes of Blue</option>
                <option>World Chalice</option>
                <option>World Legacy</option>
                <option>Worm</option>
                <option>X-Saber</option>
                <option>Xyz</option>
                <option>Yang Zing</option>
                <option>Yosenju</option>
                <option>Yubel</option>
                <option>Zefra</option>
                <option>Zera</option>
                <option>Zexal</option>
                <option>Zombie counterpart</option>
                <option>Zoodiac</option> ?&gt;
              </select>
            </div>
            <div className="w-25">
              <select
                className="selectArchtype form-control form-control-sm bg-dark text-warning"
                onChange={(ev) =>
                  ev.target.value === "Select Format"
                    ? setFilterInputsObject((prev) => ({
                        ...prev,
                        format: undefined,
                      }))
                    : setFilterInputsObject((prev) => ({
                        ...prev,
                        format: ev.target.value,
                      }))
                }
              >
                <option>Select Format</option>
                <option>Ocg</option>
                <option>Tcg</option>
                <option>Speed Duel</option>
                <option>Rush Duel</option>
                <option>Master Duel</option>
              </select>
            </div>
          </div>

          <div className="valuesDivSelect d-flex gap-3">
            <div className="form-atk w-25">
              <label className="form-label" htmlFor="cardatk">
                ATK
              </label>
              <input
                className=" form-control form-control-sm bg-dark text-warning"
                type="number"
                id="cardatk"
                name="cardatk"
                value={filterInputsObject.atk}
                step={50}
                min={0}
                max={5000}
                placeholder="max 5000"
                onChange={(ev) =>
                  setFilterInputsObject((prev) => ({
                    ...prev,
                    atk: ev.target.value,
                  }))
                }
              />
            </div>
            <div className="form-def w-25">
              <label className="form-label" htmlFor="carddef">
                DEF
              </label>
              <input
                className=" form-control form-control-sm bg-dark text-warning"
                type="number"
                id="defLabel"
                name="defLabel"
                value={filterInputsObject.def}
                step={50}
                min={0}
                max={5000}
                placeholder="max 5000"
                onChange={(ev) =>
                  setFilterInputsObject((prev) => ({
                    ...prev,
                    def: ev.target.value,
                  }))
                }
              />
            </div>
            <div className="form-level w-25">
              <label className="form-label" htmlFor="cardlevel">
                Level
              </label>
              <input
                className=" form-control form-control-sm bg-dark text-warning"
                type="number"
                id="levelLabel"
                name="levelLabel"
                value={filterInputsObject.level}
                min={1}
                max={12}
                step={1}
                placeholder="max 12"
                onChange={(ev) =>
                  setFilterInputsObject((prev) => ({
                    ...prev,
                    level: ev.target.value,
                  }))
                }
              />
            </div>
            <div className="form-linkValue w-25">
              <label className="form-label" htmlFor="linkLabel">
                Link
              </label>
              <input
                className=" form-control form-control-sm bg-dark text-warning"
                type="number"
                id="linkLabel"
                name="linkLabel"
                value={filterInputsObject.linkval}
                min={0}
                max={6}
                step={1}
                placeholder="max 6"
                onChange={(ev) =>
                  setFilterInputsObject((prev) => ({
                    ...prev,
                    linkval: ev.target.value,
                  }))
                }
              />
            </div>
            <div className="form-scalePendulumValue w-25">
              <label className="form-label" htmlFor="scaleLabel">
                Scale
              </label>
              <input
                className=" form-control form-control-sm bg-dark text-warning"
                type="number"
                id="scaleLabel"
                value={filterInputsObject.scale}
                min={0}
                max={13}
                step={1}
                placeholder="max 13"
                onChange={(ev) =>
                  setFilterInputsObject((prev) => ({
                    ...prev,
                    scale: ev.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="btnFormDiv d-flex gap-3">
            <button className="btn btn-danger" type="reset" onClick={ResetForm}>
              Reset filter
            </button>
            <button className="btn btn-warning" type="submit">
              Filter
            </button>
          </div>
        </form>
      </div>

      <div className="CardResultsFilterDiv w-75 overflow-auto text-center">
        {fetchResponse.data && (
          <div className="container-fluid d-flex flex-wrap column-gap-3 row-gap-4 pb-4 pt-3 align-self-center justify-content-center">
            <CardList cards={fetchResponse.data} />
            <LoaderCards inicialPage={28} QtdCards={28} filter={filterString} />
          </div>
        )}
        {fetchResponse.error && (
          <p className=" text-warning h3">Carta não encontrada!!!</p>
        )}
        {!fetchResponse.data && !fetchResponse.error && (
          <LoaderSpin classname="LoaderFilter" />
        )}
      </div>
    </main>
  );
}
