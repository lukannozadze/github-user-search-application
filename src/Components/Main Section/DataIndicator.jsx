const DataIndicator = () => {
  return (
    <div className="w-[279px] flex justify-center  py-[19px] rounded-[10px] gap-[25px] my-[24px] ml-[24px]  bg-[#F6F8FF]">
      <section className="flex flex-col items-center gap-[8px]">
        <span className="text-[11px] leading-[19px] text-[#4B6A9B]">Repos</span>
        <span className="text-[16px] leading-[24px] font-bold">8</span>
      </section>
      <section className="flex flex-col items-center gap-[8px]">
        <span className="text-[11px] leading-[19px] text-[#4B6A9B]">
          Followers
        </span>
        <span className="text-[16px] leading-[24px] font-bold">3938</span>
      </section>
      <section className="flex flex-col items-center gap-[8px] ">
        <span className="text-[11px] leading-[19px] text-[#4B6A9B]">
          Following
        </span>
        <span className="text-[16px] leading-[24px] font-bold">9</span>
      </section>
    </div>
  );
};

export default DataIndicator;
