import React from "react";
import styles from "./HeroSection.module.css";
import headphone from "../../assets/headphone.png"

export default function HeroSection(){
    return(
        <>
            <div className={styles.container}>
                <img src={headphone} className={styles.heroImage} alt="headphone" />
            </div>
        </>
    )
}