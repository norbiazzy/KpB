import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import ModalBridge from "../ModalBridge.js";
import Quantity from "../Quantity.js";
import {
  b20,
  b25,
  b35,
  b50,
  cutEnd,
  D400,
  D500,
  D600,
  DZGI,
  MY,
  PRICEBLOCK,
  SK,
} from "../../files/const.js";
import CalcMinus from "../CalcMinus.js";
import Glay from "./Glay.js";
import Result from "../Result.js";
import Logictics from "../Logistics/Logictics.js";
import CalcBtns from "../CalcBtns.js";

const radiosDensity = ["D400", "D500", "D600"];

const radiosLenght = ["500", "600", "625"];
const radiosWidth = [
  ["400", "375", "350"],
  ["300", "250", "200"],
  ["150", "125", "100"],
  ["75", "50", "||"],
];
const radiosHeight = ["250", "200"];
const radiosStrength = [b20, b25, b35, b50];
const radiosFactory = [SK, DZGI, MY];

function Bonolit(params) {
  const [step, setStep] = useState(1.8);
  const [factory, setFactory] = useState(DZGI);
  const [density, setDensity] = useState(D500);
  const [lenght, setLenght] = useState("600");
  const [width, setWidth] = useState("300");
  const [typeWall, setTypeWall] = useState("wall");
  const [height, setHeight] = useState("250");
  const [percent, setPercent] = useState(0.93);
  const [strength, setStrength] = useState(b35);
  const [desableStrength, setDesableStrength] = useState([
    true,
    false,
    false,
    true,
  ]);

  const [float, setFloat] = useState(0);
  const [priceSrc, setPriceSrc] = useState(
    PRICEBLOCK[factory][density][strength][typeWall]
  );
  const [priceView, setPriceView] = useState(cutEnd(priceSrc * percent, float));
  const [dataQuanity, setDataQuanity] = useState({
    volume: 0,
    thing: 0,
    pallet: 0,
  });
  const [glayData, setGlayData] = useState({
    glay25: 0,
    glayFoam: 0,
    glay25Price: 350,
    glayFoamPrice: 650,
  });
  const [dataVehicles, setDataVehicles] = useState({
    truckCount: 0,
    truckPrice: 0,
    truckText: "Доставка фурой:",
    manipulatorCount: 0,
    manipulatorPrice: 0,
    manipulatorText: "Доставка манипулятором:",
    hitchCount: 0,
    hitchPrice: 0,
    hitchText: "Доставка манипулятором с прицепом:",
    unloadingCount: 0,
    unloadingPrice: 0,
    unloadingText: "Разгрузка:",
    distance: "3",
    typePrice: "nal",
  });
  const [result, setResult] = useState({ rows: [] });

  const calcStep = () => {
    let step = 1.8;
    if (+lenght === 600) {
      if (+width === 400) {
        step = factory === SK ? 2.16 : 1.92;
      } else if (+width === 350) step = 1.68;
      else if (+width === 200 && +height === 200) step = 1.44;
      else step = 1.8;
    } else if (+lenght === 625) {
      if (+width === 400) step = 2;
      else if (+width === 100) step = 2;
      else if (+width === 200) step = 2;
      else if (+width === 350) step = 1.75;
      else if (+width === 200) {
        setHeight(250);
        step = 1.875;
      } else {
        step = 1.875;
      }
    } else if (+lenght === 500) {
      if (factory === DZGI || factory === SK) {
        if (+width === 400) step = 1.2;
        if (+width === 375) step = 1.125;
      } else {
        if (+width === 400) step = 1.8;
        if (+width === 375) step = 1.6875;
        if (+width === 350) step = 1.575;
        if (+width === 300) step = 1.8;
        if (+width === 250) step = 1.875;
        if (+width === 200) step = 1.8;
      }
    }
    setStep(step);
    return step;
  };
  const addRowBlock = () => {
    debugger
    let resRow = {
      density: density,
      lenght: lenght,
      width: width,
      height: height,
      priceSrc: priceSrc,
      priceView: priceView,
      priceVxV: cutEnd(
        priceView * (lenght === "500" ? dataQuanity.thing : dataQuanity.volume),
        2
      ),
      step: step,
      percent: percent,
      volume: dataQuanity.volume,
      pallet: dataQuanity.pallet,
      thing: dataQuanity.thing,
      strength: strength,
    };
    setResult({ ...result, rows: [...result.rows, resRow] });
  };

  const handleInputQuantity = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    calcQuantity(name, value);
  };
  const calcQuantity = (name, value) => {
    let step = calcStep();
    if (name === "volume") {
      let thing =
        (((((value / +lenght) * 1000) / +width) * 1000) / +height) * 1000;
      let pallet = value / +step;
      setDataQuanity({
        ...dataQuanity,
        [name]: value,
        thing: cutEnd(thing),
        pallet: cutEnd(pallet),
      });
    } else if (name === "thing") {
      let volume =
        (+lenght / 1000) * (+width / 1000) * (+height / 1000) * value;
      let pallet = volume / step;
      setDataQuanity({
        ...dataQuanity,
        [name]: value,
        volume: cutEnd(volume, 3),
        pallet: cutEnd(pallet),
      });
    } else if (name === "pallet") {
      let volume = value * step;
      let thing =
        (((((volume / +lenght) * 1000) / +width) * 1000) / +height) * 1000;
      setDataQuanity({
        ...dataQuanity,
        [name]: value,
        volume: cutEnd(volume, 3),
        thing: cutEnd(thing),
      });
    }
  };

  const cleanResult = () => {
    setResult({ rows: [] });
    setGlayData({
      glay25: 0,
      glayFoam: 0,
      glay25Price: 350,
      glayFoamPrice: 650,
    });
    setDataVehicles({
      truckCount: 0,
      truckPrice: 0,
      truckText: "Доставка фурой:",
      manipulatorCount: 0,
      manipulatorPrice: 0,
      manipulatorText: "Доставка манипулятором:",
      hitchCount: 0,
      hitchPrice: 0,
      hitchText: "Доставка манипулятором с прицепом:",
      unloadingCount: 0,
      unloadingPrice: 0,
      unloadingText: "Разгрузка:",
      distance: "3",
      typePrice: "nal",
    });
  };

  const handleParam = (e) => {
    const { name, value } = e.target;
    if (name === "density") {
      setDensity(value);
      if (value === D400) setStrength(b25);
      else if (value === D500) setStrength(b35);
      else if (value === D600) setStrength(b50);
    }
    if (name === "lenght") {
      setLenght(value);
    }
    if (name === "width") {
      setWidth(value);
      if (value > 150) setTypeWall("wall");
      else if (value > 50) setTypeWall("partition");
      else setTypeWall("50");
    }
    if (name === "height") {
      setHeight(value);
    }
    if (name === "factory") setFactory(value);
    if (name === "percent") setPercent(value);
    if (name === "strength") setStrength(value);
  };

  const handleInputChangePrice = (e) => {
    e.preventDefault();
    let price = e.target.value;
    setPriceSrc(price);
    setPriceView(cutEnd(price * percent, float));
  };
  useEffect(() => {
    calcQuantity("volume", dataQuanity.volume);
    calcStep();
    setPriceSrc(PRICEBLOCK[factory][density][strength][typeWall]);
  }, [density, factory, typeWall, width, height, lenght, strength]);

  useEffect(() => {
    setPriceView(cutEnd(priceSrc * percent, float));
  }, [float, percent, priceSrc]);

  useEffect(() => {
    setDesableStrength([
      density !== D400,
      density === D600,
      density === D400,
      density !== D600,
    ]);
  }, [density]);

  return (
    <>
      <CalcBtns
        data={radiosDensity}
        name="density"
        curParam={density}
        handle={handleParam}
        className={'mb-2'}
      />
      <CalcBtns
        data={radiosLenght}
        name="lenght"
        curParam={lenght}
        handle={handleParam}
        className={'mb-2'}
      />
      {radiosWidth.map((row, i) => (
        <CalcBtns
          data={row}
          name="width"
          curParam={width}
          i={i}
          handle={handleParam}
          className={'mb-1'}
        />
      ))}
      <CalcBtns
        data={radiosHeight}
        name="height"
        curParam={height}
        handle={handleParam}
        className={'mb-2'}
      />
      <CalcBtns
        data={radiosStrength}
        name="strength"
        curParam={strength}
        handle={handleParam}
        disabled={desableStrength}
        className={'mb-2'}
      />
      <CalcBtns
        data={radiosFactory}
        name="factory"
        curParam={factory}
        handle={handleParam}
        className={'mb-2'}
      />
      <Quantity
        handleInputQuantity={handleInputQuantity}
        dataQuanity={dataQuanity}
      />
      <CalcMinus
        priceSrc={priceSrc}
        handleInputChangePrice={handleInputChangePrice}
        setFloat={setFloat}
        float={float}
        setPercent={setPercent}
        percent={percent}
      />
      <div className="mb-3">
        <Button className="w-100" variant="success" onClick={addRowBlock}>
          Добавить
        </Button>
      </div>
      <Glay setGlayData={setGlayData} result={result} glayData={glayData} />
      <Logictics
        dataVehicles={dataVehicles}
        setDataVehicles={setDataVehicles}
      />
      <Result
        result={result}
        setResult={setResult}
        glayData={glayData}
        dataVehicles={dataVehicles}
        float={float}
        cleanResult={cleanResult}
      />
    </>
  );
}

export default Bonolit;
