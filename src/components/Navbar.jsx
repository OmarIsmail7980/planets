import { useState, useEffect } from "react";
import data from "../data.json";

const Navbar = () => {
  const [screenStyle, setScreenStyle] = useState("flex-row justify-between");
  const [width, setWidth] = useState(window.innnerWidth);
  console.log(width);

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
    <header className=" border-b border-[var(--secondary-color)] px-5 pb-5 bg-transparent">
      <nav className={`flex ${screenStyle} items-center`}>
        <div className="pt-2 pb-1 text-center font-antonio text-[18px]">
          The Planets
        </div>

        {width > 550 ? (
          <ul className="flex font-league-spartan text-[var(--secondary-color)]">
            {data.map((planet, index) => (
              <li
                key={index + planet.name}
                className="px-2 pt-2 cursor-pointer hover:text-[#fff]"
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
