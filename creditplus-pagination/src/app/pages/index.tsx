import React from "react";
import styles from './page.module.css'
import Navbar from "../components/base-components/Navbar";

import Image from "next/image";
import pageStyles from "./page.module.css";

const HomePage: React.FC = () => {
    return (
        <main className={pageStyles.main}>
            <div>
                <Navbar/>
                <h1>Welcome to the Homepage</h1>
            </div>
        </main>
    )
}