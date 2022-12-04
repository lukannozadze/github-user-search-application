import Card from "../UI/Card";
import SectionHeader from "../Main Section/SectionHeader";
import DataIndicator from "./DataIndicator";
import AboutInfo from "./AboutInfo";
import { useEffect, useState } from "react";
const MainSection = (props) => {
  const [userArr, setUserArr] = useState([]);
  const [isUserNameValid, setIsUserNameValid] = useState(true);

  const fetchGithubUsers = async () => {
    const response = await fetch(
      `https://api.github.com/users/${props.userName}`
    );
    if (response.status === 404) {
      setIsUserNameValid(false);
    }
    const data = await response.json();
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
      <SectionHeader />
      <DataIndicator />
      <AboutInfo />
    </Card>
  );
};

export default MainSection;
