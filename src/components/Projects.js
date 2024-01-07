
import { useTranslation } from "react-i18next"
import { useContext } from "react"
import { DataContext } from "../contexts/DataContexts"
import Project from "./Project"
const Projects=()=>{
  const {data}=useContext(DataContext)
  const {t}=useTranslation();
  
  
    return <div className="flex items-center justify-center bg-[#CBF281] dark:bg-[#1A210B]">
      <div className=" flex flex-col justify-center items-start gap-[1.6875rem]  py-[5.25rem] w-[60vw] max-[770px]:w-[80vw] p-5  ">
         <p className="text-[#4731D3] dark:text-[#CBF281] text-[3rem] max-[768px]:text-[2rem]  font-bold leading-[3rem] max-[768px]:leading-[1.5rem] w-[53vw]  ">{t("projetcs")}</p>
         <div className="flex items-center justify-center flex-col gap-3  ">  {data.projetcs.map((prj,index)=>{
          return <Project index={index}/>
         })}</div>
       
        
    </div>
    </div>
   
}
export default Projects;