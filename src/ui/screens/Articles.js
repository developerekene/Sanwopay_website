import React from "react";
import { Image, Button } from "react-bootstrap";


const Articles = () => {
  return (
    <div>
      <div style={{ marginTop: 117 }}>
        <p style={{ textAlign: "center", fontSize: 48, fontFamily: "Poppins", fontWeight: "500" }}>Article Title Comes Here</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src={require("../../images/Rectanglej.png")} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: 232,
            marginRight: 232,
          }}
        >
          <p style={{fontSize: 20, fontWeight: "400", fontFamily: "Poppins"}}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
        <div
          style={{
            justifyContent: "center",
            marginLeft: 232,
            marginRight: 232,
            fontFamily: "Poppins"
          }}
        >
          <h3>Subtitles</h3>
          <p style={{fontSize: 20, fontWeight: "400", }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 232,
            marginRight: 232,
            alignItems: "center",
            fontFamily: "Poppins"
          }}
        >
          <h3>POST DATE</h3>
          <h3>Share</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: 232,
            marginRight: 232,
            alignItems: "center",
            fontFamily: "Poppins"
          }}
        >
          <h3>April 08, 2022</h3>
          <div style={{ display: "flex" }}>
            <Image
              style={{ marginRight: 10 }}
              height={24}
              width={24}
              src={require("../../images/Rectanglek.png")}
            />
            <Image
              style={{ marginRight: 10 }}
              height={24}
              width={24}
              src={require("../../images/Rectanglek.png")}
            />
            <Image
              style={{ marginRight: 10 }}
              height={24}
              width={24}
              src={require("../../images/Rectanglek.png")}
            />
            <Image
              height={24}
              width={24}
              src={require("../../images/Rectanglek.png")}
            />
          </div>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            marginLeft: 232,
            marginRight: 232,
            alignItems: "center",
            fontFamily: "Poppins"
          }}
        >
          <h2>Leave a Reply</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <p>Comment</p>
          <form>
            <label>
              <input style={{width: 976, height: 154, marginBottom: 40}} type="text" name="name" />
            </label>
          </form>
          <Button
            style={{
              padding: 10,
              width: 183,
              height: 64,
              borderRadius: 8,
              backgroundColor: "#000000",
              color: "#ffffff",
              marginBottom: 115,
              fontFamily: "Poppins"
            }}
            variant="dark"
          >
            Post Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
