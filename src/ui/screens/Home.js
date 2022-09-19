import * as React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 95,
        paddingLeft: 100,
        paddingRight: 100,
      }}
    >
      <div>
        <h1
          style={{
            fontSize: 48,
            paddingRight: 200,
            fontWeight: "500",
            fontFamily: "work Sans",
            fontStyle: "normal",
            // lineHeight: 2
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h1>
        <p
          style={{
            fontSize: 18,
            paddingRight: 200,
            fontWeight: "90",
            fontFamily: "work Sans",
            fontStyle: "normal",
            marginBottom: 45,
            marginTop: 24
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button style={{padding: 10, width: 183, height: 64, borderRadius: 8, backgroundColor: "#000000", color: "#ffffff"}} variant="dark">Get started</Button>
      </div>

      <div>
        <Image src={require("../../images/Rectangle3.png")} />
      </div>
    </div>
  );
};
