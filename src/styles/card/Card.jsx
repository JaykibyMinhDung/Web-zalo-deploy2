import React from "react";
import DefaultImg from "../../images/default.jpg";
import "./card.css";

const Card = (props) => {
  const dataParent = props;
  let domParser = new DOMParser();
  const htmlFromServer = domParser.parseFromString(
    dataParent.desc,
    "text/html"
  );
  // console.log(htmlFromServer);
  return (
    <div className="card__frame">
      <div className="card__align">
        <div className="card__circle--image">
          <img src={dataParent.image ? dataParent.image : DefaultImg} alt="" />
        </div>
        <div className="card__main">
          <h2>{dataParent.title}</h2>
          <p>
            The prince has sued a British media company, Mirror Group
            Newspapers, claiming that reporters hacked his phone more than a
            decade ago
          </p>
          {/* <div>{}</div> */}
          <div className="card__footer">
            <p style={{ fontWeight: "550", fontSize: "larger" }}>
              {dataParent.category}
            </p>
            <p style={{ fontWeight: "750" }}>June 27, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
