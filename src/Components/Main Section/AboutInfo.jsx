import locationIconPath from "../../assets/location.svg";
import chainIconPath from "../../assets/chain.svg";
import twitterIconPath from "../../assets/twitter.svg";
import buildingIconPath from "../../assets/building.svg";
const AboutInfo = () => {
  return (
    <div className="flex flex-col pl-[24px] gap-[16px] pb-[48px]">
      <div className="flex gap-[19.25px]">
        <img src={locationIconPath} alt="location" />
        <span className="text-[13px] leading-[20px] text-[#4B6A9B">
          San Francisco
        </span>
      </div>
      <div className="flex gap-[13px]">
        <img src={chainIconPath} alt="chain" />
        <span className="text-[13px] leading-[20px] text-[#4B6A9B">
          https://github.blog
        </span>
      </div>
      <div className="flex gap-[13px]">
        <img src={twitterIconPath} alt="twitter" />
        <span className="text-[13px] leading-[20px] text-[#697C9A]">
          Not Available
        </span>
      </div>
      <div className="flex gap-[13px]">
        <img src={buildingIconPath} alt="building" />
        <span className="text-[13px] leading-[20px] text-[#4B6A9B">
          @github
        </span>
      </div>
    </div>
  );
};
export default AboutInfo;
