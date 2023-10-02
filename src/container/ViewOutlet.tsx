import styled from "@emotion/styled";
import { Outlet, Link } from "react-router-dom";

import { Header } from "@src/components/Header";
import { Icon } from "@src/components/Icon";
import { Nav } from "@src/components/Nav";

import views from "./Views";

const Container = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "25px 14px",
});

Container.defaultProps = {
  id: "basic-view",
};

export const ViewOutlet = ({ children = null }) => (
  <Container>
    <Header>
      <Icon />
      <Nav>
        {views.map(({ path }) => (
          <Link
            key={path}
            to={path}
            style={{
              padding: "8px 13px",
              textDecoration: location.pathname === path ? "underline" : "none",
            }}
          >
            {path}
          </Link>
        ))}
      </Nav>
    </Header>
    {!children ? <Outlet /> : children}
  </Container>
);
