import React from "react";

import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const { searchValue, setSearachValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enable-background="new 0 0 32 32"
        id="Stock_cut"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <desc />
        <g>
          <path
            d="M21,21L21,21   c1.105-1.105,2.895-1.105,4,0l5.172,5.172c0.53,0.53,0.828,1.25,0.828,2v0C31,29.734,29.734,31,28.172,31h0   c-0.75,0-1.47-0.298-2-0.828L21,25C19.895,23.895,19.895,22.105,21,21z"
            fill="none"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <circle
            cx="11"
            cy="11"
            fill="none"
            r="10"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <path
            d="M11,5   c-3.314,0-6,2.686-6,6"
            fill="none"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
          />
          <line
            fill="none"
            stroke="#000000"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="2"
            x1="18"
            x2="21"
            y1="18"
            y2="21"
          />
        </g>
      </svg>
      <input
        value={searchValue}
        onChange={(e) => setSearachValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы"
      />
      {searchValue && (
        <svg
          onClick={() => setSearachValue("")}
          className={styles.clearIcon}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          <path d="M0 0h48v48H0z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
