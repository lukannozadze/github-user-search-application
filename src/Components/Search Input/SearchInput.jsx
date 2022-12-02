import searchIconPath from "../../assets/search-icon.svg";
const SearchInput = () => {
  return (
    <form className="flex flex-col items-center pt-[36px] ">
      <label className="relative">
        <img
          src={searchIconPath}
          alt="magnifying glass"
          className="absolute top-[20px] bg-[#FEFEFE] pl-[16px]"
        />
        <input
          type="text"
          name="search-input"
          placeholder="Search GitHub username…"
          className="w-[327px] h-[60px] bg-[#FEFEFE] rounded-[15px] text-[13px] leading-[25px] pl-[45px] outline-none placeholder-[#4B6A9B]"
        />
        <button
          type="submit"
          value="submit"
          className="absolute right-[7px] top-[6.5px] bg-[#0079FF] py-[12.5px] px-[16px] rounded-[10px] text-white text-[14px] font-bold leading-[21px]"
        >
          Search
        </button>
      </label>
    </form>
  );
};

export default SearchInput;
