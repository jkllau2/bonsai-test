import React from 'react';
import {
  Container,
  Row,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Navigation = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Nav>
            <NavItem>
              <NavLink href="/">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">My Profile</NavLink>
            </NavItem>
          </Nav>
        </Row>
      </Container>
    </div>
  );
}

export default Navigation;