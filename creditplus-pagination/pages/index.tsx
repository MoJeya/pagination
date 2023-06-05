import React from "react";
import Navbar from "../src/app/components/base-components/Navbar";
import pageStyles from "../src/app/page.module.css";
import styled from "styled-components";
import Layout from "@/app/components/Layout";
import { hydrate, render } from "react-dom";


//const Index = () => <Layout>Welcome to WHATABYTE!</Layout>;



const HomePage: React.FC = () => {
    return (
        <Layout/>
    )
}

export default HomePage;
