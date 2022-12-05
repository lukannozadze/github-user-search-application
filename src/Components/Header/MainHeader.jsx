import useDarkMode from "../../hook/useDarkMode";
import MoonIcon from "../UI/MoonIcon";
import SunIcon from "../UI/SunIcon";

const MainHeader = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="flex justify-between pt-[31px] items-center font-bold pl-[24px] pr-[24px] ">
      <h1 className="text-[#222731] text-[26px] leading-[38.5px] dark:text-white">
        devfinder
      </h1>
      <div
        onClick={() => setTheme(colorTheme)}
        className="mode-container flex gap-[16px] cursor-pointer"
      >
        {colorTheme === "light" ? (
          <span className="mode-light-text text-[13px] leading-[19.5px] text-white tracking-[2.5px]">
            LIGHT
          </span>
        ) : (
          <span className="mode-dark-text text-[13px] leading-[19.5px] text-[#4B6A9B] tracking-[2.5px] ">
            DARK
          </span>
        )}
        {colorTheme === "light" ? (
          <SunIcon color="white" />
        ) : (
          <MoonIcon color="#4B6A9B" />
        )}
      </div>
    </div>
  );
};
export default MainHeader;
