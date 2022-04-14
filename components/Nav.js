import React from "react";
import styles from "../styles/Nav.module.css";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/dist/client/image";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <h1>
        Alumni <br />
        Database
      </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/people">People</Link>
        </li>
        <li>
          <Link href="/form">Sign In</Link>
        </li>
      </ul>
      <Image src="/vercel.svg" width="100%" height="40vh" />
    </div>
  );
};
