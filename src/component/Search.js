import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";

const Search = () => {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setDatas(json));
  }, []);

  const handleChange = (e) => {
    let value = e.target.value;

    if (value.length > 2) {
      setSearchTerm(value);
    } else {
      setSearchTerm("");
    }
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Recherche"
          onChange={handleChange}
        ></input>
      </div>
      <div className="search-resultats">
        {datas
          .filter((item) => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((item) => {
            return (
              <div className="search-resultat" key={item.id}>
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
