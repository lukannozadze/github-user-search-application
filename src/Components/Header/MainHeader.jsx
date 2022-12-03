import useDarkMode from "../../hook/useDarkMode";
import moonIconPath from "../../assets/moon.svg";
import sunIconPath from "../../assets/sun.svg";

const MainHeader = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="flex justify-between pt-[31px] items-center font-bold pl-[24px] pr-[24px] ">
      <h1 className="text-[#222731] text-[26px] leading-[38.5px] dark:text-white">
        devfinder
      </h1>
      <div onClick={() => setTheme(colorTheme)} className="flex gap-[16px]">
        {colorTheme === "light" ? (
          <span className="text-[13px] leading-[19.5px] text-white tracking-[2.5px]">
            LIGHT
          </span>
        ) : (
          <span className="text-[13px] leading-[19.5px] text-[#4B6A9B] tracking-[2.5px]">
            DARK
          </span>
        )}
        <img
          src={colorTheme === "light" ? sunIconPath : moonIconPath}
          alt="moon"
        />
      </div>
    </div>
  );
};
export default MainHeader;
