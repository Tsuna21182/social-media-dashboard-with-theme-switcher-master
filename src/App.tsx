import { useState, useEffect } from "react";
import Redes from "./components/Redes";
import Header from "./Header/Header";
import Overview from "./components/Overview";

function App() {
  const [dark, setDark] = useState(false);

  const handleChange = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-VeryDarkBlueBG");
    } else {
      document.body.classList.add("bg-VeryDarkBlueBG");
      document.body.classList.remove("bg-white");
    }
  }, [dark]);

  return (
    <main className="p-5">
      <Header dark={dark} onClick={handleChange} />
      <Redes dark={dark} />
      <h2
        className={`text-2xl  font-black mt-15 ${
          dark ? "text-DarkGrayishBlue" : "text-VeryPaleBlue"
        }`}
      >
        Overview - Today
      </h2>
      <Overview dark={dark} />
    </main>
  );
}

export default App;
