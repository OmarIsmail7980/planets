import { useState, useEffect } from "react";
import data from "../data.json";
import { UsePlanet } from "../context/PlanetContext";
import { planetsMap } from "../context/PlanetContext";

import "./navbar.css";

const Navbar = () => {
  const [screenStyle, setScreenStyle] = useState("flex-row justify-between");
  const [width, setWidth] = useState(window.innnerWidth);
  const { setDetails, setImgObj } = UsePlanet();
  console.log(planetsMap);

  const handleView = () => {
    setWidth(window.innerWidth);
    if (window.innerWidth > 550 && window.innerWidth < 950) {
      setScreenStyle("flex-col justify-center");
    } else {
      setScreenStyle("flex-row justify-between");
    }
  };

  useEffect(() => {
    handleView();
    window.addEventListener("resize", handleView);

    return () => {
      window.removeEventListener("resize", handleView);
    };
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar__logo font-antonio">The Planets</div>

        {width > 550 ? (
          <ul className="flex font-league-spartan text-[var(--secondary-color)]">
            {data.map((planet, index) => (
              <li
                key={index + planet.name}
                className="px-2 pt-2 cursor-pointer hover:text-[#fff]"
                onClick={() => {
                  setDetails(planet);
                  setImgObj(planetsMap.get(planet.name.toLowerCase()));
                }}
              >
                {planet.name}
              </li>
            ))}
          </ul>
        ) : (
          <>
            <svg
              className=" mt-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="17"
            >
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
              </g>
            </svg>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
