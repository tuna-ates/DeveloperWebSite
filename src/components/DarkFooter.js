import twiter from "../icons/darktwitter.png"
import codePen from "../icons/codependark.png"
import mail from "../icons/at-signdark.png"
import insta from "../icons/instagramdark.png"
const DarkFooter = () => {
  return (
    <div className="flex items-center justify-center py-[5.25rem] bg-[#252128]">
      <div className="flex flex-col gap-[1.5rem] items-center">
        <p className="text-[#8F88FF] text-[3rem] font-bold  leading-[4.5rem]">
          Send me a message!
        </p>
        <p className="text-[#FFFFFF] font-[1.5rem] leading-9">Got a question or proposal, or just want to say hello? Go ahead.</p>
        <a className="text-[#8F88FF] text-[1.25rem] font-medium tracking-[1px] underline">almilasucode@gmail.com</a>
        <div className="flex gap-3">
            <img src={twiter}></img>
            <img  src={codePen}></img>
            <img src={mail}></img>
            <img src={insta}></img>
        </div>
      </div>
    </div>
  );
};
export default DarkFooter;