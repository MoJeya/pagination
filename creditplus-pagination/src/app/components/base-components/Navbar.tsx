import React, { useEffect, useState } from "react";
import styled from "styled-components";
import contetFullClient from "../../../contentful";
import image from 'next/image'
import Dropdown from "./DropDown";
import Entry from 'contentful'


const Container = styled.div`
    background-color: transparent;
    color: white;
    width: 100%;
    height: 80px;
`;

const Ulnav = styled.ul`
    
`;

const Navbar: React.FC = () => {
    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        // getLogo();
    }, []);

    return (
       <Container>
        ^^  NAVBAR
       </Container>
    );
};

export default Navbar;

function userState(arg0: never[]): [any, any] {
    throw new Error("Function not implemented.");
}
