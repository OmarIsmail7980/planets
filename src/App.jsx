import { Details, Navbar } from "./components";
import data from "./data.json";
import mercuryImg from "./assets/planet-mercury.svg";
import stractureImg from "./assets/planet-mercury-internal.svg";
import geoImg from "./assets/geology-mercury.png";
import bg from "./assets/background-stars.svg";

function App() {
  console.log(bg);
  return (
    <main className="bg-[#070724] text-[#fff]">
      <Navbar />
      <div
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Details details={data[0]} images={{image:mercuryImg,stractureImg,geoImg}} />
      </div>
    </main>
  );
}

export default App;
