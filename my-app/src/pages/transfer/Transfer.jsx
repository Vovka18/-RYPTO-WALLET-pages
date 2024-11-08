import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import PushMessage from '../components/push-message/PushMessage'
import ErrorMessage from '../components/error-message/ErrorMessage';
import Button from '../components/button/Button';
import './Transfer.css'

const Transfer = () => {
    const { t } = useTranslation();

    const [dataTransfer, setDataTransfer] = useState({id: null, countMoney: 0})
    const [errorMessage, setErrorMessage] = useState("")

    const chekData = () => {
        // ...chek id
        setErrorMessage(t("transfer-error-message"))
    }

    useEffect(()=>{
        console.log(dataTransfer);
        
    }, [dataTransfer])

    return (
        <div className='transfer'>
            <div className="messages">
                <PushMessage msg={t("transfer-push-message")}/>
                <ErrorMessage textError={errorMessage} />
            </div>
            <div className="transfer-input">
                <input type="text" placeholder={t("transfer-inputId-placeholder")} onChange={(e)=> setDataTransfer({...dataTransfer, id: e.target.value})}/>
                <input type="number" placeholder={t("transfer-inputMoney-placeholder")} onChange={(e)=> setDataTransfer({...dataTransfer, countMoney: e.target.value})}/>
                <Button onClick={()=> chekData()} text={t("transfer-btn")}/>
            </div>
        </div>
  )
}

export default Transfer