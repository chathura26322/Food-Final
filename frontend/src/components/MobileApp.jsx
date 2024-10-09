import { assets } from "../assets/assets";

const MobileApp = () => {
  return (
    <div
      className="mx-auto my-24 text-center  mb-[30px] mt-[15px] font-medium text-base md:text-xl lg:text-3xl"
      id="app-download"
    >
      <p>
        For Better Experience Download <br />
        Our Mobile App
      </p>
      <div className="flex justify-center gap-2 md:gap-4 lg:gap-8 mt-10">
        <img
          className="w-30 max-w-xs transition duration-500 cursor-pointer hover:scale-105"
          src={assets.play_store}
          alt="Play Store"
        />
        <img
          className="w-30 max-w-xs transition duration-500 cursor-pointer hover:scale-105"
          src={assets.app_store}
          alt="App Store"
        />
      </div>
    </div>
  );
};

export default MobileApp;
