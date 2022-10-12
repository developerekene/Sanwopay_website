import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { AiOutlineUserAdd } from "react-icons/ai";

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
      setQuestionOneThree("none");
    } else {
      setQuestionOne("none");
    }
  }

  function openQuestionTwo() {
    if (questionTwo === "none") {
      setQuestionOne("none");
      setQuestionTwo("block");
      setQuestionOneThree("none");
    } else {
      setQuestionTwo("none");
    }
  }

  function openQuestionThree() {
    if (questionThree === "none") {
      setQuestionOne("none");
      setQuestionTwo("none");
      setQuestionOneThree("block");
    } else {
      setQuestionOneThree("none");
    }
  }
  return (
    <div>
      <div className="homeMainContainer">
        <div>
          <h1 className="headerTitle">
            A financial service support system for Transport operators and
            Shop-owners
          </h1>
          <p className="headerParagraph">
            A seamless way to pay for bus ride, goods and services in the open
            market, pay that Boli seller along the road without cash.
          </p>
          <Button
            className="baseButton"
            variant="dark"
            href="https://play.google.com/store/apps/details?id=com.sanwopay"
          >
            Get started
          </Button>
        </div>

        <div>
          <Image
            className="topImage"
            src={require("../../images/bustoon.jpeg")}
          />
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
              "At Sanwopay we are building a financial service support system for transport operators and their surrounding small business ecosystem, making it easy for them to receive payment, save money daily and get access to loans without leaving their motor parks or business location."
            }
          </p>
        </div>
        <div className="divList">
          <div>
            <h1>01</h1>
            <h3>Secured Data</h3>
            <p className="divListP">
              Secured user's data with end-to-end encryption. Adhering to
              International best practices.
            </p>
          </div>
          <div>
            <h1>02</h1>
            <h3>24/7 Customer Service</h3>
            <p className="divListP">
              Our helpdesks are always available 24/7 reach out for support.
            </p>
          </div>
          <div>
            <h1>03</h1>
            <h3>On Cash payments</h3>
            <p className="divListP">
              Don't have cash at the moment? Worry no more. You can make use of
              our app and in one clean swipe, your payments can be done.
            </p>
          </div>
        </div>
      </div>
      {
        //
      }
      <div className="divImageText">
        <div>
          <Image
            className="divImageImage"
            src={require("../../images/mobile-card-sanwopay.png")}
          />
        </div>
        <div className="divImageTextInner">
          <h1>Exciting possibilities with Sanwopay</h1>
          <p>
            you can easily pay a busdriver/shop owner, save money daily, apply
            and get transport loan all in one place.
          </p>
          <p>
            <ul>
              <li>Daily Savings</li>
              <li>Cash in Cash out</li>
              <li>Pay on the go</li>
              <li>Loan</li>
              <li>Charter a bus</li>
              <li>get a transport loan</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="divImageText">
        <div className="divImageTextInner">
          <h1>Scan to pay at Merchant outlets.</h1>
          <p>
            merchants can use Sanwopay to receive payments from customers at
            check out points. its easy and faster.
          </p>
        </div>
        <div>
          <Image
            className="divImageImage"
            src={require("../../images/mobile-2-sanwopay.png")}
          />
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
              <AiOutlineUserAdd
                style={{ width: 60, height: 60, color: "blue" }}
              />
            </div>

            <h3 className="worksh3">Register</h3>
            <p className="worksP">
              Download and register on the Sanwopay APP, or sign up through our
              community agents to become a user.
            </p>
          </div>
          <div>
            <div className="worksImage">
              <AiOutlineUserAdd
                style={{ width: 60, height: 60, color: "blue" }}
              />
            </div>
            <h3 className="worksh3">Top up wallet</h3>
            <p className="worksP">
              Add money to your wallet using the top-up button or cash in
              through our community agents nearest.
            </p>
          </div>
          <div>
            <div className="worksImage">
              <AiOutlineUserAdd
                style={{ width: 60, height: 60, color: "blue" }}
              />
            </div>
            <h3 className="worksh3">Success</h3>
            <p className="worksP">
              You can now use Sanwopay to pay for your bus fare, pay for goods
              and get qualified for loans
            </p>
          </div>
        </div>
      </div>
      <div className="vidDiv">
        <h1>Do More With SanwoPay</h1>
        <p>
          Become a community agent by helping the people in your community
          access basic financial services through our platform while you earn
          money, to become an agent contact us services@sanwopay.com
        </p>
        <div className="vidDivImage">
          <Image
            className="vidDivImageMain"
            src={require("../../images/do_more_sanwopay.png")}
          />
        </div>
        <div className="vidAppDownload">
          <div className="appContent">
            <Image
              className="appContentImage"
              src={require("../../images/istore.png")}
            />
            <div></div>
          </div>
          <div className="appContent">
            <Image
              className="appContentImage"
              src={require("../../images/google_play.png")}
            />
          </div>
        </div>
      </div>
      <div className="testimonal">
        <div className="testimonalImage">
          <Image
            className="testimonalImageMain"
            src={require("../../images/Rectangled.png")}
          />
        </div>
        <div>
          <p className="testimonalP">
            I have been using Sanwopay for the last 4 months now, anytime i need
            cash they are always availiable to dispense it. Well as long as i
            have payed back the previous ones. I love using their services.
          </p>
          <p className="testimonalP2">James Audda</p>
          <p>Customer</p>
        </div>
        <div className="testimonalSideDiv">
          <Image
            className="testimonalSideDivImage"
            src={require("../../images/sanwopay.webp")}
          />
        </div>
        <div className="testimonalSideDiv2">
          <Image
            className="testimonalImageMain"
            src={require("../../images/Rectangled.png")}
          />
        </div>
      </div>
      <div className="faq">
        <div>
          <Image
            className="faqImage"
            src={require("../../images/know_us_sanwo.jpeg")}
          />
        </div>
        <div className="faqText">
          <h2>FAQ's</h2>
          <div>
            <button className="faqButton" onClick={openQuestionOne}>
              What does Sanwo pay do
            </button>
            <p style={{ display: questionOne, paddingLeft: 20 }}>
              At Sanwopay we are building a financial service support system for
              transport operators and their surrounding small business
              ecosystem, making it easy for them to receive payment, save money
              daily and get access to loans without leaving their motor parks or
              business location.
            </p>
          </div>
          <div>
            <button className="faqButton" onClick={openQuestionTwo}>
              How to access loans
            </button>
            <p style={{ display: questionTwo, paddingLeft: 20 }}>
              Walk up to any of our offices, meet and chat with a Sanwopay
              representative, We'll run background checks and finally credit you
              bank account.
            </p>
          </div>
          <div>
            <button className="faqButton" onClick={openQuestionThree}>
              Where is Sanwopay located
            </button>
            <p style={{ display: questionThree, paddingLeft: 20 }}>
              Current in 6 bus locations in Lagos. You can get our services in any of these locations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
