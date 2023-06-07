import React from "react";
import Navbar from "../src/app/components/base-components/Navbar";
import pageStyles from "../src/app/page.module.css";
import styled, { createGlobalStyle } from "styled-components";
import Layout from "@/app/components/Layout";
import { hydrate, render } from "react-dom";


//const Index = () => <Layout>Welcome to WHATABYTE!</Layout>;
const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;


const HomePage: React.FC = () => {
    return (
        <>
        <GlobalStyles/>
        <Layout/>
        </>
    )
}

export default HomePage;
