import { useTranslation } from "react-i18next"
import reduxLogo from "../icons/redux1.png"
const Skills=()=>{
  const {t}=useTranslation();
    return <div className=" flex items-center justify-center py-[5.25rem] dark:bg-[#252128]">
    <div className=" flex  w-[60rem] max-[768px]:w-[35rem]  justify-between items-start content-start flex-wrap">
        <p className="text-[#4832D3] dark:text-[#CBF281] font-[Inter] text-[3rem] max-[768px]:text-[2rem] font-bold">{t("skills")}</p>
        <div className=" flex flex-col items-start gap-[2.1875rem] max-[768px]:gap-[1.2rem] ">
            <div className="flex justify-center items-center gap-6 max-[768px]:gap-3">
              <img className=" rounded-md shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14)] w-[7.5rem] h-[7.5rem] max-[768px]:w-[5rem] max-[768px]:h-[5rem]
              " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"></img> <p className=" text-2xl text-[#777777] dark:text-white font-[Inter] font-thin">JAVASCRIPT</p>
            </div>
            <div className="flex justify-center items-center gap-6 max-[768px]:gap-3">
              <img className=" rounded-md shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14)] w-[7.5rem] h-[7.5rem] max-[768px]:w-[5rem] max-[768px]:h-[5rem]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRKguaNZrVn6-NK9Ir6VdZf7PoRwLStgLLgsoSMq9ZA&s"></img> <p className=" text-2xl text-[#777777] dark:text-white font-[Inter] font-thin">REACT</p>
            </div>
            <div className="flex justify-center items-center gap-6 max-[768px]:gap-3">
              <img className=" rounded-md shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14)] w-[7.5rem] h-[7.5rem] max-[768px]:w-[5rem] max-[768px]:h-[5rem]" src={reduxLogo}></img> <p className=" text-2xl text-[#777777] dark:text-white  font-[Inter] font-thin">REDUX</p>
            </div>
        </div>
        <div className=" flex flex-col items-start gap-[2.1875rem] max-[768px]:gap-[1.2rem]  ">
            <div className="flex justify-center items-center gap-6 max-[768px]:gap-3">
              <img className=" rounded-md shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14)] w-[7.5rem] h-[7.5rem] max-[768px]:w-[5rem] max-[768px]:h-[5rem]" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/node-js-symbol-ripa-doyoung.jpg"></img> <p className=" text-2xl text-[#777777] dark:text-white  font-[Inter] font-thin">NODE</p>
            </div>
            <div className="flex justify-center items-center gap-6 max-[768px]:gap-3">
              <img className=" rounded-md shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14)] w-[7.5rem] h-[7.5rem] max-[768px]:w-[5rem] max-[768px]:h-[5rem]" src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/4/16328b23fe325ca0~tplv-t2oaga2asx-zoom-crop-mark:1304:1304:1304:734.awebp?x-oss-process=image/resize,h_500,m_lfit"></img> <p className=" text-2xl text-[#777777] dark:text-white  font-[Inter] font-thin">VS CODE</p>
            </div>
            <div className="flex justify-center items-center gap-6 max-[768px]:gap-3">
              <img className=" rounded-md shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14)] w-[7.5rem] h-[7.5rem] max-[768px]:w-[5rem] max-[768px]:h-[5rem]" src="https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png"></img> <p className=" text-2xl text-[#777777] dark:text-white  font-[Inter] font-thin">FIGMA</p>
            </div>
        </div>
    </div>
    </div>
}
export default Skills;