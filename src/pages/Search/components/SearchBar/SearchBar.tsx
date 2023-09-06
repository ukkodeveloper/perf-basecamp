import React, { forwardRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './SearchBar.module.css';

type SearchbarProps = {
  searchKeyword: string;
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  onSearch: () => void;
};

type Ref = HTMLInputElement;

const SearchBar = forwardRef<Ref, SearchbarProps>(({ searchKeyword, onEnter, onSearch }, ref) => {
  return (
    <section className={styles.searchbarSection}>
      <h3 className={styles.searchbarTitle}>- find the best gif now - </h3>
      <div className={styles.searchbarContainer}>
        <input className={styles.searchInput} type="text" onKeyPress={onEnter} ref={ref} />
        <button className={styles.searchButton} type="button" onClick={onSearch}>
          <AiOutlineSearch color="white" size="2rem" />
        </button>
      </div>
    </section>
  );
});

export default SearchBar;
