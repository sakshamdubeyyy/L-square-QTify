import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBox from "../Searchbox/SearchBox";
import FeedbackButton from "../FeedbackButton/FeedbackButton";

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <a href="/">
                <Logo/>
            </a>
            <SearchBox/>
            <FeedbackButton/>
        </nav>
    )
}

export default Navbar;