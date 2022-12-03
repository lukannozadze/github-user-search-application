const DataIndicator = () => {
  return (
    <div className="w-[85.3%] flex justify-center m-auto  py-[19px] rounded-[10px] gap-[25px] my-[24px]   bg-[#F6F8FF] sm:gap-[100px]">
      <section className="flex flex-col items-center gap-[8px] sm:items-start">
        <span className="text-[11px] leading-[19px] text-[#4B6A9B] sm:text-[13px] sm:leading-[19px]">
          Repos
        </span>
        <span className="text-[16px] leading-[24px] font-bold sm:text-[22px] sm:leading-[32px]">
          8
        </span>
      </section>
      <section className="flex flex-col items-center gap-[8px] sm:items-start">
        <span className="text-[11px] leading-[19px] text-[#4B6A9B] sm:text-[13px] sm:leading-[19px]">
          Followers
        </span>
        <span className="text-[16px] leading-[24px] font-bold sm:text-[22px] sm:leading-[32px] ">
          3938
        </span>
      </section>
      <section className="flex flex-col items-center gap-[8px] sm:items-start ">
        <span className="text-[11px] leading-[19px] text-[#4B6A9B] sm:text-[13px] sm:leading-[19px]">
          Following
        </span>
        <span className="text-[16px] leading-[24px] font-bold sm:text-[22px] sm:leading-[32px]">
          9
        </span>
      </section>
    </div>
  );
};

export default DataIndicator;
