import React, { useState } from "react";
import MainHeader from "./Components/Header/MainHeader";
import MainSection from "./Components/Main Section/MainSection";
import SearchInput from "./Components/Search Input/SearchInput";
function App() {
  const [userName, setUsername] = useState("");
  const [userNameIsValid, setUserNameIsValid] = useState(true);
  const getUserName = (userName) => {
    setUsername(userName.name);
  };
  const getUserNameValidity = (status) => {
    setUserNameIsValid(status);
  };

  return (
    <div className="dark:bg-[#141D2F] w-screen h-screen transition duration-500">
      <MainHeader />
      <div className="flex flex-col items-center">
        <SearchInput onGetUserName={getUserName} isValid={userNameIsValid} />
        <MainSection
          userName={userName}
          onGetUserNameValidity={getUserNameValidity}
        />
      </div>
    </div>
  );
}
export default App;
