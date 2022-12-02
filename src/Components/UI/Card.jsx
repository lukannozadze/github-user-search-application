const Card = (props) => {
  return (
    <div className="w-[327px] flex flex-col bg-[#FEFEFE] mt-[16px] rounded-[15px] ">
      {props.children}
    </div>
  );
};
export default Card;