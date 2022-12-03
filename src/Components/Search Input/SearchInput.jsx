import searchIconPath from "../../assets/search-icon.svg";
const SearchInput = () => {
  return (
    <form className="flex flex-col items-center pt-[36px] w-screen ">
      <label className="relative w-[87.2%] sm:w-[89.5%] lg:w-[923px]">
        <img
          src={searchIconPath}
          alt="magnifying glass"
          className="absolute top-[20px] bg-[#FEFEFE] pl-[16px] sm:pl-[32px] sm:top-[23px] dark:bg-[#1E2A47]"
        />
        <input
          type="text"
          name="search-input"
          placeholder="Search GitHub username…"
          className="w-[100%] h-[60px] bg-[#FEFEFE] rounded-[15px] text-[13px] leading-[25px] pl-[45px] outline-none placeholder-[#4B6A9B] shadow-xl 
          sm:h-[69px] sm:pl-[80px] sm:text-[18px] dark:bg-[#1E2A47] dark:placeholder-white dark:text-white"
        />
        <button
          type="submit"
          value="submit"
          className="absolute right-[7px] top-[6.5px] bg-[#0079FF] py-[12.5px] px-[16px] rounded-[10px] text-white text-[14px] font-bold leading-[21px] sm:top-[12.5px] sm:right-[10px] sm:text-[16px]"
        >
          Search
        </button>
      </label>
    </form>
  );
};

export default SearchInput;
