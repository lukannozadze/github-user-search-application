import testUserImgPath from "../../assets/test-user-image.png";
const SectionHeader = () => {
  return (
    <div className="pt-[32px] flex flex-col px-[24px] sm:pl-[40px] md:pl-[45px] lg:pl-[60px] ">
      <div className="flex gap-[19px] md:gap-[37px]">
        <img
          src={testUserImgPath}
          alt="test user"
          className="sm:w-[117px] sm:h-[117px]"
        />
        <div className="flex flex-col justify-center md:grid">
          <div>
            <h2 className="text-[#2B3442] font-bold text-[16px] leading-[24px] sm:text-[26px] sm:leading-[39px] dark:text-white">
              The Octocat
            </h2>
            <span className="text-[#0079FF] text-[13px] leading-[20px] sm:text-[16px] sm:leading-[24px]">
              @octocat
            </span>
          </div>
          <span className="text-[#697C9A] text-[13px] leading-[20px] pt-[5px] sm:text-[15px] sm:leading-[22px] dark:text-white">
            Joined 25 Jan 2011
          </span>
        </div>
      </div>
      <p className="pt-[33px] text-[#4B6A9B] text-[13px] leading-[25px] sm:text-[16px] dark:text-white md:pl-[155px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
    </div>
  );
};

export default SectionHeader;
