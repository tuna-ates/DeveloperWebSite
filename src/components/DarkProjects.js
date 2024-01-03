import img1 from "../icons/Rectangle41.jpg"
import img2 from "../icons/Rectangle31.jpg"
const DarkProjects=()=>{
    return <div className="flex items-center justify-center bg-[#1A210B]">
      <div className=" flex flex-col gap-[1.6875rem]  pb-[5.25rem] ">
         <p className="text-[#CBF281] text-[3rem] mt-[5.25rem] font-bold leading-[3rem] tracking-[0.48px]">Projects</p>
         <div className="flex bg-[#2B2727] rounded-xl items-center justify-center gap-[1rem] w-[60rem]">
              <img src={img1}></img>
              <div className="flex flex-col gap-[1.5rem] px-8 items-start ">

                <p className="text-[#C1BAED] text-[2rem] font-bold leading-8">Workintech</p>
                <p className="text-[#FFFFFF] font-normal leading-5 self-stretch">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className="flex gap-1">
                    <button className="font-[14px] bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">react</button>
                    <button className="font-[14px] bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">redux</button>
                    <button className="font-[14px] bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">vercel</button>
                </div>
                <div className="flex gap-4">
                    <a className="text-[#CBF281] font-medium underline">View Site</a>
                    <a className="text-[#CBF281] font-medium underline">Github</a>
                </div>
              </div>

         </div>

         <div className="flex bg-[#2B2727] rounded-xl items-center justify-center gap-[1rem] w-[60rem]">
              <img src={img2}></img>
              <div className="flex flex-col gap-[1.5rem] px-8 items-start ">

                <p className="text-[#C1BAED] text-[2rem] font-bold leading-8">Journey</p>
                <p className="text-[#FFFFFF] font-normal leading-5 self-stretch">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className="flex gap-1">
                    <button className="font-[14px] bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">react</button>
                    <button className="font-[14px] bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">redux</button>
                    <button className="font-[14px] bg-[#8173DA] text-[#fff] rounded-[23px] pt-[8px] pb-[9px] px-[18px]">vercel</button>
                </div>
                <div className="flex gap-4">
                    <a className="text-[#CBF281] font-medium underline">View Site</a>
                    <a className="text-[#CBF281] font-medium underline">Github</a>
                </div>
              </div>

         </div>
    </div>
    </div>
   
}
export default DarkProjects;