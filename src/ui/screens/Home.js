import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

export const Home = () => {
  //State
  const [open, setOpen] = useState(false);
  const [questionOne, setQuestionOne] = useState("none");
  const [questionTwo, setQuestionTwo] = useState("none");
  const [questionThree, setQuestionOneThree] = useState("none");

  function openQuestionOne() {
    if (questionOne === "none") {
      setQuestionOne("block");
      setQuestionTwo("none");
      setQuestionOneThree("none")
    } else {
      setQuestionOne("none");
    }
  }

  function openQuestionTwo() {
    if (questionTwo === "none") {
      setQuestionOne("none");
      setQuestionTwo("block");
      setQuestionOneThree("none")
    } else {
      setQuestionTwo("none");
    }
  }

  function openQuestionThree() {
    if (questionThree === "none") {
      setQuestionOne("none");
      setQuestionTwo("none");
      setQuestionOneThree("block")
    } else {
      setQuestionOneThree("none");
    }
  }
  return (
    <div>
      <div className="homeMainContainer">
        <div>
          <h1 className="headerTitle">
            Providing Finacial Services for small and medium Businesses
          </h1>
          <p className="headerParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button className="baseButton" variant="dark">
            Get started
          </Button>
        </div>

        <div>
          <Image className="topImage" src={require("../../images/bustoon.jpeg")} />
        </div>
      </div>
      {
        //
      }
      <div className="whySanwoPay">
        <div>
          <h1 className="whySanwoPayh1">Why you should Sanwo Pay?</h1>
          <p className="whySanwoPayP">
            {
              "Egestas Vensatis velit eu odio vitae tristique. \n Egit sit urna imperdiet id"
            }
          </p>
        </div>
        <div className="divList">
          <div>
            <h1>01</h1>
            <h3>Guaranted Saftey</h3>
            <p className="divListP">
              Egestas Vensatis velit eu odio vitae tristique. Egit sit urna
              imperdiet id orem ipsum dolor sit.
            </p>
          </div>
          <div>
            <h1>02</h1>
            <h3>Simple Interface</h3>
            <p className="divListP">
              Egestas Vensatis velit eu odio vitae tristique. Egit sit urna
              imperdiet id orem ipsum dolor sit.
            </p>
          </div>
          <div>
            <h1>03</h1>
            <h3>Guaranted Saftey</h3>
            <p className="divListP">
              Egestas Vensatis velit eu odio vitae tristique. Egit sit urna
              imperdiet id orem ipsum dolor sit.
            </p>
          </div>
        </div>
      </div>
      {
        //
      }
      <div className="divImageText">
        <div>
          <Image className="divImageImage" src={require("../../images/Rectangle5.png")} />
        </div>
        <div className="divImageTextInner">
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
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

      <div className="divImageText">
        <div className="divImageTextInner">
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
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
          <Image className="divImageImage" src={require("../../images/Rectangle5.png")} />
        </div>
      </div>
      {
        // How it works section
      }
      <div className="works">
        <h1 className="worksh1">How it works</h1>
        <div className="worksMainDiv">
          <div>
            <div className="worksImage">
              <Image className="worksImageImg" src={require("../../images/Rectanglec.png")} />
            </div>

            <h3 className="worksh3">How It Work</h3>
            <p className="worksP">
              Egestas venenatis velit eu odio vitae tristique. Eget sit urna
              imperdiet id orem
            </p>
          </div>
          <div>
            <div className="worksImage">
              <Image src={require("../../images/Rectanglec.png")} />
            </div>
            <h3 className="worksh3">How It Work</h3>
            <p className="worksP">
              Egestas venenatis velit eu odio vitae tristique. Eget sit urna
              imperdiet id orem
            </p>
          </div>
          <div>
            <div className="worksImage">
              <Image src={require("../../images/Rectanglec.png")} />
            </div>
            <h3 className="worksh3">How It Work</h3>
            <p className="worksP">
              Egestas venenatis velit eu odio vitae tristique. Eget sit urna
              imperdiet id orem
            </p>
          </div>
        </div>
      </div>
      <div className="vidDiv">
        <h1>Do More With SanwoPay</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
        </p>
        <div className="vidDivImage">
          <Image className="vidDivImageMain" src={require("../../images/Rectangleb.png")} />
        </div>
        <div className="vidAppDownload">
          <div className="appContent">
            <Image
              className="appContentImage"
              src={require("../../images/Rectangled.png")}
            />
            <div>
              <h6 className="divText">Download on the</h6>
              <h6 className="divText">App Store</h6>
            </div>
          </div>
          <div className="appContent">
            <Image
              className="appContentImage"
              src={require("../../images/Rectangled.png")}
            />
            <div>
              <h6 className="divText">Download on the</h6>
              <h6 className="divText">Google Store</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonal">
        <div className="testimonalImage">
          <Image className="testimonalImageMain" src={require("../../images/Rectangled.png")} />
        </div>
        <div>
          <p className="testimonalP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            venenatis velit eu odio vitae tristique. Eget sit urna imperdiet id.
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="testimonalP2">Heffret Brown</p>
          <p>Customer</p>
        </div>
        <div className="testimonalSideDiv">
          <Image
            className="testimonalSideDivImage"
            src={require("../../images/Rectanglee.png")}
          />
        </div>
        <div className="testimonalSideDiv2">
          <Image className="testimonalImageMain" src={require("../../images/Rectangled.png")} />
        </div>
      </div>
      <div className="faq">
        <div>
          <Image className="faqImage" src={require("../../images/Rectanglee.png")} />
        </div>
        <div className="faqText">
          <h2>FAQ's</h2>
          <div>
            <button className="faqButton" onClick={openQuestionOne}>
              What does Sanwo pay do
            </button>
            <p style={{ display: questionOne, paddingLeft: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div>
            <button className="faqButton" onClick={openQuestionTwo}>
              How to access loans
            </button>
            <p style={{ display: questionTwo, paddingLeft: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div>
            <button className="faqButton" onClick={openQuestionThree}>
              Where is Sanwopay located
            </button>
            <p style={{ display: questionThree, paddingLeft: 20 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              venenatis velit eu odio vitae tristique. Eget sit urna imperdiet
              id. Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
