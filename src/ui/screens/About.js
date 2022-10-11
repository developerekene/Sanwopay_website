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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
        </p>
      </div>
      <div className="aboutDivOne">
        <div>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <p className="aboutDivOneP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.{" "}
          </p>
          <p className="aboutDivOneP">
            Eget sit urna imperdiet id. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Egestas venenatis velit eu odio vitae tristique.
            Eget sit urna imperdiet id.{" "}
          </p>
        </div>
        <div>
          <Image src={require("../../images/Rectangle4.png")} />
        </div>
      </div>
      <div className="aboutDivOne">
        <div className="aboutDivOneP">
          <Image src={require("../../images/Rectangle4.png")} />
        </div>
        <div>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
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
            <h2>Bills Payments</h2>
            <p className="aboutDivThreeInnerP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="aboutDivThreeInner">
            <Image src={require("../../images/services.png")} />
            <h2>Bills Payments</h2>
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
            <h2>Bills Payments</h2>
            <p className="aboutDivThreeInnerP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="aboutFourInner">
            <Image src={require("../../images/services.png")} />
            <h2>Bills Payments</h2>
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
            <h5 className="aboutDivSixInnerH">Founder</h5>
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
            <h2 className="aboutDivSixInnerH">Samson Bayo</h2>
            <h5 className="aboutDivSixInnerH">Founder</h5>
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
            <h2 className="aboutDivSixInnerH">Samson Bayo</h2>
            <h5 className="aboutDivSixInnerH">Founder</h5>
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
            <h2 className="aboutDivSixInnerH">Samson Bayo</h2>
            <h5 className="aboutDivSixInnerH">Founder</h5>
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
            <h2 className="aboutDivSixInnerH">Samson Bayo</h2>
            <h5 className="aboutDivSixInnerH">Founder</h5>
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
            <h2 className="aboutDivSixInnerH">Samson Bayo</h2>
            <h5 className="aboutDivSixInnerH">Founder</h5>
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
