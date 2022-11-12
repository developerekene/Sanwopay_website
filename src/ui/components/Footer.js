import React from "react";
import { Image } from "react-bootstrap";

export default function () {
  return (
    <div className="footerMainDiv">
      <div className="footerInnerDiv">
        <div>
          {/* <h2 style={{fontSize: 30, fontWeight: 'bold'}}>Sanwo Pay</h2> */}
          <Image
            className="footerInnerDivImager"
            src={require("../../images/logowhite.png")}
          />
          <p className="footerInnerDivP">
            A seamless way to pay for bus ride, goods and services in the open
            market, pay that Boli seller along the road without cash.
          </p>
        </div>
        <div className="footerContent">
          <div style={{ justifyContent: "center" }}>
            <h4 style={{ textAlign: "center" }}>
              Company
            </h4>
            <ul className="footerContentUl">
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/blog">Blogs</a>
              </li>
              <li>
                <a href="/vendors">
                  <a>Vendors</a>
                </a>
              </li>
              <li>
                <a href="/articles">NewsLetters</a>
              </li>
            </ul>
          </div>
          <div style={{ justifyContent: "center" }}>
            <h4 style={{ textAlign: "center" }}>
              Company
            </h4>
            <ul className="footerContentUl">
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/blog">Blogs</a>
              </li>
              <li>
                <a href="/vendors">
                  <a>Vendors</a>
                </a>
              </li>
              <li>
                <a href="/articles">NewsLetters</a>
              </li>
            </ul>
          </div>
          <div style={{ justifyContent: "center" }}>
            <h4 style={{ textAlign: "center" }}>
              Company
            </h4>
            <ul className="footerContentUl">
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/blog">Blogs</a>
              </li>
              <li>
                <a href="/vendors">
                  <a>Vendors</a>
                </a>
              </li>
              <li>
                <a href="/articles">NewsLetters</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerContentCopywrite">
        <div>
          <p>(c) 2022 Sawopay, All Rights Reserved</p>
        </div>
        <div className="footerContentTerms">
          <p className="footerContentTermsP">
            <a href="#">Terms of Use</a>
          </p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}
