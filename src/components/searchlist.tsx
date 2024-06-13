"use client";
import { getAtributteImg } from "@/actions/getAtributte";
import { getType } from "@/actions/getType";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";

function SearchList({
  search,
}: {
  search: (search: string) => Promise<searchCards[]>;
}) {
  const [cardNames, setCardNames] = useState<searchCards[]>([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    search("").then((names) => setCardNames(names));
  }, [search]);

  const onChange = async () => {
    setCardNames(await search(searchString));
  };
  return (
    <>
      <div className="searchBar">
        <form action={`/card/${searchString}`}>
          <input
            type="text"
            required
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
              onChange();
            }}
          />
          <button>
            <IoSearch />
          </button>
        </form>
      </div>
      <div className="resultsOfSearchBar">
        {cardNames.length
          ? cardNames.map((card) => {
              const attributeImg = getAtributteImg(card.attribute);
              const raceImg = getType(card.race);
              return (
                <Link
                  key={`search=${card.id}`}
                  href={`/card/${card.name}`}
                  onClick={() => setSearchString("")}
                >
                  <div>
                    <img width="50px" src={card.img} alt="" />
                    {card.name}
                    <img width="20px" src={attributeImg} alt={card.attribute} />
                    <img width="20px" src={raceImg} alt={card.race} />
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </>
  );
}

export default SearchList;
