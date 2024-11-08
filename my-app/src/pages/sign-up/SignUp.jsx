import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/button/Button";
import ErrorMessage from "../components/error-message/ErrorMessage";
import "./SignUp.css";

const SignUp = () => {
  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    name: "",
    date: "",
    email: "",
    phone: "",
    pin: "",
    pinRepeat: "",
  });
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    console.log(userData);
  }, [messageError]);

  const chekEnter = () => {
    const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const validDate = /^\d{4}-\d{2}-\d{2}$/;

    if (userData.name.length < 5 || userData.name.length > 40) {
        setMessageError("Incorrect name");
    }else if(validDate.test(userData.date) === false){
        setMessageError("Incorrect date");
    }else if (!validMail.test(userData.email)) {
        setMessageError("Incorrect email");
    }else if(!phoneRegex.test(userData.phone)){
        setMessageError("Incorrect phone");
    }else if(userData.pin.length !== 4 || Number(userData.pin) === isNaN){
        setMessageError("Incorrect pin");
    }else if(userData.pin !== userData.pinRepeat){
        setMessageError("Incorrect repeat pin");
    }

  };

  return (
    <div className="SignUp">
      <ErrorMessage textError={messageError}/>
      <main>
        <h4>{t("reg-new-user")}</h4>

        <div className="inputs">
            <input id="text" type="text" name="name" placeholder={t("input-name")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/>
            <input id="date" type="date" name="date" placeholder={t("input-date")} min="1900-01- " max="2010-01-01"onChange={(e) =>setUserData({ ...userData, [e.target.name]: e.target.value })}/>
            <input id="email" type="email" name="email" placeholder={t("input-mail")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/>
            <input id="tel" type="tel" name="phone" placeholder={t("input-phone")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })} />
            <input id="password" type="password" name="pin" maxlength="4" placeholder={t("input-pin")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/>
            <input id="password-repeat" type="password" name="pinRepeat" maxlength="4" placeholder={t("input-pin-repeat")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/>
        </div>
        <Button onClick={()=> chekEnter()} text={t("reg-button")} />
      </main>
    </div>
  );
};

export default SignUp;
