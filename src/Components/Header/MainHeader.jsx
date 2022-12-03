import moonIconPath from "../../assets/moon.svg";
const MainHeader = () => {
  return (
    <div className="flex justify-between pt-[31px] items-center font-bold pl-[24px] pr-[24px] ">
      <h1 className="text-[#222731] text-[26px] leading-[38.5px]">devfinder</h1>
      <div className="flex gap-[16px]">
        <span className="text-[13px] leading-[19.5px] text-[#4B6A9B] tracking-[2.5px]">
          DARK
        </span>
        <img src={moonIconPath} alt="moon" />
      </div>
    </div>
  );
};
export default MainHeader;
