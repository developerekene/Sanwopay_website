import React from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Footer from "../components/Footer";

export default function BlogPage() {
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
          Blog & Newsletter
        </p>
        <p style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 80,
          marginLeft: 120,
          marginRight: 120,
          //   width: 200,
        }}
      >
        <div style={{ width: 600 }}>
          <Image width={600} src={require("../../images/Rectangleh.png")} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                width={50}
                height={50}
                src={require("../../images/Avatar.png")}
              />
              <h3 style={{ marginLeft: 10 }}>Author Name</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image src={require("../../images/Calandar.png")} />
              <h3 style={{ marginLeft: 10 }}>08/04/2022</h3>
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Image src={require("../../images/Rectangleg.png")} />
            <div>
              <h1 style={{ marginLeft: 20 }}>Random Article Title</h1>
              <p style={{ marginLeft: 20 }}>
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetu
              </p>
              <p style={{ marginLeft: 20 }}>Read More</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Image src={require("../../images/Rectangleg.png")} />
            <div>
              <h1 style={{ marginLeft: 20 }}>Random Article Title</h1>
              <p style={{ marginLeft: 20 }}>
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetu
              </p>
              <p style={{ marginLeft: 20 }}>Read More</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <Image src={require("../../images/Rectangleg.png")} />
            <div>
              <h1 style={{ marginLeft: 20 }}>Random Article Title</h1>
              <p style={{ marginLeft: 20 }}>
                Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                dolor sit amet, consectetu
              </p>
              <p style={{ marginLeft: 20 }}>Read More</p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: 50, paddingRight: 20 }}>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Search Post" />
              </Form.Group>
            </Form>
            <h2>Most Popular</h2>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 30,
                }}
              >
                <Image src={require("../../images/Rectangleg.png")} />
                <div>
                  <h1 style={{ marginLeft: 20 }}>Random Article Title</h1>
                  <p style={{ marginLeft: 20 }}>
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetu
                  </p>
                  <p style={{ marginLeft: 20 }}>Read More</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 30,
                }}
              >
                <Image src={require("../../images/Rectangleg.png")} />
                <div>
                  <h1 style={{ marginLeft: 20 }}>Random Article Title</h1>
                  <p style={{ marginLeft: 20 }}>
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetu
                  </p>
                  <p style={{ marginLeft: 20 }}>Read More</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 30,
                }}
              >
                <Image src={require("../../images/Rectangleg.png")} />
                <div>
                  <h1 style={{ marginLeft: 20 }}>Random Article Title</h1>
                  <p style={{ marginLeft: 20 }}>
                    Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum
                    dolor sit amet, consectetu
                  </p>
                  <p style={{ marginLeft: 20 }}>Read More</p>
                </div>
              </div>
            </div>
          </div>
          <h3>Tags:</h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
                marginRight: 10,
              }}
              variant="dark"
            >
              Savings
            </Button>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
                marginRight: 10,
              }}
              variant="dark"
            >
              Finance
            </Button>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              variant="dark"
            >
              Ideas
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
                marginRight: 10,
              }}
              variant="dark"
            >
              Product
            </Button>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
                marginRight: 10,
              }}
              variant="dark"
            >
              Business
            </Button>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              variant="dark"
            >
              Strategy
            </Button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
                marginRight: 10,
              }}
              variant="dark"
            >
              Tips
            </Button>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
                marginRight: 10,
              }}
              variant="dark"
            >
              Advise
            </Button>
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#000000",
              }}
              variant="dark"
            >
              Marketing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
