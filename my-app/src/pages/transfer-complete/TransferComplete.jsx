import React from 'react'
import { useTranslation } from 'react-i18next'
import {ReactComponent as AcceptIco} from '../../img/accept-ico.svg'
import PushMessage from '../components/push-message/PushMessage'
import Button from '../components/button/Button'
import AppNav from '../components/app-nav/AppNav'
import './transfer-complete.css'


const TransferComplete = () => {
    const { t } = useTranslation();

  return (
    <div className='transferComplete'>
        <PushMessage msg={t("transfer-complete.push-msg")}/>
        <div className="completed">
            <AcceptIco/>
            <div className="text-complete">
                <h4>{t("transfer-complete.text")}</h4>
                <Button text={t("transfer-complete.btn")}/>
            </div>
        </div>
        <AppNav block={"setting"}/>
    </div>
  )
}

export default TransferComplete