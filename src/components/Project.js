import { useContext } from "react";
import { DataContext } from "../contexts/DataContexts";
import { useTranslation } from "react-i18next";

const Project=(props)=>{
    const {t}=useTranslation();
    const {data}=useContext(DataContext);
    const {index}=props;

  
    
return(








     <div className="flex bg-[#FFF] dark:bg-[#2B2727] rounded-xl items-center max-[1240px]:flex-col justify-center gap-[1rem] max-[1240px]:gap-10  ">
               <img className="w-[40%] max-[1240px]:w-[100%] " src={data.projetcs[index].img}/>
               <div className="flex flex-col gap-[1.5rem] px-8 items-start w-[60%] max-[1240px]:w-[100%] ">

                 <p className="text-[#4338CA] dark:text-[#C1BAED]  text-[2rem] font-bold leading-8">{data.projetcs[index].title}</p>
                 <p className="text-[#383838] dark:text-[#FFFFFF] font-normal leading-5 self-stretch">{data.projetcs[index].detail}</p>
                <div className="flex gap-1">
                     <button className="font-[14px] bg-[#4731D3] dark:bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">react</button>
                     <button className="font-[14px] bg-[#4731D3] dark:bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">redux</button>
                     <button className="font-[14px] bg-[#4731D3] dark:bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">vercel</button>
                 </div>
                 <div className="flex gap-4">
                    <a className="text-[#120B39] dark:text-[#CBF281] font-medium underline">View Site</a>
                     <a className="text-[#120B39] dark:text-[#CBF281] font-medium underline">Github</a>
                 </div>
               </div>

          </div>
)
}
export default Project;