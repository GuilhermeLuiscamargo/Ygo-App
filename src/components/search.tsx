"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
export function Search() {
  const [search, Setsearch] = useState("");
  return (
    <>
      <form action={`/card/${search}`}>
        <input
          type="text"
          placeholder="Search card"
          value={search}
          onChange={(ev) => {
            Setsearch(ev.target.value);
          }}
        />
        <button type="submit">
          <IoSearch />
        </button>
      </form>
    </>
  );
}
