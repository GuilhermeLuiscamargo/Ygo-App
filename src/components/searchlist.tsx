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
  const onChange = async () => {
    setCardNames(await search(searchString));
  };

  useEffect(() => {
    search("").then((names) => setCardNames(names));
  }, [search]);
  return (
    <div className="searchBarDiv w-25 me-2 " onBlur={() => setSearchString("")}>
      <form className=" d-flex input-group">
        <input
          className=" form-control"
          type="search"
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
      {searchString === "" ? null : (
        <div
          className="searchResultList overflow-auto w-25 mt-1 d-flex flex-column gap-2 "
          onClick={() => setSearchString("")}
        >
          <SearchResultList cardNames={cardNames} />
        </div>
      )}
    </div>
  );
}

export default SearchList;
