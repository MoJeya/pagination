import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dropdown from "./DropDown";
import Entry from 'contentful'
import ButtonContainer from "./SwitchButton";
import SwitchButtonContainer from "./SwitchButton";
import LoginButton from "./LoginButton";
import  Image  from 'next/image';


const Container = styled.div`
    background-color: transparent;
    color: white;
    width: 100%;
    height: 80px;
`;

const NavbarStyled = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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

const NavItems = styled.div`
    margin-right: 1em;
    margin-left: 2em;
    width: 110px;
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
                    <Image src="https://img.logoipsum.com/297.svg" alt="Logo" /> 
                </LogoContainer>
                    <NavItems>
                        <Dropdown title="Kredite" />
                    </NavItems>
                    <NavItems>   
                        <Dropdown title="Versicherungen" />
                    </NavItems>
                    <NavItems>
                        <Dropdown title="Festgeld" />
                    </NavItems>
                    <NavItems>
                        <Dropdown title="Service" />
                    </NavItems>
                    <NavItems> 
                        <Dropdown title="Über uns" />
                    </NavItems>
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
