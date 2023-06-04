import React, { useEffect, useState } from "react";
import styled from "styled-components";
import contetFullClient from "../../../contentful";
import image from 'next/image'
import Dropdown from "./DropDown";
import Entry from 'contentful'


const Container = styled.header`
    background-color: #7F7F7F;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 50px;
    box-shadow: 0 1px 8px #ddd;
    color: #fff;
`;

const NavContainer = styled.nav`
   
`;

const Logo = styled.h1`
    color: #fff;
`;

const LogoImage = styled(image) `
    display: block;
    width: 50;
    height: 50;
`;

interface NavbarLogo{
    name: string;
    image: string | undefined;
}
    

const Navbar: React.FC = () => {
    const [logoUrl, setLogoUrl] = useState('');


//  async function fetchLogo(): Promise<NavbarLogo | null> {
//      try{
//          const result = await contetFullClient.getEntries({
//              content_type: 'imageAsset',
//              //TODO: setfilters hier
//          });
//          if(result.items.length > 0) {
//              const logo = result.items[0].fields;
//              return ({
//                  name: logo.name === null ? '' : logo.name.toString(),
//                  image: logo.image?.toString(),
//              });
//          }
//      } catch (error) {
//     }
//     return null;
//  }

//     async function getLogo() {
//         const url = await fetchLogo();
//         console.log(url);
//         setLogoUrl(url?.name ?? '');
//     }

    useEffect(() => {
        // getLogo();
    }, []);




    return (
        <Container>
            <NavContainer>
                <Logo>
                    <LogoImage src="" alt="Logo"/>
                </Logo>
                <ul>
                    <Dropdown title="Kredite"/>
                    <Dropdown title="Versicherung"/>
                    <Dropdown title="Festgeld"/>
                    <Dropdown title="Service"/>
                    <Dropdown title="Über uns"/>
                </ul>
            </NavContainer>
        </Container>
    );
};

export default Navbar;

function userState(arg0: never[]): [any, any] {
    throw new Error("Function not implemented.");
}
