import data from "../data.json";
import { UsePlanet } from "../context/PlanetContext";
import { planetsMap } from "../context/PlanetContext";
import "./MobileNavbar.css";

const MobileNavbar = ({ setToggle }) => {
  const { setDetails, setImgObj } = UsePlanet();
  return (
    <section className="mobile-nav">
      {data.map((planet, index) => {
        return (
          <div
            key={planet.name + index}
            onClick={() => {
              setDetails(planet);
              setImgObj(planetsMap.get(planet.name.toLowerCase()));
              setToggle((prevVal) => !prevVal);
            }}
          >
            <div className="mobile-nav__planet" onClick={() => {}}>
              <div className="mobile-nav__planet-info">
                <div
                  style={{ backgroundColor: `${planet.color}` }}
                  className={`rounded-full w-[20px] h-[20px]`}
                ></div>
                <h1 className="font-league-spartan">{planet.name}</h1>
              </div>
              <svg className="mt-5 w-6 h-8" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
              </svg>
            </div>
            <div className="w-full h-[1px] bg-[#fff] opacity-40 mb-4 mt-4"></div>
          </div>
        );
      })}
    </section>
  );
};

export default MobileNavbar;
