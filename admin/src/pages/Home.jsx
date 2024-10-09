import Chart from "../Components/Chart/Chart";
import Featured from "../Components/Featured/Featured";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import Widget from "../Components/Widget/Widget";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex-grow-[6]">
        <div className="flex p-[20px] gap-[20px]">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="flex px-[20px] py-[20px]">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
