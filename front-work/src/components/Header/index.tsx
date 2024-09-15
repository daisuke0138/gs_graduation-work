import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Knowledge sharing room</h1>
            <ul>
                <li>
                    <Link href={"/login"}>Login</Link>
                </li>
                <li>
                    <Link href={"/logout"}>Logout</Link>
                </li>
                <li>
                    <Link href={"/register"}>Register</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;