import github from "../icons/githubdark.png"
import linkedin from "../icons/LinkedIndark.png"
import headerImg from "../icons/hero-right12.jpg"
import 'font-awesome/css/font-awesome.min.css';
const DarkHeader=()=>{

    return <div className=" relative">
        <div className=" h-[671px] bg-[#171043]  flex justify-end " >
            <p className=" mt-[2.1875rem] text-[#BAB2E7] font-[Inter] text-[15px] font-bold tracking-[1.5px] mr-[1.125rem]">TÜRKÇE<span className="text-[#777777] font-[Inter] text-[15px] font-bold tracking-[1.5px]  ">’YE GEÇ</span></p>
            <div className=" w-[32rem] bg-[#1A210B]">
            sarı
            </div>
       </div>
       <div className=" w-[60rem] absolute left-[14.9375rem] top-[2.3125rem] font-[Inter] text-[#CBF281] font-bold text-2xl leading-[4.5rem]">almila</div>

       <div className=" h-[23.4375rem] flex absolute left-[14.9375rem] top-[9.25rem]  w-[59.6875rem] justify-between items-center content-center flex-wrap gap-[5.1875rem]">
         <div className="flex flex-col justify-end items-start gap-9 flex-1 ">
            <p className=" text-[#CBF281] font-[Inter] font-bold leading-[3.7125rem] text-[3.375rem]   ">I am a Frontend Developer...</p>
            <p className="text-[#FFFFFF] font-[Inter] text-[1.5rem] ">...who likes to craft solid and scalable frontend products with great user experiences.</p>
            <div className=" flex items-center gap-3">
            <button className=' font-[Inter] text-lg text-white flex items-center justify-center bg-[#252128] pt-3 pr-5 pb-3 pl-3 gap-[10px] rounded-md border-[1px] border-solid border-white'><img src={github}></img>Github</button>
            <button className=' font-[Inter] text-lg text-white flex items-center justify-center bg-[#252128] pt-3 pr-5 pb-3 pl-3 gap-[10px] rounded-md border-[1px] border-solid border-white'><img src={linkedin}></img>Linkedin</button>
            </div>
         </div>
          <img className="w-[21.875rem] h-[100%] rounded-md " src={headerImg}></img>
        
       </div>
    </div>
}
export default DarkHeader;