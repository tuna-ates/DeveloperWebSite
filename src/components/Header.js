
import github from "../icons/github.png"
import linkedin from "../icons/LinkedIn.png"
import headerImg from "../icons/hero-right12.jpg"
import github2 from "../icons/githubdark.png"
import linkedin2 from "../icons/LinkedIndark.png"
import 'font-awesome/css/font-awesome.min.css';
import useLocalStorage from "../hooks/useLocalStorage";
import useDocumentSetter from "../hooks/useDocumentSetter";
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { DataContext } from "../contexts/DataContexts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faMoon } from '@fortawesome/free-solid-svg-icons'

const Header=()=>{
    const { t,i18n } = useTranslation();
    const {data}=useContext(DataContext);
    const [darkData,setDarkData]=useLocalStorage("theme")
    const [lang,setLang]=useLocalStorage("lang")
    const [documentSetter]=useDocumentSetter()
    const element = <FontAwesomeIcon className=" ml-[3px] w-[15px] h-[15px] text-[#FFE86E] " icon={faMoon} />

   const changeLang=()=>{
     const newLang=lang==="tr"?"en":"tr";
     setLang(newLang);
     i18n.changeLanguage(newLang)
     
   }

     const darkMode=()=>{
      const newData= darkData==="light"?"dark":"light"
      setDarkData(newData)
      documentSetter()
     }
    
    return <div className="">
        <div className="  relative h-[671px]  bg-[#4731D3]  dark:bg-[#171043]  flex justify-end " >
              <p className=" hover:cursor-pointer pt-[2.1875rem] max-[768px]:pt-[1.1875rem] pb-[2.1875rem] pr-[1.125rem]  text-[#CAF181] dark:text-[#BAB2E7] font-[Inter] text-[15px] max-[768px]:text-[12px] font-bold tracking-[1.5px] h-4 " onClick={changeLang}>{t("changeLang")}<span  className="text-[#D9D9D9] dark:text-[#777777] font-[Inter] text-[15px] max-[768px]:text-[15px] font-bold tracking-[1.5px]   ">{t("span")}</span></p>  
            
            
            <div className=" pt-[2.1875rem] max-[768px]:pt-[1.1875rem] pl-[1.125rem] flex gap-2 pt w-[32rem] max-[768px]:w-[16rem] bg-[#CBF281] max-[768px]:w-20px dark:bg-[#1A210B]">

                {darkData==="light"?<> <div onClick={darkMode} className=" hover:cursor-pointer flex justify-end items-center bg-[#8F88FF] w-[3.4375rem] h-6 rounded-[6.25rem]">
                <svg className=" mr-[3px]"  xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                 <ellipse cx="7.5" cy="8" rx="7.5" ry="8" transform="matrix(-1 0 0 1 15 0)" fill="#FFE86E"/>
                  </svg>
                </div> <p className="text-[#8F88FF] font-bold">Dark Mode</p></>:<><div onClick={darkMode} className=" hover:cursor-pointer flex justify-start items-center bg-[#3A3A3A] w-[3.4375rem] h-6 rounded-[6.25rem]">
                 {element}
                </div> <p className="text-white font-bold">Light Mode</p></>}
                
               

                

            </div>
       </div>

       <div className="  absolute left-[14.9375rem] top-[2.3125rem] font-[Inter] text-[#CBF281] font-bold  text-2xl leading-[4.5rem] max-[768px]:left-[2.9375rem]  ">{data.name}</div>

       <div className=" h-[23.4375rem] flex absolute left-[14.9375rem] max-[768px]:left-[2.9375rem] top-[9.25rem]  w-[59.6875rem] max-[768px]:w-[30.6875rem] justify-between items-center content-center flex-wrap gap-[5.1875rem] max-[768px]:gap-[2.5rem]">
         <div className="flex flex-col justify-end items-start gap-9 max-[768px]:gap-4 flex-1 ">
            <p className=" text-[#CBF281] font-[Inter] font-bold leading-[3.7125rem] text-[3.375rem] max-[768px]:text-[2rem]   ">{t("headerTitle")}</p>
            <p className="text-[#FFFFFF] font-[Inter] text-[1.5rem] ">{t("headerDetail")}</p>
            <div className=" flex items-center gap-3">
            <button className=' font-[Inter] text-lg text-[#3730A3] dark:text-white   flex items-center justify-center bg-white dark:bg-[#252128] pt-3 pr-5 pb-3 pl-3 gap-[10px] rounded-md border-[1px] border-solid border-[#3730A3] dark:border-white'><img src={darkData==="light"?github:github2}></img>Github</button>
            <button className=' font-[Inter] text-lg text-[#3730A3] dark:text-white flex items-center justify-center bg-white dark:bg-[#252128] pt-3 pr-5 pb-3 pl-3 gap-[10px] rounded-md border-[1px] border-solid border-[#3730A3] dark:border-white'><img src={darkData==="light"?linkedin:linkedin2}></img>Linkedin</button>
            </div>
         </div>
          <img className="w-[21.875rem] h-[100%] rounded-md max-[768px]:w-[14rem] max-[768px]:h-[15rem] " src={headerImg}></img>
        
       </div>
    </div>
}
export default Header;