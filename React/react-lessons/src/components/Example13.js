"use client";

import styles from './Example13.module.css';

export default function UserProfile() {
    return(
        <div>
            <h1 className={styles.header}>User Profile</h1>
            <p className={styles.name}>Name:Sweet</p>
            <input className={styles.userInput}/>
        </div>
    );
}