import React from "react";
import styles from "./Searchbox.module.css";
import SearchImage from "../../assets/Searchicon.png"

export default function SearchBox(){
    return(
        <>
            <div className={styles.searchContainer}>
            <input type="text" className={styles.searchBar} id="searchBar" placeholder="Seach a album of your choice" />
            <button className={styles.searchButton}>
                <img src={SearchImage} alt="Search" />
            </button>
            </div>
        </>
    )
}