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
            Egestas venenatis velit eu odio vitae tristique. Eget sit urna
            imperdiet id orem{" "}
          </p>
        </div>
        <div className="footerContent">
          <div>
            <h4>Company</h4>
            <ul className="footerContentUl">
              <li>About us</li>
              <li>Blogs</li>
              <li>Vendors</li>
              <li>News Letters</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="footerContentUl">
              <li>About us</li>
              <li>Blogs</li>
              <li>Vendors</li>
              <li>News Letters</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
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
