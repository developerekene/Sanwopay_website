import * as React from "react";
import Nav from "react-bootstrap/Nav";
import { Button, Image } from "react-bootstrap";
import { IoMenu } from "react-icons/io5";

function NavBar() {
  const [display, setdisplay] = React.useState("none");

  function toogleMenu() {
    if (display === "none") {
      setdisplay("block");
      alert("button menu");
    }
  }

  return (
    <div className="navBar">
        <div>
          <li>
            <a href="/">
              <Image
              style={{width: 219, height: 46}}
                className="navBarLogo"
                src={require("../../images/mainLogoSP.png")}
              />
            </a>
          </li>
        </div>
        <div>
          <Nav className="navMain" variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link className="navLink" href="/about">
                About Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/blog">
                Blog
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/articles">
                Articles
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div>
          <Button className="buttonNav" variant="outline-secondary" href="https://play.google.com/store/apps/details?id=com.sanwopay"> 
            Download App
          </Button>
        </div>
        <div className="menuBtn">
          <button onClick={toogleMenu}>
            <IoMenu style={{ color: "blue" }} />
          </button>
        </div>
        <div className="secondNav">
          <ul className="secondNavUl">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/articles">Articles</a>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default NavBar;
