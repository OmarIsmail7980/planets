import { useState, useEffect } from "react";
import { UsePlanet } from "../context/PlanetContext";
import "./Details.css";

const Details = () => {
  const { details, imagObj } = UsePlanet();
  const { image, stractureImg, geoImg } = imagObj;

  const [text, setText] = useState(details.overview);
  const [img, setImg] = useState(image);
  const [isGeo, setIsGeo] = useState(false);
  const [active, setActive] = useState("overview");

  useEffect(() => {
    setText(details.overview);
    setImg(image);
    setIsGeo(false);
    setActive("overview");
  }, [details, imagObj]);

  return (
    <section className="details">
      <div className="details-wrapper">
        <div className="details-wrapper__planet font-league-spartan">
          <div
            onClick={() => {
              setText(details.overview);
              setImg(image);
              setIsGeo(false);
              setActive("overview");
            }}
          >
            <h3
              style={
                active === "overview"
                  ? { color: "#fff" }
                  : { color: "var(--secondary-color)", opacity: 0.5 }
              }
            >
              Overview
            </h3>
            {active === "overview" && (
              <div
                style={{ background: details.color }}
                className="w-[75px] h-[2px] absolute bottom-0"
              ></div>
            )}
          </div>

          <div
            onClick={() => {
              setText(details.structure);
              setImg(stractureImg);
              setIsGeo(false);
              setActive("stracture");
            }}
          >
            <h3
              style={
                active === "stracture"
                  ? { color: "#fff" }
                  : { color: "var(--secondary-color)", opacity: 0.5 }
              }
            >
              Structure
            </h3>
            {active === "stracture" && (
              <div
                style={{ background: details.color }}
                className="w-[75px] h-[2px] absolute bottom-0"
              ></div>
            )}
          </div>

          <div
            onClick={() => {
              setText(details.geology);
              setImg(image);
              setIsGeo(true);
              setActive("surface");
            }}
          >
            <h3
              style={
                active === "surface"
                  ? { color: "#fff" }
                  : { color: "var(--secondary-color)", opacity: 0.5 }
              }
            >
              Surface
            </h3>
            {active === "surface" && (
              <div
                style={{ background: details.color }}
                className="w-[75px] h-[2px] absolute bottom-0"
              ></div>
            )}
          </div>
        </div>

        <div className="details-wrapper__img">
          <img className="details-wrapper__img-main" src={img} alt="planet" />
          {isGeo && (
            <img
              className="details-wrapper__img-geo"
              src={geoImg}
              alt="geography"
            />
          )}
        </div>

        <div className="details-wrapper__content">
          <h1 className="font-antonio details-wrapper__content-title">
            {details.name}
          </h1>

          <div className="details-wrapper__info font-league-spartan">
            <div className="details-wrapper__content-text">
              <p className="text-[18px]">{text.content}</p>
              <p className="details-wrapper__content-text-source">
                Source:
                <a
                  className="details-wrapper__content-text-source-link"
                  href={text.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  Wikipedia
                  <svg
                    className="w-4 h-4 mt-2 fill-current opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path
                      fill="#FFF"
                      d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                      opacity=".5"
                    />
                  </svg>
                </a>
              </p>
            </div>

            <div className="details-wrapper__content-buttons">
              <button
                style={{
                  backgroundColor:
                    active === "overview" ? `${details.color}` : "",
                  color: active === "overview" ? "#fff" : ``,
                }}
                onClick={() => {
                  setText(details.overview);
                  setImg(image);
                  setIsGeo(false);

                  setActive("overview");
                }}
              >
                <p className="pl-5">
                  <span className="text bg-transparent text-[var(--secondary-color)]">
                    01
                  </span>{" "}
                  <span className="hover:text-[#fff]">Overview</span>
                </p>
              </button>

              <button
                style={{
                  backgroundColor:
                    active === "stracture" ? `${details.color}` : "",
                  color: active === "stracture" ? "#fff" : ``,
                }}
                onClick={() => {
                  setText(details.structure);
                  setImg(stractureImg);
                  setIsGeo(false);

                  setActive("stracture");
                }}
              >
                <p className="pl-5">
                  <span className="text bg-transparent text-[var(--secondary-color)]">
                    02
                  </span>{" "}
                  <span className="hover:text-[#fff]"> Internal Structure</span>
                </p>
              </button>

              <button
                style={{
                  backgroundColor:
                    active === "geology" ? `${details.color}` : "",
                  color: active === "geology" ? "#fff" : ``,
                }}
                onClick={() => {
                  setText(details.geology);
                  setImg(image);
                  setIsGeo(true);

                  setActive("geology");
                }}
              >
                <p className="pl-5">
                  <span className="text bg-transparent text-[var(--secondary-color)]">
                    03
                  </span>{" "}
                  <span className="hover:text-[#fff]"> Surface Geology</span>
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="details-wrapper__information">
        <div className="details-wrapper__information-wrapper">
          <p className="font-league-spartan">Rotation Time</p>
          <h1 className="font-antonio">{details.rotation}</h1>
        </div>

        <div className="details-wrapper__information-wrapper">
          <p className="font-league-spartan">Revolution Time</p>
          <h1 className="font-antonio">{details.revolution}</h1>
        </div>

        <div className="details-wrapper__information-wrapper">
          <p className="font-league-spartan">Radius</p>
          <h1 className="font-antonio">{details.radius}</h1>
        </div>

        <div className="details-wrapper__information-wrapper">
          <p className="font-league-spartan">Average Temp</p>
          <h1 className="font-antonio">{details.temperature}</h1>
        </div>
      </div>
    </section>
  );
};

export default Details;
