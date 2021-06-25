import { Alignment, Button, Classes, Intent, Navbar, NavbarDivider, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import React from 'react';

type NavBarProps = {

}

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Ricardo Doberstein</NavbarHeading>
        <NavbarDivider />
        <Button intent={Intent.PRIMARY} className={Classes.MINIMAL} icon="user" text="About me" />
        <Button className={Classes.MINIMAL} icon="build" text="Projects" disabled />
      </NavbarGroup>
    </Navbar>
  )
}

export default NavBar;
