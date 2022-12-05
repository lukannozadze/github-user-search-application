import locationIconPath from "../../assets/location.svg";
import chainIconPath from "../../assets/chain.svg";
import twitterIconPath from "../../assets/twitter.svg";
import buildingIconPath from "../../assets/building.svg";
const AboutInfo = (props) => {
  return (
    <div className="grid pl-[24px] gap-[16px] pb-[48px] sm:grid-cols-2 sm:gap-[19px] sm:pl-[40px]  md:pl-[45px] lg:pl-[60px] dark:text-white">
      <div className="flex gap-[19.25px]">
        <img src={locationIconPath} alt="location" />
        {props.data.length !== 0 && props.data.location !== null ? (
          <span className="text-[13px] leading-[20px] text-[#4B6A9B sm:text-[15px] sm:leading-[22px] ">
            {props.data.location}
          </span>
        ) : (
          <span className="text-[13px] leading-[20px] text-[#697C9A] sm:text-[15px] sm:leading-[22px]">
            Not Available
          </span>
        )}
      </div>
      <div className="flex gap-[13px]">
        <img src={chainIconPath} alt="chain" />
        {props.data.length !== 0 && props.data.blog !== "" ? (
          <span className="text-[13px] leading-[20px] text-[#4B6A9B sm:text-[15px] sm:leading-[22px] ">
            {props.data.blog}
          </span>
        ) : (
          <span className="text-[13px] leading-[20px] text-[#697C9A] sm:text-[15px] sm:leading-[22px]">
            Not Available
          </span>
        )}
      </div>

      <div className="flex gap-[13px]">
        <img src={twitterIconPath} alt="twitter" />
        {props.data.length !== 0 && props.data.twitter_username !== null ? (
          <span className="text-[13px] leading-[20px] text-[#4B6A9B sm:text-[15px] sm:leading-[22px] ">
            {props.data.twitter_username}
          </span>
        ) : (
          <span className="text-[13px] leading-[20px] text-[#697C9A] sm:text-[15px] sm:leading-[22px]">
            Not Available
          </span>
        )}
      </div>
      <div className="flex gap-[13px]">
        <img src={buildingIconPath} alt="building" />
        {props.data.length !== 0 && props.data.company !== null ? (
          <span className="text-[13px] leading-[20px] text-[#4B6A9B sm:text-[15px] sm:leading-[22px] ">
            {props.data.company}
          </span>
        ) : (
          <span className="text-[13px] leading-[20px] text-[#697C9A] sm:text-[15px] sm:leading-[22px]">
            Not Available
          </span>
        )}
      </div>
    </div>
  );
};
export default AboutInfo;
