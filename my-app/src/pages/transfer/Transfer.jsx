import React, { useEffect, useState } from 'react'
import PushMessage from '../components/push-message/PushMessage'
import ErrorMessage from '../components/error-message/ErrorMessage'
import Button from '../components/button/Button'
import AppNav from '../components/app-nav/AppNav'
import './Transfer.css'
import { useTranslation } from 'react-i18next'

const Transfer = () => {
    const { t } = useTranslation();
    const [errorMsg, setErrorMsg] = useState("")

    const [transferData, setTransferData] = useState({id: "", sum: ""})
    
    const sendMain = () => {
      
    }

    return (
    <div className='transfer'>
        <PushMessage msg={t("change-pin.push-msg")}/>
        <ErrorMessage textError={errorMsg}/>
        <div className="transfer-data">
            <div className="inputs">
                <input type="text" placeholder={t("transfer.inputId-placeholder")} onChange={(e)=>setTransferData({...transferData, id: e.target.value})}/>
                <input type="text" placeholder={t("transfer.inputMoney-placeholder")} onChange={(e)=>setTransferData({...transferData, sum: e.target.value})}/>
            </div>
            <Button text={t("transfer.btn")} onClick={()=>sendMain()}/>
        </div>
        <AppNav block={"setting"}/>
    </div>
  )
}

export default Transfer