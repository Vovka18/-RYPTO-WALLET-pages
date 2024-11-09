import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PushMessage from "../components/push-message/PushMessage";
import ToggleButton from "../components/toggle-button/ButtonToggle";
import AppNav from "../components/app-nav/AppNav";
import "./Settings.css";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(0) // 0 - ua, 1 - ru
  const [currency, serCurrency] = useState(0) // 0 - uah, 1 - usdt

  useEffect(()=>{
    i18n.changeLanguage(language === 0 ? "ua" : "ru")
  },[language])

  return (
    <div className="settings">
      <AppNav block="setting" />
      <PushMessage msg={t("settings.push-msg")} />
      <div className="setting">
        <div className="language">
          <h4>{t("settings.language-app")}</h4>
          <ToggleButton btn1={t("settings.ukr")} btn2={t("settings.ru")} setParametr={setLanguage} />
        </div>
        <div className="currency">
          <h4>{t("settings.current-balance")}</h4>
          <ToggleButton btn1={t("settings.uah")} btn2={t("settings.usd")} setParametr={serCurrency} />
        </div>
      </div>
      <div className="text-setting">
        <h4>{t("settings.change-pin")}</h4>
        <h4>{t("settings.support-service")}</h4>
      </div>
    </div>
  );
};

export default Settings;
