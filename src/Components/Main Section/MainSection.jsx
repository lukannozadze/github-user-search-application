import Card from "../UI/Card";
import SectionHeader from "../Main Section/SectionHeader";
import DataIndicator from "./DataIndicator";
import AboutInfo from "./AboutInfo";
import { useEffect, useState } from "react";
const MainSection = (props) => {
  const [userArr, setUserArr] = useState([]);

  const fetchGithubUsers = async () => {
    const response = await fetch(
      `https://api.github.com/users/${props.userName}`
    );
    if (response.status === 404) {
      props.onGetUserNameValidity(false);
    } else {
      props.onGetUserNameValidity(true);
    }
    const data = await response.json();
    console.log(data);
    setUserArr(data);
  };

  useEffect(() => {
    if (props.userName !== "") {
      fetchGithubUsers();
    }
  }, [props.userName]);

  console.log(props.userName);

  return (
    <Card>
      <SectionHeader data={userArr} />
      <DataIndicator data={userArr} />
      <AboutInfo data={userArr} />
    </Card>
  );
};

export default MainSection;
