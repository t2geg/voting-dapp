import React, { useContext, useEffect } from "react";
import Image from "next/image";

import Style from "../card/card.module.css";
import image from "../../candidate.png";
import Button from "../Button/Button"
import { VotingContext } from "../../context/Voter";

const card = ({ candidateArray, giveVote }) => {
  const { currentAccount, remove_Candidate, checkIfWalletIsConnected } = useContext(VotingContext);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  const validate = (e, currentAccount) => {
    console.log(currentAccount, typeof (currentAccount));
    if (currentAccount.toLowerCase() === "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266") {
      remove_Candidate(e);
    } else {
      window.alert("You are not allowed to remove voter");
    }
  }

  return (
    <div className={Style.card}>
      {candidateArray.map((el, i) => (
        <div className={Style.card_box}>
          <div className={Style.image}>
            <img src={el[3]} alt="Profile photo" />
          </div>

          <div className={Style.card_info}>
            <h2>
              {el[1]} #{el[2].toNumber()}
            </h2>
            <p>{el[0]}</p>
            <p>Address: {el[6].slice(0, 30)}..</p>
            <p className={Style.total}>Total Vote</p>
          </div>

          <div className={Style.card_vote}>
            <p>{el[4].toNumber()}</p>
          </div>

          <div className={Style.card_button}>
            <button
              onClick={() => giveVote({ id: el[2].toNumber(), address: el[6] })}
            >
              Give Vote
            </button>
          </div>

          <div className={Style.card_button}>
            <Button
              btnName="Remove"
              handleClick={() => validate(el[6], currentAccount)}
            />
          </div>

        </div>
      ))}
    </div>
  );
};

export default card;
