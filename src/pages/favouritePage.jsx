import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

const FavouritePage = ({ props, placeholder, data }) => {
  const { setStep } = props;
  setStep(3);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord);
    //filter function, you can pass a function that represents the logic behind filtering data
    const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
    })
    if (searchWord === ""){
        setFilteredData([]);
    } else {
        setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
        <div className="searchIcon">
            {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
          <SearchIcon />
        </div>
      </div>
      {filteredData.length != 0 && (
      <div className="dataResult">
        {filteredData.slice(0, 10).map((value, key) => {
            //to get name of city
            return (
            <p> {value.name} </p>
            );
        })}
      </div>
)};
    </div>
  );
};

export default FavouritePage;
