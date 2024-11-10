import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import ToggleButtons from "../components/toggle-button/ButtonToggle"
import Button from "../components/button/Button"
import PushMessage from "../components/push-message/PushMessage"
import './Payment.css'


const Payment = () => {
    
    const { t } = useTranslation();
    const [sumPayment, setSumPayment] = useState("");
    const [paymentMethod, setPaymentMethod] = useState(0) // 0 - apple, 1 - google 

  return (
    <div className='payment'>
        <PushMessage msg={t("payment.push-message")}/>
        <div className="method-data">
            <div className="method-payment">
                <h4>{t("payment.method-payment")}</h4>
                <ToggleButtons btn1={"Apple Pay"} btn2={"Google Pay"} setParametr={setPaymentMethod}/>
            </div>
            <div className="input-data">
              <input type="text" placeholder={t("payment.input-placeholder")} onChange={(e)=>setSumPayment(e.target.value)} />
              <Button text={t("payment.btn")}/>
            </div>
        </div>

    </div>
  )
}

export default Payment