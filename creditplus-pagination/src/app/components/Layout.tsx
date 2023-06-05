import styled from "styled-components";
import Header from "./Header";
import Footer from "./base-components/Footer";


const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 1440px;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Content = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
  background-color:white;
`;

const Layout: React.FC = () => (
    <LayoutStyle>
      <Header />
        <Content>
          View explorer
        </Content>
        <Footer />
    </LayoutStyle>
);

export default Layout;