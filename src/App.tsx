import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import styled from 'styled-components';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto;

  background-color: #30404D;
`

type AppProps = {}

const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <Container className="bp3-dark">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Redirect to="/about" />
            </Route>
            <Route
              path="/about"
              component={LandingPage}
            />
            <Route
              path="/projects"
              component={ProjectsPage}
            />
            <Route component={LandingPage} />
          </Switch>
        </main>
      </Container>
    </BrowserRouter>
  )
}

export default App;
