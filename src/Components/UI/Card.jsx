const Card = (props) => {
  return (
    <div className="w-[87.2%] flex flex-col bg-[#FEFEFE] mt-[16px] rounded-[15px] shadow-lg">
      {props.children}
    </div>
  );
};
export default Card;
