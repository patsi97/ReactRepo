import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./SearchBar.module.css";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.produce.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const addToSelectedList = (index) => {
    setSelectedItems([...selectedItems, filteredData[index]]);
  };

  const removeFromSelectedList = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1);
    setSelectedItems(newSelectedItems);
  };

  const onItemClick = (index) => {
    addToSelectedList(index);
  };

  const onRemoveItemClick = (index) => {
    removeFromSelectedList(index);
  };

  return (
    <div className={styles.search}>
      <p>Grocery Cart: </p>
      <div className={styles.searchInputs}>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className={styles.searchIcon}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon
              id="clearBtn"
              aria-label="Clear search"
              onClick={clearInput}
            />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.dataResult}>
          {filteredData.slice(0, 15).map((value, index) => {
            return (
              <a
                className={styles.dataItem}
                key={index}
                onClick={() => onItemClick(index)}
              >
                <p>{value.produce}</p>
              </a>
            );
          })}
        </div>
      )}
      {selectedItems.length !== 0 && (
        <div className={styles.selectedItems}>
          <p>Grocery Cart Items:</p>
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index}>
                {item.produce}
                <button
                  onClick={() => onRemoveItemClick(index)}
                  className={styles.elementButton}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
