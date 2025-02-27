import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/button/Button";
import ErrorMessage from "../components/error-message/ErrorMessage";

import "./SignUp.css";
import axios from "axios";

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

  const chekEnter = async () => {
    const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    const validDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

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
    }else{
      axios.post("https://api.example.com/register", {
        "birth_date": userData.date,
        "email": userData.email,
        "full_name": userData.name,
        "phone": userData.phone,
        "pin": userData.pin,
        "userId": window.Telegram.WebApp.initDataUnsafe?.user?.id
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error sending data:", error);
      });
    }

  };

  const changeInputDate = (e) => {
    setUserData({...userData, date: e.target.value})
  }

  return (
    <div className="SignUp">
      <ErrorMessage textError={messageError}/>
      <main>
        <h4>{t("sign-up.reg-new-user")}</h4>

        <div className="inputs">
            <input id="text" type="text" name="name" placeholder={t("sign-up.input-name")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/>
            {/* <input id="date" type="date" name="date" placeholder={t("sign-up.input-date")} min="1900-01-01" max="2010-01-01"onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/> */}
            
            <div className="input-date">
              <input id="date-text" type="text" placeholder={t("sign-up.input-date")} onChange={changeInputDate} value={userData.date}/>
              <input type="date" onChange={changeInputDate} />
            </div>
            
            <input id="email" type="email" name="email" placeholder={t("sign-up.input-mail")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/>
            <input id="tel" type="tel" name="phone" placeholder={t("sign-up.input-phone")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })} />
            <input id="password" type="password" name="pin" maxLength="4" placeholder={t("sign-up.input-pin")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/>
            <input id="password-repeat" type="password" name="pinRepeat" maxLength="4" placeholder={t("sign-up.input-pin-repeat")} onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}/>
        </div>
        <Button onClick={()=> chekEnter()} text={t("sign-up.reg-button")} />
      </main>
    </div>
  );
};

export default SignUp;
