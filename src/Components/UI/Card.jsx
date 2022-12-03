const Card = (props) => {
  return (
    <div className="w-[87.2%] flex flex-col bg-[#FEFEFE] mt-[16px] rounded-[15px] shadow-lg sm:w-[89.5%] lg:w-[923px] dark:bg-[#1E2A47]">
      {props.children}
    </div>
  );
};
export default Card;
