import Hero from "../components/Hero";
import MiddleSection from "../components/MiddleSection";
import MobileApp from "../components/MobileApp";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="w-[90%] m-auto">
        <MiddleSection />
      </div>
      <MobileApp />
    </>
  );
};

export default Home;
