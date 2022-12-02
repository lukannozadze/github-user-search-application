import testUserImgPath from "../../assets/test-user-image.png";
const SectionHeader = () => {
  return (
    <div className="pt-[32px] flex flex-col px-[24px] ">
      <div className="flex gap-[19px]">
        <img src={testUserImgPath} alt="test user" />
        <div className="flex flex-col">
          <h2 className="text-[#2B3442] font-bold text-[16px] leading-[24px]">
            The Octocat
          </h2>
          <span className="text-[#0079FF] text-[13px] leading-[20px]">
            @octocat
          </span>
          <span className="text-[#697C9A] text-[13px] leading-[20px] pt-[5px]">
            Joined 25 Jan 2011
          </span>
        </div>
      </div>
      <p className="pt-[33px] text-[#4B6A9B] text-[13px] leading-[25px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
    </div>
  );
};

export default SectionHeader;
