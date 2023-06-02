import { useState, useEffect } from "react";
import data from "../data.json";
import menu from "../assets/icon-hamburger.svg";

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
    <header className=" border-b border-[#979797] px-5 pb-5 bg-transparent">
      <nav className={`flex ${screenStyle}`}>
        <div className="pt-2 mt-1 text-center">The Planets</div>

        {width > 550 ? (
          <div className="flex justify-center">
            {data.map((planet, index) => (
              <h3
                key={index + planet.name}
                className="px-2 text-center pt-2 hover:border border-t-black cursor-pointer"
              >
                {planet.name}
              </h3>
            ))}
          </div>
        ) : (
          <>
            <svg
              className="w-[15px] h-[15px] object-contain mt-3"
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
