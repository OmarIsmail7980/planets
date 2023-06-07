import { useState } from "react";
import { Details, MobileNavbar, Navbar } from "./components";
import bg from "./assets/background-stars.svg";
function App() {
  console.log(bg);
  const [navToggle, setNavToggle] = useState(false);
  return (
    <main className="bg-[#070724] text-[#fff]">
      <Navbar setToggle={setNavToggle} />

      <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {navToggle ? <MobileNavbar setToggle={setNavToggle} /> : <Details />}
      </div>
    </main>
  );
}

export default App;
