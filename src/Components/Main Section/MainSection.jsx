import Card from "../UI/Card";
import SectionHeader from "../Main Section/SectionHeader";
import DataIndicator from "./DataIndicator";
import AboutInfo from "./AboutInfo";
const MainSection = () => {
  return (
    <Card>
      <SectionHeader />
      <DataIndicator />
      <AboutInfo />
    </Card>
  );
};

export default MainSection;
