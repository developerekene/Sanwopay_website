import React from "react";
import { Image, Button } from "react-bootstrap";


const Articles = () => {
  return (
    <div>
      <div className="aritcleDiv">
        <p className="aritcleDivP">Articles</p>
        <div className="aritcleDivInner">
          <Image className="aritcleDivInnerImage" src={require("../../images/new-article-ideas.webp")} />
        </div>
        <div className="aritcleDivInnerTwo">
          <p className="aritcleDivInnerTwoP">
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
        <div className="aritcleDivInnerThree">
          <h3>Subtitles</h3>
          <p className="aritcleDivInnerThreeP">
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
        <div className="aritcleDivInnerFour">
          <h3>POST DATE</h3>
          <h3>Share</h3>
        </div>
        <div className="aritcleDivInnerFour">
          <h3>April 08, 2022</h3>
          <div className="aritcleDivInnerFive">
            <Image className="aritcleDivInnerFiveImage"
              height={24}
              width={24}
              src={require("../../images/Rectanglek.png")}
            />
            <Image className="aritcleDivInnerFiveImage"
              height={24}
              width={24}
              src={require("../../images/Rectanglek.png")}
            />
            <Image className="aritcleDivInnerFiveImage"
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
        <div className="divDown">
          <h2>Leave a Reply</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
          <p>Comment</p>
          <form>
            <label>
              <input className="label" type="text" name="name" />
            </label>
          </form>
          <Button className="articleBtn" variant="dark">
            Post Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
