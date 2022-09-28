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
            <Button
              style={{
                padding: 10,
                width: 183,
                height: 64,
                borderRadius: 8,
                backgroundColor: "#000000",
                color: "#ffffff",
                marginBottom: 115,
                fontFamily: "Poppins",
              }}
              variant="dark"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 64 }}>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>
        <p
          style={{
            textAlign: "center",
            paddingRight: 329,
            paddingLeft: 329,
            paddingTop: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            marginLeft: 120,
            marginRight: 120,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              backgroundColor: "#C4C4C4",
              width: 387,
              height: 389,
              marginRight: 20,
              borderRadius: 20,
              paddingLeft: 40,
              paddingTop: 48,
            }}
          >
            <Image src={require("../../images/services.png")} />
            <h2>Bills Payments</h2>
            <p style={{ paddingRight: 100 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#C4C4C4",
              width: 387,
              height: 389,
              marginRight: 20,
              borderRadius: 20,
              paddingLeft: 40,
              paddingTop: 48,
            }}
          >
            <Image src={require("../../images/services.png")} />
            <h2>Bills Payments</h2>
            <p style={{ paddingRight: 100 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#C4C4C4",
              width: 387,
              height: 389,
              borderRadius: 20,
              paddingLeft: 40,
              paddingTop: 48,
            }}
          >
            <Image src={require("../../images/services.png")} />
            <h2>Bills Payments</h2>
            <p style={{ paddingRight: 100 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: 120,
            marginRight: 120,
            marginBottom: 100,
          }}
        >
          <div
            style={{
              backgroundColor: "#C4C4C4",
              width: 347,
              height: 349,
              marginRight: 20,
              borderRadius: 20,
              paddingLeft: 40,
              paddingTop: 48,
            }}
          >
            <Image src={require("../../images/services.png")} />
            <h2>Bills Payments</h2>
            <p style={{ paddingRight: 100 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#C4C4C4",
              width: 347,
              height: 349,
              marginRight: 20,
              borderRadius: 20,
              paddingLeft: 40,
              paddingTop: 48,
            }}
          >
            <Image src={require("../../images/services.png")} />
            <h2>Bills Payments</h2>
            <p style={{ paddingRight: 100 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet,
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 64 }}>
        <h2 style={{ textAlign: "center" }}>Our Team</h2>
        <p
          style={{
            textAlign: "center",
            paddingRight: 329,
            paddingLeft: 329,
            paddingTop: 20,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            marginLeft: 120,
            marginRight: 120,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#C4C4C4",
              width: 387,
              height: 289,
              marginRight: 20,
              borderRadius: 20,
              paddingTop: 48,
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 style={{ textAlign: "center" }}>Samson Bayo</h2>
            <h5 style={{ textAlign: "center" }}>Founder</h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#C4C4C4",
              width: 387,
              height: 289,
              marginRight: 20,
              borderRadius: 20,
              paddingTop: 48,
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 style={{ textAlign: "center" }}>Samson Bayo</h2>
            <h5 style={{ textAlign: "center" }}>Founder</h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#C4C4C4",
              width: 387,
              height: 289,
              marginRight: 20,
              borderRadius: 20,
              paddingTop: 48,
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 style={{ textAlign: "center" }}>Samson Bayo</h2>
            <h5 style={{ textAlign: "center" }}>Founder</h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            marginLeft: 120,
            marginRight: 120,
            marginBottom: 100,
            // justifyContent: "center",
          }}
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#C4C4C4",
              width: 387,
              height: 289,
              marginRight: 20,
              borderRadius: 20,
              paddingTop: 48,
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 style={{ textAlign: "center" }}>Samson Bayo</h2>
            <h5 style={{ textAlign: "center" }}>Founder</h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#C4C4C4",
              width: 387,
              height: 289,
              marginRight: 20,
              borderRadius: 20,
              paddingTop: 48,
              paddingLeft: 20,
              paddingRight: 20,
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={require("../../images/services.png")} />
            </div>
            <h2 style={{ textAlign: "center" }}>Samson Bayo</h2>
            <h5 style={{ textAlign: "center" }}>Founder</h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image
                style={{ marginRight: 15 }}
                src={require("../../images/social.png")}
              />
              <Image src={require("../../images/social.png")} />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          marginRight: 100,
          marginLeft: 100,
          height: 146,
          backgroundColor: "#C4C4C4",
          borderRadius: 20,
          marginBottom: 100,
          display: "flex",
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 58
        }}
      >
        <div>
          <h2>Let’s keep you posted on our updates</h2>
        </div>
        <div style={{display: "flex"}}>
          <Form>
            <Form.Control style={{width: 505, height: 87, borderRadius: 20, paddingLeft: 20}} type="text" placeholder="Search Post" />
          </Form>
          <Button
              style={{
                padding: 10,
                width: 180,
                height: 92,
                borderRadius: 8,
                backgroundColor: "#000000",
                color: "#ffffff",
                marginRight: 10,
                marginLeft: -30
              }}
              variant="dark"
            >
              Savings
            </Button>
        </div>
      </div>
    </div>
  );
}
