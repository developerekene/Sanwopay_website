import * as React from "react";
import Nav from "react-bootstrap/Nav";
import { Button, Image } from "react-bootstrap";

function NavBar() {
  return (
    <div className="navBar">
      <div >
        <li>
          <a href="/">
          <Image className="navBarLogo" src={require("../../images/SanwopayLogo.png")}/>
          </a>
        </li>
        
      </div>
      <div>
        <Nav className="navMain"
          variant="pills"
          defaultActiveKey="/home"
        >
          
          <Nav.Item>
            <Nav.Link
             className="navLink"
              href="/about"
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="navLink"
              href="/blog"
            >
              Blog
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              className="navLink"
              href="/articles"
            >
              Articles
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div>
        <Button className="buttonNav" variant="outline-secondary">
          Download App
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
