import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content auto;

  background-color: #30404D;
`

type AppProps = { }

const App: React.FC<AppProps> = (props) => {
  return (
    <Container className="bp3-dark">
      <NavBar />
      <LandingPage />
    </Container>
  )
}

export default App;
