import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function BlogPage() {
  return (
    <div>
      <div className="blogSecondDiv">
        <p className="blogSecondDivP">
          Blog & Newsletter
        </p>
        <p className="blogSecondDivPtwo">
          Welcome to our Blog section
        </p>
      </div>
      <div className="leftDiv">
        <div className="leftDivImage">
          <Image className="leftDivImageMain" src={require("../../images/Rectangleh.png")} />
          <div className="leftDivTwo">
            <div className="leftDivThree">
              <Image
                width={50}
                height={50}
                src={require("../../images/Avatar.png")}
              />
              <h3 className="divPTwo">Author Name</h3>
            </div>
            <div className="leftDivFour">
              <Image src={require("../../images/Calandar.png")} />
              <h3 className="divPTwo">08/04/2022</h3>
            </div>
          </div>
          <div>
            <h4>An Effective Article You’ll love</h4>
            <p>
              Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor
              sit amet, consectetur Nulla fringilla purus at leo dignissim
              congue. Mauris elementum accumsan leo vel tempor. Sit amet cursus
              nisl aliquam. …
            </p>
          </div>
          <div className="leftDivSix">
            <Image src={require("../../images/Rectangleg.png")} />
            <div>
              <h1 className="divP">Random Article Title</h1>
              <p className="divP">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetu
              </p>
              <p className="divP">Read More</p>
            </div>
          </div>

          <div className="leftDivSeven">
            <Image className="leftDivSevenImage" src={require("../../images/Rectangleg.png")} />
            <div>
              <h1 className="divP">Random Article Title</h1>
              <p className="divP">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetu
              </p>
              <p className="divP">Read More</p>
            </div>
          </div>

          <div className="divEight">
            <Image src={require("../../images/Rectangleg.png")} />
            <div>
              <h1 className="divP">Random Article Title</h1>
              <p className="divP">
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetu
              </p>
              <p className="divP">Read More</p>
            </div>
          </div>
        </div>
        <div className="divNine">
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Search Post" />
              </Form.Group>
            </Form>
            <h2>Most Popular</h2>
            <div>
              <div className="divSeven">
                <Image src={require("../../images/Rectangleg.png")} />
                <div>
                  <h1 className="divP">Random Article Title</h1>
                  <p className="divP">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetu
                  </p>
                  <p className="divP">Read More</p>
                </div>
              </div>
              <div className="divSix">
                <Image src={require("../../images/Rectangleg.png")} />
                <div>
                  <h1 className="divP">Random Article Title</h1>
                  <p className="divP">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetu
                  </p>
                  <p className="divP">Read More</p>
                </div>
              </div>
              <div className="divFive">
                <Image src={require("../../images/Rectangleg.png")} />
                <div>
                  <h1 className="divP">Random Article Title</h1>
                  <p className="divP">
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetu
                  </p>
                  <p className="divP">Read More</p>
                </div>
              </div>
            </div>
          </div>
          <h3>Tags:</h3>
          <div className="divFour">
            <Button className="divFourButton" variant="dark">
              Savings
            </Button>
            <Button className="divFourButton"
              variant="dark"
            >
              Finance
            </Button>
            <Button className="divFourButton"
              variant="dark"
            >
              Ideas
            </Button>
          </div>
          <div className="divFour">
            <Button className="divFourButton"
              variant="dark"
            >
              Product
            </Button>
            <Button className="divFourButton" variant="dark"
            >
              Business
            </Button>
            <Button className="divFourButton" variant="dark"
            >
              Strategy
            </Button>
          </div>
          <div className="divFour">
            <Button className="divFourButton" variant="dark"
            >
              Tips
            </Button>
            <Button className="divFourButton" variant="dark"
            >
              Advise
            </Button>
            <Button className="divFourButton" variant="dark"
            >
              Marketing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
