import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function About() {
  return (
    <div>
      <div className="aboutDiv">
        <p className="aboutDivP">
          About Us
        </p>
        <p className="aboutDivPTwo">
          We have so much to offer you, check us out.
        </p>
      </div>
      <div className="aboutDivOne">
        <div>
          <h1>Offering Financial Services</h1>
          <p className="aboutDivOneP">
            Our manin function is to symplify access to finalcial service for transport operators and their surrounding small business echo system.
          </p>
          {/* <p className="aboutDivOneP">
            Eget sit urna imperdiet id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Egestas venenatis velit eu odio vitae tristique.
            Eget sit urna imperdiet id.{" "}
          </p> */}
        </div>
        <div>
          <Image width={'100%'} src={require("../../images/FINANCIAL-SERVICES-BUSINESS.jpeg")} />
        </div>
      </div>
      <div className="aboutDivOne">
        <div className="aboutDivOneP">
          <Image width={'100%'} src={require("../../images/mobile-2-sanwopay.png")} />
        </div>
        <div>
          <h1>Automate Transport Payments</h1>
          <p>
            Using our services, you would be able to pay using our mobile phone using our mobile app. It is that simple. All you need to do is download the app and sign up.
          </p>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 20 }}>
              <h2>100+</h2>
              <p>Active Coustomers</p>
            </div>
            <div>
              <h2>50+</h2>
              <p>Users</p>
            </div>
          </div>
          <div>
            <Button className="aboutBtn" variant="dark"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="aboutDivTwo">
        <h2 className="aboutDivTwoHtwo">Our Services</h2>
        <p className="aboutDivTwoP">
          Find all our various services below. We offer a long range of options to choose from.
        </p>
      </div>
      <div>
        <div className="aboutDivThree">
          <div className="aboutDivThreeInner">
            <Image src={require("../../images/services.png")} />
            <h2>Bills Payments</h2>
            <p className="aboutDivThreeInnerP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="aboutDivThreeInner">
            <Image src={require("../../images/services.png")} />
            <h2>Transport Payments</h2>
            <p className="aboutDivThreeInnerP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="aboutDivThreeInner">
            <Image src={require("../../images/services.png")} />
            <h2>Loan Collection</h2>
            <p className="aboutDivThreeInnerP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
        <div className="aboutFour">
          <div className="aboutFourInner">
            <Image src={require("../../images/services.png")} />
            <h2>USSD Payments</h2>
            <p className="aboutDivThreeInnerP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="aboutFourInner">
            <Image src={require("../../images/services.png")} />
            <h2>Financial Advise</h2>
            <p className="aboutDivThreeInnerP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
      </div>
      <div className="aboutDivFive">
        <h2 className="aboutDivFiveHtwo">Our Team</h2>
        <p className="aboutDivFiveP">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
        </p>
      </div>
      <div>
        <div className="aboutDivSix">
          <div className="aboutDivSixInner">
            <div className="aboutDivSixInnerInner">
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 className="aboutDivSixInnerH">Samson Bayo</h2>
            <h5 className="aboutDivSixInnerH">CEO/Founder</h5>
            <div className="aboutDivSixImage">
              <Image className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
          <div className="aboutDivSixInner">
            <div className="aboutDivSixInnerInner">
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 className="aboutDivSixInnerH">Elisha Eghomwanre</h2>
            <h5 className="aboutDivSixInnerH">COO/Founder</h5>
            <div className="aboutDivSixImage">
              <Image
                className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image className="aboutDivSixImageMain" 
              src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
          <div className="aboutDivSixInner">
            <div className="aboutDivSixInnerInner">
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 className="aboutDivSixInnerH">Arron Israel</h2>
            <h5 className="aboutDivSixInnerH">CTO</h5>
            <div className="aboutDivSixImage">
              <Image
                className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image
                className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
        </div>
      </div>
      <div className="aboutDivSix">
          <div className="aboutDivSixInner">
            <div className="aboutDivSixInnerInner">
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 className="aboutDivSixInnerH">Deborah Ologundudu</h2>
            <h5 className="aboutDivSixInnerH">UI/UX</h5>
            <div className="aboutDivSixImage">
              <Image className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
          <div className="aboutDivSixInner">
            <div className="aboutDivSixInnerInner">
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 className="aboutDivSixInnerH">Ekenedilichukwu Okoli</h2>
            <h5 className="aboutDivSixInnerH">Software Engineer</h5>
            <div className="aboutDivSixImage">
              <Image
                className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image className="aboutDivSixImageMain" 
              src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
          <div className="aboutDivSixInner">
            <div className="aboutDivSixInnerInner">
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 className="aboutDivSixInnerH">Kenneth Ajah</h2>
            <h5 className="aboutDivSixInnerH">Software Developer</h5>
            <div className="aboutDivSixImage">
              <Image
                className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image
                className="aboutDivSixImageMain"
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
        </div>
      <div className="aboutBase">
        <div>
          <h2>Let’s keep you posted on our updates</h2>
        </div>
        <div className="aboutBaseInner">
          <Form>
            <Form.Control className="aboutForm" type="text" placeholder="Email" />
          </Form>
          <Button className="aboutBaseBtn" variant="dark">
              Subscribe
            </Button>
        </div>
      </div>
    </div>
  );
}
