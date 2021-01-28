import React, { useState } from "react";

import CallIcon from "@material-ui/icons/Call";
import imgUrl from "../../../assets/Sent.png";
import { IonItem, IonInput } from "@ionic/react";

import Button from "../../UI/Button/Button";

import "./Step3a.css";

const Step3a = (props) => {
  const [mobileNumber, setMobileNumber] = useState();

  const onChangeHandler = (e) => {
    setMobileNumber(e.target.value);
  };

  return (
    <div className="Step3">
      <div className="imgSent">
        <img src={imgUrl} alt="sent" />
      </div>
      <div className="titleSent">
        <h3>Launch Your Journey</h3>
      </div>
      <div className="contentSent">
        <h6>Give us the contact method you want to</h6>
        <h6>be identified with</h6>
      </div>
      <IonItem className="sentField">
        <CallIcon />
        <IonInput
          type="number"
          placeholder="Enter Your Mobile Number"
          value={mobileNumber}
          name="mobile number"
          onIonChange={(e) => onChangeHandler(e)}
        />
      </IonItem>
      <Button
        disabled={mobileNumber ? false : true}
        handleNext={props.onRedirect}
      >
        Continue
      </Button>
    </div>
  );
};

export default Step3a;
