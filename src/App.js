import React from "react";
import MainHeader from "./Components/Header/MainHeader";
import MainSection from "./Components/Main Section/MainSection";
import SearchInput from "./Components/Search Input/SearchInput";
function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <div className="flex flex-col items-center">
        <SearchInput />
        <MainSection />
      </div>
    </React.Fragment>
  );
}
export default App;
