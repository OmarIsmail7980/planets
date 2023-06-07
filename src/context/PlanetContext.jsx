import { useContext, createContext, useState, useEffect } from "react";
import data from "../data.json";

import mercuryImg from "../assets/planet-mercury.svg";
import stractureImg from "../assets/planet-mercury-internal.svg";
import geoImg from "../assets/geology-mercury.png";

import venusImg from "../assets/planet-venus.svg";
import venusStracture from "../assets/planet-venus-internal.svg";
import venusGeo from "../assets/geology-venus.png";

import earthImg from "../assets/planet-earth.svg";
import earthStracture from "../assets/planet-earth-internal.svg";
import earthGeo from "../assets/geology-earth.png";

import marsImg from "../assets/planet-mars.svg";
import marsStracture from "../assets/planet-mars-internal.svg";
import marsGeo from "../assets/geology-mars.png";

import jupiterImg from "../assets/planet-jupiter.svg";
import jupiterStracture from "../assets/planet-jupiter-internal.svg";
import jupiterGeo from "../assets/geology-jupiter.png";

import saturnImg from "../assets/planet-saturn.svg";
import saturnStracture from "../assets/planet-saturn-internal.svg";
import saturnGeo from "../assets/geology-saturn.png";

import neptuneImg from "../assets/planet-neptune.svg";
import neptuneStracture from "../assets/planet-neptune-internal.svg";
import neptuneGeo from "../assets/geology-neptune.png";

import uranusImg from "../assets/planet-uranus.svg";
import uranusStracture from "../assets/planet-uranus-internal.svg";
import uranusGeo from "../assets/geology-uranus.png";

export const planetsMap = new Map([
  [
    data[0].name.toLowerCase(),
    { image: mercuryImg, stractureImg: stractureImg, geoImg: geoImg },
  ],
  [
    data[1].name.toLowerCase(),
    { image: venusImg, stractureImg: venusStracture, geoImg: venusGeo },
  ],
  [
    data[2].name.toLowerCase(),
    { image: earthImg, stractureImg: earthStracture, geoImg: earthGeo },
  ],
  [
    data[3].name.toLowerCase(),
    { image: marsImg, stractureImg: marsStracture, geoImg: marsGeo },
  ],
  [
    data[4].name.toLowerCase(),
    { image: jupiterImg, stractureImg: jupiterStracture, geoImg: jupiterGeo },
  ],
  [
    data[5].name.toLowerCase(),
    { image: saturnImg, stractureImg: saturnStracture, geoImg: saturnGeo },
  ],
  [
    data[6].name.toLowerCase(),
    { image: uranusImg, stractureImg: uranusStracture, geoImg: uranusGeo },
  ],
  [
    data[7].name.toLowerCase(),
    { image: neptuneImg, stractureImg: neptuneStracture, geoImg: neptuneGeo },
  ],
]);

const PlanetContext = createContext();

export const PlanetContextProvider = ({ children }) => {
  const [details, setDetails] = useState(data[0]);
  const [imagObj, setImgObj] = useState({
    image: mercuryImg,
    stractureImg,
    geoImg,
    colorHex: "#419EBB",
  });

  useEffect(() => {
    setDetails(data[0]);
    setImgObj({
      image: mercuryImg,
      stractureImg,
      geoImg,
      colorHex: "#419EBB",
    });
  }, []);

  return (
    <PlanetContext.Provider value={{ details, setDetails, imagObj, setImgObj }}>
      {children}
    </PlanetContext.Provider>
  );
};

export const UsePlanet = () => {
  return useContext(PlanetContext);
};
