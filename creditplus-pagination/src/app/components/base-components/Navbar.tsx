import React, { useEffect, useState } from "react";
import styled from "styled-components";
import contetFullClient from "../../../contentful";
import image from 'next/image'
import Dropdown from "./DropDown";
import Entry from 'contentful'
import ButtonContainer from "./SwitchButton";
import SwitchButtonContainer from "./SwitchButton";
import LoginButton from "./LoginButton";


const Container = styled.div`
    background-color: transparent;
    color: white;
    width: 100%;
    height: 80px;
`;

const NavbarStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const LogoContainer = styled.div`
    align-items: center;
    margin-left: 20px;
    font-size: 1.5rem;
    margin: 5px;

`;

const ControllPanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;



const Navbar: React.FC = () => {
    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        // getLogo();
    }, []);

    return (
       <Container>
            <NavbarStyled>
                <LogoContainer>
                    <img src="https://img.logoipsum.com/297.svg" alt="Logo" />
                </LogoContainer>
                <div>
                    <Dropdown title="placeholder" />
                </div>
                <div>
                  <Dropdown title="placeHolder2" />
                </div>
                <div>
                  <Dropdown title="placeHolder3" />
                </div>
                <div>
                  <Dropdown title="placeHolder4" />
                </div>
                <div>
                  <Dropdown title="placeHolder5" />
                </div>
                <ControllPanel>
                    <SwitchButtonContainer/>
                    <LoginButton/>
                </ControllPanel>
            </NavbarStyled>
       </Container>
    );
};

export default Navbar;

function userState(arg0: never[]): [any, any] {
    throw new Error("Function not implemented.");
}
