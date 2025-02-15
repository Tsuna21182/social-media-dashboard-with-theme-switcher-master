import { useState } from "react";
import Redes from "./components/Redes";
import Header from "./Header/Header";

function App() {
  const [dark, setDark] = useState(false);

  const handleChange = () => {
    setDark(!dark);
  };

  return (
    <div className={`h-full p-5 ${dark ? "bg-white" : "bg-VeryDarkBlueBG"}`}>
      <Header dark={dark} onClick={handleChange} />
      <Redes dark={dark} />
    </div>
  );
}

export default App;
