import React, { useState } from 'react'
import {ReactComponent as Backspace} from "../../img/backspace.svg"
import { useTranslation } from 'react-i18next';
import Button from '../components/button/Button';
import MainLogo from '../components/logo/mainLogo'
import "./enter-pin.css"

const EnterPin = () => {
    const { t } = useTranslation();
    const [ pin, setPin ] = useState("");
    
    const name = "Димон"

    const addNum = (num) => {
        setPin(pin+num)
    }
    const minusNum = () => {
        setPin(pin.slice(0, -1))
    }

  return (
    <div className='EnterPin'>
        <div className="wrapper">
            <div className="text">
                <MainLogo/>
                <h4>{t("pin.welcome1")} {name}!<br/>{t("pin.welcome2")}</h4>
            </div>
            <div className="pinCode">
                <div className="dots">
                    {console.log(pin?.length >= 1 ? "dot dot-activ" : "dot")}
                    <div className={pin?.length >= 1 ? "dot dot-activ" : "dot"}></div>
                    <div className={pin?.length >= 2 ? "dot dot-activ" : "dot"}></div>
                    <div className={pin?.length >= 3 ? "dot dot-activ" : "dot"}></div>
                    <div className={pin?.length >= 4 ? "dot dot-activ" : "dot"}></div>
                </div>
                <div className="keyboard">
                    <div className="num" onClick={()=>addNum(1)}>1</div>
                    <div className="num" onClick={()=>addNum(2)}>2</div>
                    <div className="num" onClick={()=>addNum(3)}>3</div>
                    <div className="num" onClick={()=>addNum(4)}>4</div>
                    <div className="num" onClick={()=>addNum(5)}>5</div>
                    <div className="num" onClick={()=>addNum(6)}>6</div>
                    <div className="num" onClick={()=>addNum(7)}>7</div>
                    <div className="num" onClick={()=>addNum(8)}>8</div>
                    <div className="num" onClick={()=>addNum(9)}>9</div>

                    <div className="num" onClick={()=>addNum(0)}>0</div>
                    <div className="backspace" onClick={() => minusNum()}><Backspace/></div>
                </div>
            </div>
            <div className="buttons">
                <Button text={t("pin.btn")}/>
                <p>{t("pin.forgot-pin")}</p>
            </div>
        </div>
    </div>
  )
}

export default EnterPin