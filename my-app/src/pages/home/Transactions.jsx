import React from 'react'
import usdt from "../../img/usdt.svg";
import uah from "../../img/uah.svg";

const Transactions = ({listTransfers}) => {
  return (
    // ~~~
    // transfer = {
    // currency: uah
    // exchangeRate: $1.00 
    // exchangeRate2: +0.01%
    // action: +2,635.48
    // date: 01-11-24 18:24
    // }
    <ul>
        {listTransfers.map((transfer)=><li>
            <div className="info-transfer">
                <img src={transfer.currency === "usdt" ? usdt : uah} alt="" />
                <div className="text-info">
                    <h2>{transfer.currency}</h2>
                    <p>{transfer.exchangeRate}  <span>{transfer.exchangeRate2} </span></p>
                </div>
            </div>
            <div className="data">
                <p className={transfer.action[0] === "+" ? "count-money plus" : "count-money minus"}>{transfer.action} USDT</p>
                <p className="time">{transfer.date}</p>
            </div>
        </li>)}
    </ul>
  )
}

export default Transactions