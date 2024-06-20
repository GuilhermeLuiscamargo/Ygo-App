"use client";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import SearchResultList from "./searchResultList";

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
    <div className="searchBarDiv w-25 me-2 ">
      <form className=" d-flex input-group">
        <input
          className=" form-control"
          type="text"
          placeholder="Search Card"
          value={searchString}
          required
          onChange={(e) => {
            setSearchString(e.target.value);
            onChange();
          }}
        />
        <button
          className=" btn btn-warning"
          type="submit"
          formAction={`/card/${searchString}`}
          onSubmit={(ev) => ev.preventDefault()}
        >
          <IoSearch />
        </button>
      </form>

      {searchString === "" ? null : <SearchResultList cardNames={cardNames} />}
    </div>
  );
}

export default SearchList;
