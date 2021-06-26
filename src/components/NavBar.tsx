import { Alignment, Button, Classes, Intent, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

type NavBarProps = {

}

const NavBar: React.FC<NavBarProps> = (props) => {
  const location = useLocation();
  const history = useHistory();

  const [page, setPage] = React.useState<"about" | "projects">("about");

  React.useEffect(() => {
    if (location) {
      if (location.pathname === "/projects") setPage('projects');
      else setPage('about');
    }
  }, [location])

  function handleAboutClick(): void {
    history.push('/about');
  }

  function handleProjectsClick(): void {
    history.push('/projects');
  }

  return (
    <Navbar fixedToTop={true}>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Ricardo Doberstein</NavbarHeading>
        <NavbarDivider />
        <Button onClick={handleAboutClick} intent={page === "about" ? Intent.PRIMARY : undefined} className={Classes.MINIMAL} icon="user" text="About me" />
        <Button onClick={handleProjectsClick} intent={page === "projects" ? Intent.PRIMARY : undefined} className={Classes.MINIMAL} icon="build" text="Projects" />
      </NavbarGroup>
    </Navbar>
  )
}

export default NavBar;
