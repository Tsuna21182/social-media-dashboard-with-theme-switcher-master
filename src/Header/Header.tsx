interface HeaderProps {
  dark: boolean;
  onClick: () => void;
}

function Header({ dark, onClick }: HeaderProps) {
  return (
    <header className="flex flex-col mt-5 gap-5 xl:flex-row xl:justify-between">
      <div>
        <h2
          className={`font-bold text-2xl ${
            dark ? "text-VeryDarkBlue" : "text-VeryPaleBlue"
          }`}
        >
          Social Media Dashboard
        </h2>
        <p className="text-DarkGrayishBlue font-bold text-lg">
          Total Followers: 23,004
        </p>
      </div>
      <div className="h-[2px] w-full bg-ToggleLight xl:hidden"></div>
      <div className="flex justify-between xl:gap-5">
        <p className="text-DarkGrayishBlue font-bold text-xl">Dark Mode</p>
        <button
          className={`w-16 h-8 rounded-full flex items-center p-1 transition-colors cursor-pointer duration-200 ${
            dark
              ? "bg-ToggleLight hover:bg-gradient-to-r from-[#378fe6] to-[#3eda82]"
              : "bg-gradient-to-r from-[#378fe6] to-[#3eda82]"
          }`}
          onClick={onClick}
        >
          <div
            className={`  w-6 h-6 rounded-full shadow-md transform transition-transform ${
              dark
                ? "translate-x-[2rem] bg-white"
                : "translate-x-[0rem]  dark:bg-DarkDesaturatedBlueCB"
            }`}
          ></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
