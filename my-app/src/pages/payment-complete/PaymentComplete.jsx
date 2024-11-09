import React from 'react'
import { useTranslation } from 'react-i18next'
import {ReactComponent as AcceptIco} from '../../img/accept-ico.svg'
import PushMessage from '../components/push-message/PushMessage'
import Button from '../components/button/Button'
import AppNav from '../components/app-nav/AppNav'
import './Payment-complete.css'


const PaymentComplete = () => {
    const { t } = useTranslation();

    return (
    <div className='paymentComplete'>
        
        <PushMessage msg={t("payment-complete.push-msg")}/>
        <div className="completed">
            <AcceptIco/>
            <div className="text-complete">
                <h4>{t("payment-complete.text")}</h4>
                <Button text={t("payment-complete.btn")}/>
            </div>
        </div>
        <AppNav block={"home"}/>
    </div>
  )
}

export default PaymentComplete