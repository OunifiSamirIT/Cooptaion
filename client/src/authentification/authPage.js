import "./authPage.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(119deg, rgba(0,36,34,0.8606793059020483) 0%, rgba(9,119,121,0.9419117988992471) 65%, rgba(0,255,222,1) 82%);
  height: 90vh;
`;

function App() {

  return (

    <AppContainer>
     
     
      <AppContainer>
        <AccountBox />
      </AppContainer>


    </AppContainer>

  );
}

export default App;
