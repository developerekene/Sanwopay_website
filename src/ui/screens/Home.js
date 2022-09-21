import * as React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Accordion from "react-bootstrap/Accordion";

export const Home = () => {
  return (
    <div>
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
              marginTop: 24,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button
            style={{
              padding: 10,
              width: 183,
              height: 64,
              borderRadius: 8,
              backgroundColor: "#000000",
              color: "#ffffff",
            }}
            variant="dark"
          >
            Get started
          </Button>
        </div>

        <div>
          <Image src={require("../../images/Rectangle3.png")} />
        </div>
      </div>
      {
        //
      }
      <div
        style={{
          backgroundColor: "#C4C4C4",
          height: 527,
          paddingLeft: 100,
          paddingRight: 100,
          fontFamily: "Work sans",
        }}
      >
        <div>
          <h1
            style={{
              paddingTop: 64,
              textAlign: "center",
              fontFamily: "Work Sans",
              fontWeight: "400",
              fontSize: 48,
            }}
          >
            Why you should Sanwo Pay?
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "400",
              marginBottom: 64,
            }}
          >
            {
              "Egestas Vensatis velit eu odio vitae tristique. \n Egit sit urna imperdiet id"
            }
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <h1>01</h1>
            <h3>Guaranted Saftey</h3>
            <p style={{ marginRight: 100, fontWeight: "400" }}>
              Egestas Vensatis velit eu odio vitae tristique. Egit sit urna
              imperdiet id orem ipsum dolor sit.
            </p>
          </div>
          <div>
            <h1>02</h1>
            <h3>Simple Interface</h3>
            <p style={{ marginRight: 100, fontWeight: "400" }}>
              Egestas Vensatis velit eu odio vitae tristique. Egit sit urna
              imperdiet id orem ipsum dolor sit.
            </p>
          </div>
          <div>
            <h1>03</h1>
            <h3>Guaranted Saftey</h3>
            <p style={{ marginRight: 100, fontWeight: "400" }}>
              Egestas Vensatis velit eu odio vitae tristique. Egit sit urna
              imperdiet id orem ipsum dolor sit.
            </p>
          </div>
        </div>
      </div>
      {
        //
      }
      <div
        style={{
          display: "flex",
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 100,
          fontFamily: "Work Sans",
          marginBottom: 96,
        }}
      >
        <div>
          <Image src={require("../../images/Rectangle5.png")} />
        </div>
        <div style={{ marginTop: 120, marginLeft: 122, marginRight: 122 }}>
          <h1 style={{}}>Lorem ipsum dolor sit amet, consectetur</h1>
          <p>
            Egestas venenatis velit eu odio vitae tristique. Eget sit urna
            imperdiet id orem ipsum dolor sit
          </p>
          <p>
            Egestas venenatis velit eu odio vitae tristique. Eget sit urna
            imperdiet id orem ipsum dolor sit
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 100,
          fontFamily: "Work Sans",
          marginBottom: 96,
        }}
      >
        <div style={{ marginLeft: 122, marginRight: 122 }}>
          <h1 style={{}}>Lorem ipsum dolor sit amet, consectetur</h1>
          <p>
            Egestas venenatis velit eu odio vitae tristique. Eget sit urna
            imperdiet id orem ipsum dolor sit
          </p>
          <p>
            Egestas venenatis velit eu odio vitae tristique. Eget sit urna
            imperdiet id orem ipsum dolor sit
          </p>
        </div>
        <div>
          <Image src={require("../../images/Rectangle5.png")} />
        </div>
      </div>
      {
        // How it works section
      }
      <div
        style={{
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 50,
          fontFamily: "Work Sans",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: 40,
            fontSize: 40,
            fontWeight: "400",
          }}
        >
          How it works
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ alignContent: "center" }}>
              <Image src={require("../../images/Rectanglec.png")} />
            </div>

            <h3 style={{ textAlign: "center" }}>How It Work</h3>
            <p style={{ fontWeight: "400", textAlign: "center" }}>
              Egestas venenatis velit eu odio vitae tristique. Eget sit urna
              imperdiet id orem
            </p>
          </div>
          <div>
            <Image src={require("../../images/Rectanglec.png")} />
            <h3 style={{ textAlign: "center" }}>How It Work</h3>
            <p style={{ fontWeight: "400", textAlign: "center" }}>
              Egestas venenatis velit eu odio vitae tristique. Eget sit urna
              imperdiet id orem
            </p>
          </div>
          <div>
            <Image src={require("../../images/Rectanglec.png")} />
            <h3 style={{ textAlign: "center" }}>How It Work</h3>
            <p style={{ fontWeight: "400", textAlign: "center" }}>
              Egestas venenatis velit eu odio vitae tristique. Eget sit urna
              imperdiet id orem
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: 100, textAlign: "center", fontFamily: "Work Sans" }}
      >
        <h1>Do More With SanwoPay</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
        </p>
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Image src={require("../../images/Rectangleb.png")} style={{}} />
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 48 }}
        >
          <div
            style={{
              backgroundColor: "#C4C4C4",
              marginRight: 16,
              width: 225,
              height: 70,
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Image
              src={require("../../images/Rectangled.png")}
              style={{
                borderRadius: 10,
                width: 38,
                height: 37,
                marginRight: 5,
                marginLeft: 17,
              }}
            />
            <div>
              <h6 style={{ fontSize: 10, fontWeight: 500 }}>Download on the</h6>
              <h6 style={{ fontSize: 10, fontWeight: 500 }}>App Store</h6>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#C4C4C4",
              marginRight: 16,
              width: 225,
              height: 70,
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
            }}
          >
            <Image
              src={require("../../images/Rectangled.png")}
              style={{
                borderRadius: 10,
                width: 38,
                height: 37,
                marginRight: 5,
                marginLeft: 17,
              }}
            />
            <div>
              <h6 style={{ fontSize: 10, fontWeight: 500 }}>Download on the</h6>
              <h6 style={{ fontSize: 10, fontWeight: 500 }}>Google Store</h6>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingRight: 100,
          paddingLeft: 100,
          backgroundColor: "#F6F2F1",
          display: "flex",
          marginTop: 200,
          height: 344,
          alignItems: "center",
          fontFamily: "Work Sans",
        }}
      >
        <div style={{ marginRight: 10, display: "flex", alignItems: "center" }}>
          <Image src={require("../../images/Rectangled.png")} />
        </div>
        <div>
          <p style={{ fontSize: 24, fontWeight: "400", paddingRight: 115 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p style={{ fontSize: 32, fontWeight: "500" }}>Heffret Brown</p>
          <p>Customer</p>
        </div>
        <div style={{ display: "flex" }}>
          <Image
            src={require("../../images/Rectanglee.png")}
            style={{ marginTop: -90, marginRight: 20 }}
          />
        </div>
        <div style={{ marginRight: 10, display: "flex", alignItems: "center" }}>
          <Image src={require("../../images/Rectangled.png")} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          paddingRight: 100,
          paddingLeft: 100,
          marginTop: 100,
          justifyContent: "space-between",
        }}
      >
        <div>
          <Image
            src={require("../../images/Rectanglee.png")}
            // style={{ marginTop: -90, marginRight: 20 }}
          />
        </div>
        <div style={{ textAlign: "left", width: 700 }}>
          <h2>FAQ's</h2>
        </div>
      </div>
    </div>
  );
};
