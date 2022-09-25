import React from "react";
import { Image } from "react-bootstrap";

export default function () {
  return (
    <div
      style={{
        backgroundColor: "#C4C4C4",
        height: 383,
        paddingLeft: 100,
        paddingRight: 100,
        alignItems: "center",
        fontFamily: "Work Sans"
      }}
    >
      <div style={{ paddingTop: 72, display: "flex", justifyContent: "space-between" }}>
        <div >
          <Image src={require("../../images/Rectanglef.png")} />
          <p style={{paddingRight: 600}}>
            Egestas venenatis velit eu odio vitae tristique. Eget sit urna
            imperdiet id orem{" "}
          </p>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <h4>Company</h4>
                <ul>
                    <li style={{textDecoration: "none"}}>About us</li>
                    <li>Blogs</li>
                    <li>Vendors</li>
                    <li>News Letters</li>
                </ul>
            </div>
            <div>
            <h4>Company</h4>
                <ul>
                    <li>About us</li>
                    <li>Blogs</li>
                    <li>Vendors</li>
                    <li>News Letters</li>
                </ul>
            </div>
            <div>
            <h4>Company</h4>
                <ul>
                    <li>About us</li>
                    <li>Blogs</li>
                    <li>Vendors</li>
                    <li>News Letters</li>
                </ul>
            </div>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div>
            <p>(c) 2022 Sawopay, All Rights Reserved</p>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <p style={{marginRight: 50}}>Terms of Use</p>
            <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
