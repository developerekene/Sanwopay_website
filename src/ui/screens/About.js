import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function About() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#C4C4C4",
          padding: 100,
          justifyContent: "center",
          height: 200,
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontStyle: "normal",
            fontSize: 48,
            fontFamily: "500",
            fontFamily: "Poppins",
          }}
        >
          About Us
        </p>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          paddingLeft: 100,
          paddingRight: 100,
          marginTop: 85,
          marginBottom: 100,
        }}
      >
        <div>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <p style={{ paddingRight: 300 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.{" "}
          </p>
          <p style={{ paddingRight: 300 }}>
            Eget sit urna imperdiet id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Egestas venenatis velit eu odio vitae tristique.
            Eget sit urna imperdiet id.{" "}
          </p>
        </div>
        <div>
          <Image src={require("../../images/Rectangle4.png")} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          paddingLeft: 100,
          paddingRight: 100,
          marginTop: 85,
          marginBottom: 100,
        }}
      >
        <div style={{ paddingRight: 300 }}>
          <Image src={require("../../images/Rectangle4.png")} />
        </div>
        <div>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <p style={{}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <div>
          <div>
            <h2>100+</h2>
            <p>Active Coustomers</p>
          </div>
          <div>
            <h2>50+</h2>
            <p>Users</p>
          </div>
        </div>
        <div>
        <Button
            style={{
              padding: 10,
              width: 183,
              height: 64,
              borderRadius: 8,
              backgroundColor: "#000000",
              color: "#ffffff",
              marginBottom: 115,
              fontFamily: "Poppins"
            }}
            variant="dark"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
