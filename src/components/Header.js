import github from "../icons/github.png";
import linkedin from "../icons/LinkedIn.png";
import github2 from "../icons/githubdark.png";
import linkedin2 from "../icons/LinkedIndark.png";
import "font-awesome/css/font-awesome.min.css";
import useLocalStorage from "../hooks/useLocalStorage";
import useDocumentSetter from "../hooks/useDocumentSetter";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContexts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Header.css";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { data, setData } = useContext(DataContext);
  const [darkData, setDarkData] = useLocalStorage("theme");
  const [lang, setLang] = useLocalStorage("lang");
  const [documentSetter] = useDocumentSetter();
  const element = (
    <FontAwesomeIcon
      className=" ml-[3px] w-[15px] h-[15px] text-[#FFE86E] "
      icon={faMoon}
    />
  );

  const changeLang = () => {
    const newLang = lang === "tr" ? "en" : "tr";
    setLang(newLang);
    i18n.changeLanguage(newLang);
    toast.info("Dil değiştirildi!!", { theme: "colored", autoClose: 3000 });
  };

  const darkMode = () => {
    const newData = darkData === "light" ? "dark" : "light";
    setDarkData(newData);
    documentSetter();
    toast.warn("Tema değiştirildi!!", { theme: "colored" });
  };

  return (
    <div
      className={
        darkData === "dark" ? "darkHeader flex" : "lightHeader flex w "
      }
    >
      <div className=" flex flex-col items-center justify-start gap-10 ">
        <div className=" flex  justify-between items-center w-[100%]  ">
          <div className="flex items-center justify-around w-[70vw] ">
            <div className=" pt-[2.3125rem] font-inter text-[#CBF281] font-bold  text-2xl leading-[4.5rem]">
              {data.name}
            </div>
            <p
              className=" pr-5 hover:cursor-pointer  text-[#CAF181] dark:text-[#BAB2E7] font-[Inter] text-[15px] font-bold tracking-[1.5px] h-4 "
              onClick={changeLang}
            >
              {t("changeLang")}
              <span className="text-[#D9D9D9] dark:text-[#777777] font-[Inter] text-[15px] font-bold tracking-[1.5px]   ">
                {t("span")}
              </span>
            </p>
          </div>
          <div className="w-[30%] flex justify-center ">
            {darkData === "light" ? (
              <>
                {" "}
                <div
                  onClick={darkMode}
                  className=" hover:cursor-pointer flex justify-end items-center bg-[#8F88FF] w-[3.4375rem] h-6 rounded-[6.25rem]"
                >
                  <svg
                    className=" mr-[3px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <ellipse
                      cx="7.5"
                      cy="8"
                      rx="7.5"
                      ry="8"
                      transform="matrix(-1 0 0 1 15 0)"
                      fill="#FFE86E"
                    />
                  </svg>
                </div>{" "}
                <p className="text-[#8F88FF] font-bold pr-4">Dark Mode</p>
              </>
            ) : (
              <>
                <div
                  onClick={darkMode}
                  className=" hover:cursor-pointer flex justify-start items-center bg-[#3A3A3A] w-[3.4375rem] h-6 rounded-[6.25rem]"
                >
                  {element}
                </div>{" "}
                <p className="text-white font-bold">Light Mode</p>
              </>
            )}
          </div>
        </div>
        <div className="  pb-14 max-[770px]:flex-col  max-[770px]:flex-col-reverse max-[770px]:gap-5  flex justify-end items-center content-center flex-wrap ">
          <div className="  flex flex-col justify-end items-start max-[770px]:items-center gap-9 w-[57%]">
            <p className=" w-[90%] text-[#CBF281] font-[Inter] font-bold leading-[3.7125rem] text-[3.375rem] max-[640px]:text-[2.3rem] max-[770px]:text-white ">
              {t("headerTitle")}
            </p>
            <p className="text-[#FFFFFF] font-[Inter] text-[1.5rem] ">
              {t("headerDetail")}
            </p>
            <div className=" flex items-center gap-3">
              <button className=" font-[Inter] text-lg text-[#3730A3] dark:text-white   flex items-center justify-center bg-white dark:bg-[#252128] pt-3 pr-5 pb-3 pl-3 gap-[10px] rounded-md border-[1px] border-solid border-[#3730A3] dark:border-white max-[770px]:w-[50%]">
                <img src={darkData === "light" ? github : github2}></img>Github
              </button>
              <button className=" font-[Inter] text-lg text-[#3730A3] dark:text-white flex items-center justify-center bg-white dark:bg-[#252128] pt-3 pr-5 pb-3 pl-3 gap-[10px] rounded-md border-[1px] border-solid border-[#3730A3] dark:border-white max-[770px]-w-[30%]">
                <img src={darkData === "light" ? linkedin : linkedin2}></img>
                Linkedin
              </button>
            </div>
          </div>
          <img
            className=" rounded-md  w-[35%] max-[770px]:w-[70%]"
            src={data.headerImg}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Header;
