import { useState } from "react";
import { Details, Navbar } from "./components";
import data from "./data.json";
import mercuryImg from "./assets/planet-mercury.svg";
import bg from "./assets/background-stars.svg";

function App() {
  console.log(bg);
  return (
    <main className="bg-[#070724] text-[#fff]">
      <Navbar />
      <div
        className="bg-cover bg-center bg-no-repeat h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Content of your app */}
        <Details details={data[0]} image={mercuryImg} />
      </div>
    </main>
  );
}

export default App;
