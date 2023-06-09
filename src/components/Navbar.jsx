import data from "../data.json";
import { UsePlanet } from "../context/PlanetContext";
import { planetsMap } from "../context/PlanetContext";
import { useState } from "react";
import "./navbar.css";

const Navbar = ({ setToggle }) => {
  const { setDetails, setImgObj } = UsePlanet();
  const [selectedPlanet, setSelectedPlanet] = useState("Mercury");

  const handleItemClick = (planet) => {
    setDetails(planet);
    setImgObj(planetsMap.get(planet.name.toLowerCase()));
    setSelectedPlanet(planet.name);
    console.log(planet);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar relative">
        <h1 className="navbar__logo font-antonio">The Planets</h1>

        <ul className="flex font-league-spartan text-[var(--secondary-color)]">
          {data.map((planet, index) => (
            <li
              key={index + planet.name}
              style={selectedPlanet === planet.name ? { color: "#fff" } : {}}
              className="px-2 pt-2 cursor-pointer hover:text-[#fff]"
              onClick={() => handleItemClick(planet)}
            >
              {planet.name}

              {selectedPlanet === planet.name && (
                <div
                  style={{ background: planet.color }}
                  className="w-[45px] h-[3px] absolute top-0 showBar"
                ></div>
              )}
            </li>
          ))}
        </ul>

        <svg
          className=" mt-2"
          onClick={() => setToggle((prevVal) => !prevVal)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="17"
        >
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </nav>
    </header>
  );
};

export default Navbar;
