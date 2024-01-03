import twiter from "../icons/twitter1.png"
import codePen from "../icons/codepen1.png"
import mail from "../icons/at-sign1.png"
import insta from "../icons/instagram1.png"
import twiter2 from "../icons/darktwitter.png"
import codePen2 from "../icons/codependark.png"
import mail2 from "../icons/at-signdark.png"
import insta2 from "../icons/instagramdark.png"
import useLocalStorage from "../hooks/useLocalStorage"
import { useTranslation } from "react-i18next"
const Footer = () => {
  const {t}=useTranslation();
  const {val}=useLocalStorage()
  return (
    <div className="flex items-center justify-center py-[5.25rem] dark:bg-[#252128]">
      <div className="flex flex-col gap-[1.5rem] items-center">
        <p className="text-[#4731D3] dark:text-[#8F88FF] text-[3rem] font-bold  leading-[4.5rem]">
        {t("message")}
        </p>
        <p className="text-[#120B39] dark:text-[#FFFFFF] font-[1.5rem] leading-9">{t("footerDetail")}</p>
        <a className="text-[#4731D3] dark:text-[#8F88FF] text-[1.25rem] font-medium tracking-[1px] underline">almilasucode@gmail.com</a>
        <div className="flex gap-3">
            <img src={val==="light"?twiter:twiter2}/>
            <img src={val==="light"?codePen:codePen2}/>
            <img src={val==="light"?mail:mail2}/>
            <img src={val==="light"?insta:insta2}/>
        </div>
      </div>
    </div>
  );
};
export default Footer;
