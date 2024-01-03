import img from "../icons/image2.jpg"
const DarkProfile=()=>{
    return <div className=" bg-[#171043] ">
        <p className=" mb-5 pl-[15rem] pt-[5.25rem] text-[#CBF281] font-[Inter] text-[3rem] font-bold leading-[3rem] tracking-[0.48px]">Profile</p>

        <div className="pl-[15rem]  flex justify-start w-[70rem] gap-5 pb-[6.2rem]">
        <div className=" flex flex-col gap-[1.875rem] flex-1 ">
         <div className="flex flex-col gap-5 ">
            <p className="text-white text-[1.875rem]">Basic Information</p>
            <div className="flex gap-5 flex-col">

            <div className="  flex  gap-3 text-white">
            <p className="text-[#CBF281] font-semibold w-[6.3125rem]">Doğum tarihi</p>
            <p className="w-[11.8125rem]">24.03.1996</p>
            </div>
            <div className="flex   gap-3 text-white">
            <p className="text-[#CBF281] font-semibold w-[6.3125rem]">İkamet Şehri </p>
            <p className="w-[11.8125rem]">Ankara</p>
            </div>

            <div className="flex  gap-4 text-white">
            <p className="text-[#CBF281] font-semibold w-[6.3125rem]">Eğitim Durumu</p>
            <p className="w-[11.8125rem]">Hacettepe Ünv. Biyoloji Lisans, 2016</p>
            </div>
            
            <div className="flex   gap-3 text-white">
            <p className="text-[#CBF281] font-semibold w-[6.3125rem]">Tercih Ettiği Rol</p>
            <p className="w-[11.8125rem]">Frontend, UI</p>
            </div>
            

         </div>
         </div>
        </div>

        <img className="flex-1 rounded-[12px] pt-1.5 h-[18.1678125rem]" src={img}/>

        <div className="flex justify-start flex-col flex-1 gap-3 h-[18.1675rem] ">
        <p className="text-white text-[1.875rem] flex-1">About Me</p>
        <p className="text-[#fff] font-[Inter] flex-1  font-normal leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
        <p className="  text-[#fff] font-[Inter] flex-1  font-normal leading-2">Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
        </div>

     
        </div>
    </div>
}
export default DarkProfile;