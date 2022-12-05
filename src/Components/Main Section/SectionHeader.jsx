import testUserImgPath from "../../assets/test-user-image.png";
const SectionHeader = (props) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="pt-[32px] flex flex-col px-[24px] sm:pl-[40px] md:pl-[45px] lg:pl-[60px] ">
      <div className="flex gap-[19px] md:gap-[37px] ">
        <img
          src={
            props.data.length !== 0 ? props.data.avatar_url : testUserImgPath
          }
          alt="test user"
          className="w-[60px] h-[60px] md:w-[117px] md:h-[117px] mt-[5px] md:mt-[8px] rounded-full"
        />
        <div className="flex flex-col justify-center md:grid">
          <div>
            <h2 className="text-[#2B3442] font-bold text-[16px] leading-[24px] sm:text-[26px] sm:leading-[39px] dark:text-white">
              {props.data.length !== 0 && props.data.name !== null
                ? props.data.name
                : "No Name"}
            </h2>
            <span className="text-[#0079FF] text-[13px] leading-[20px] sm:text-[16px] sm:leading-[24px]">
              {props.data.length !== 0 ? `@${props.data.login}` : "@octocat"}
            </span>
          </div>
          {props.data.length !== 0 ? (
            <span className="text-[#697C9A] text-[13px] leading-[20px] pt-[5px] sm:text-[15px] sm:leading-[22px] dark:text-white">
              Joined {new Date(props.data.created_at).getDay()}{" "}
              {monthNames[new Date(props.data.created_at).getMonth()]}{" "}
              {new Date(props.data.created_at).getFullYear()}
            </span>
          ) : (
            <span className="text-[#697C9A] text-[13px] leading-[20px] pt-[5px] sm:text-[15px] sm:leading-[22px] dark:text-white">
              Joined 25 Jan 2021
            </span>
          )}
        </div>
      </div>
      {props.data.length !== 0 && props.data.bio !== null ? (
        <p className="pt-[33px] text-[#4B6A9B] text-[13px] leading-[25px] sm:text-[16px] dark:text-white md:pl-[155px]">
          {props.data.bio}
        </p>
      ) : (
        <p className=" text-[#697C9A] text-[13px] leading-[25px] sm:text-[16px] dark:text-[#697C9A] md:pl-[155px]">
          This profile has no bio
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
