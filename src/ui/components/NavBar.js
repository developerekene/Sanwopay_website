import * as React from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        fontFamily: "sans-serif",
        justifyContent: "space-between",
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 10,
        alignItems: "center",
        height: 100,
        backgroundColor: "#C4C4C4",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            width: 183,
            height: 50,
            justifyContent: "center",
            marginRight: 80,
          }}
        >
          <h2 style={{ textAlign: "center", fontFamily: "Work Sans", fontSize: "normal" }}>Logo</h2>
        </div>
        <Nav
          style={{ display: "flex", gap: 48 }}
          variant="pills"
          defaultActiveKey="/home"
        >
          <Nav.Item>
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "#000000",
                fontWeight: 500,
                fontSize: 18,
                fontFamily: "Work Sans",
                fontStyle: "normal",
                lineHeight: 21,
              }}
              href="/"
            >
              Menu
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "#000000",
                fontWeight: 500,
                fontSize: 18,
                fontFamily: "Work Sans",
                fontStyle: "normal",
                lineHeight: 21,
              }}
              href="/about"
            >
              Menu
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "#000000",
                fontWeight: 500,
                fontSize: 18,
                fontFamily: "Work Sans",
                fontStyle: "normal",
                lineHeight: 21,
              }}
              href="/blog"
            >
              Menu
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              style={{
                textDecoration: "none",
                color: "#000000",
                fontWeight: 500,
                fontSize: 18,
                fontFamily: "Work Sans",
                fontStyle: "normal",
                lineHeight: 21,
              }}
              href="/articles"
            >
              Menu
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div>
        <Button
          style={{
            backgroundColor: "#C4C4C4",
            padding: 10,
            outline: "none",
            borderRadius: 10,
            fontWeight: 500,
            fontSize: 18,
            fontFamily: "Work Sans",
            fontStyle: "normal",
          }}
          variant="outline-secondary"
        >
          Download App
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
