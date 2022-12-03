import React from "react";
import MainHeader from "./Components/Header/MainHeader";
import MainSection from "./Components/Main Section/MainSection";
import SearchInput from "./Components/Search Input/SearchInput";
function App() {
  return (
    <div className="dark:bg-[#141D2F] w-screen h-screen transition duration-500">
      <MainHeader />
      <div className="flex flex-col items-center">
        <SearchInput />
        <MainSection />
      </div>
    </div>
  );
}
export default App;
