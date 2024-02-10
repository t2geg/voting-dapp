import React, { useContext } from "react";
import Image from "next/image";

import Style from "../card/card.module.css";
import Button from "../Button/Button"
import image from "../../candidate.png";
import voterCardStyle from "./voterCard.module.css";
import { VotingContext } from "../../context/Voter";


const voterCard = ({ voterArray }) => {

  const { remove_Voter } = useContext(VotingContext);

  return (
    <div className={Style.card}>
      {voterArray.map((el, i) => (
        <div className={Style.card_box}>
          <div className={Style.image}>
            <img src={el[4]} alt="Profile photo" />
          </div>

          <div className={Style.card_info}>
            <h2>
              {el[1]} #{el[0].toNumber()}
            </h2>
            <p>Address: {el[3].slice(0, 30)}..</p>
            <p>
              Over the years, I have acquired relevant skills and experience.
            </p>
            <p className={voterCardStyle.vote_Status}>
              {el[6] == true ? "You Already Voted" : "Not Voted"}
            </p>



            <div className={Style.Button}>
              <Button
                btnName="Remove"
                handleClick={() => remove_Voter(el[3])}
              />
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default voterCard;
