import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContexts";
const Profile = () => {
  const { t } = useTranslation();
  const { data, setData } = useContext(DataContext);
  return (
    <div className=" flex justify-center items-center  bg-[#4731D3] dark:bg-[#171043] ">
      <div className="flex justify-start flex-col py-[3.25rem]">
        <p className="  text-[#CBF281]  font-[Inter] text-[3rem] max-[768px]:text-[2rem] font-bold leading-[3rem] max-[768px]:leading-[1.5rem] tracking-[0.48px] pb-4">
          {t("profile")}
        </p>

        <div className="  flex justify-start max-[700px]:flex-col max-[700px]:gap-5 gap-5 max-[768px]:gap-2 w-[70vw]">
          <div className=" flex flex-col gap-[1.875rem] max-[768px]:gap-[1rem] w-[33%] max-[700px]:w-[100vw] ">
            <div className="flex flex-col gap-5 max-[768px]:gap-2  ">
              <p className="text-white text-[1.875rem] max-[768px]:text-[1.3rem]">
                {t("basicInfor")}
              </p>
              <div className="flex gap-5 flex-col">
                <div className="  flex  gap-3 text-white">
                  <p className="text-[#CBF281] font-semibold w-[6.3125rem] ">
                    {t("dateOfBirth")}
                  </p>
                  <p className="w-[11.8125rem] max-[768px]:w-[6rem]">
                    {data.birthDate}
                  </p>
                </div>
                <div className="flex   gap-3 text-white">
                  <p className="text-[#CBF281] font-semibold w-[6.3125rem] ">
                    {t("cityOfResidence")}{" "}
                  </p>
                  <p className="w-[11.8125rem] max-[768px]:w-[6rem]">
                    {data.city}
                  </p>
                </div>

                <div className="flex  gap-4 text-white">
                  <p className="text-[#CBF281] font-semibold w-[6.3125rem] ">
                    {t("educationalBackground")}
                  </p>
                  <p className="w-[11.8125rem] max-[768px]:w-[6rem]">
                    {data.scholl}
                  </p>
                </div>

                <div className="flex   gap-3 text-white">
                  <p className="text-[#CBF281] font-semibold w-[6.3125rem] ">
                    {t("preferredRole")}
                  </p>
                  <p className="w-[11.8125rem] max-[768px]:w-[6rem]">
                    {data.rol}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className="w-[33%] flex-1 rounded-[12px] max-[700px]:w-[50vw] " src={data.profile.img} />

          <div className="flex justify-start flex-col  gap-3 h-[18.1675rem] w-[33.33%] max-[700px]:w-[80vw]">
            <p className="text-white text-[1.875rem]  ">
              {t("about")}
            </p>
            <p className="text-[#fff] font-[Inter]   font-normal leading-7  ">
              {data.profile.detail1}
            </p>
            <p className="  text-[#fff] font-[Inter]   font-normal leading-2 ">
              {data.profile.detail2}
            </p>
          </div>
        </div>
      </div>

      {/* <p className=" mb-5 max-[768px]:mb-4 pl-[15rem] max-[768px]:pl-[2rem] pt-[5.25rem] max-[768px]:pt-[3rem] text-[#CBF281]  font-[Inter] text-[3rem] max-[768px]:text-[2rem] font-bold leading-[3rem] max-[768px]:leading-[1.5rem] tracking-[0.48px]">{t("profile")}</p>

        <div className="pl-[15rem] max-[768px]:pl-[2rem]  flex justify-start w-[70rem] max-[768px]:w-[35rem] gap-5 max-[768px]:gap-2 pb-[6.2rem] max-[768px]:pb-[4rem]">
        <div className=" flex flex-col gap-[1.875rem] max-[768px]:gap-[1rem] flex-1 max-[768px]:w-[11,6666rem] ">
         <div className="flex flex-col gap-5 max-[768px]:gap-2  ">
            <p className="text-white text-[1.875rem] max-[768px]:text-[1.3rem]">{t("basicInfor")}</p>
            <div className="flex gap-5 flex-col">

            <div className="  flex  gap-3 text-white">
            <p className="text-[#CBF281] font-semibold w-[6.3125rem] ">{t("dateOfBirth")}</p>
            <p className="w-[11.8125rem] max-[768px]:w-[6rem]">{data.birthDate}</p>
            </div>
            <div className="flex   gap-3 text-white">
            <p className="text-[#CBF281] font-semibold w-[6.3125rem] ">{t("cityOfResidence")} </p>
            <p className="w-[11.8125rem] max-[768px]:w-[6rem]">{data.city}</p>
            </div>

            <div className="flex  gap-4 text-white">
            <p className="text-[#CBF281] font-semibold w-[6.3125rem] ">{t("educationalBackground")}</p>
            <p className="w-[11.8125rem] max-[768px]:w-[6rem]">{data.scholl}</p>
            </div>
            
            <div className="flex   gap-3 text-white">
            <p className="text-[#CBF281] font-semibold w-[6.3125rem] ">{t("preferredRole")}</p>
            <p className="w-[11.8125rem] max-[768px]:w-[6rem]">{data.rol}</p>
            </div>
            

         </div>
         </div>
        </div>

        <img className="flex-1 rounded-[12px] pt-1.5 h-[18.1678125rem] max-[768px]:w-[11,6666rem] max-[768px]:h-[10rem]" src={img}/>

        <div className="flex justify-start flex-col flex-1 gap-3 h-[18.1675rem] max-[768px]:w-[20rem]  ">
        <p className="text-white text-[1.875rem] max-[768px]:text-[1.1rem]  flex-1">{t("about")}</p>
        <p className="text-[#fff] font-[Inter] flex-1  font-normal leading-7 max-[768px]:text-[0.9rem] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
        <p className="  text-[#fff] font-[Inter] flex-1 max-[768px]:text-[0.9rem]  font-normal leading-2 max-[768px]:leading-1">Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!</p>
        </div>

     
        </div> */}
    </div>
  );
};
export default Profile;
