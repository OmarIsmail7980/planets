import { useState } from "react";
import { Navbar } from "./components";
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
      </div>
    </main>
  );
}

export default App;
