import React from "react";
import { Image } from "react-bootstrap";

export default function () {
  return (
    <div className="footerMainDiv">
      <div className="footerInnerDiv">
        <div>
          <Image
            className="footerInnerDivImage"
            src={require("../../images/Rectanglef.png")}
          />
          <p className="footerInnerDivP">
          A seamless way to pay for bus rides, goods, and services in the open market, pay that Boli seller along the road without cash.
          </p>
        </div>
        <div className="footerContent">
          <div style={{justifyContent: 'center'}}>
            <h4 style={{textAlign: 'center'}}>Company</h4>
            <ul className="footerContentUl">
              <li>About us</li>
              <li>Blogs</li>
              <li>Vendors</li>
              <li>News Letters</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerContentCopywrite">
        <div>
          <p>(c) 2022 Sawopay, All Rights Reserved</p>
        </div>
        <div className="footerContentTerms">
          <p className="footerContentTermsP">Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
