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

        <div className="  flex justify-start max-[770px]:flex-col max-[770px]:gap-5 gap-5 max-[768px]:gap-2 w-[60vw] ">
          <div className=" flex flex-col gap-[1.875rem] max-[768px]:gap-[1rem] w-[33%] max-[770px]: ">
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
          <img className="w-[33%] flex-1 rounded-[12px] max-[770px]:w-[50vw] " src={data.profile.img} />

          <div className="flex justify-start flex-col  gap-3 h-[18.1675rem] w-[33.33%] max-[770px]:w-[50vw]">
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

    </div>
  );
};
export default Profile;
