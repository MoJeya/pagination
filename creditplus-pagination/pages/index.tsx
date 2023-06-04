import React from "react";
import Navbar from "../src/app/components/base-components/Navbar";
import pageStyles from "../src/app/page.module.css";

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

export default HomePage;