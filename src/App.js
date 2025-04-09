import React, { useState } from "react";
import "./App.css";
import Bonolit from "./comonents/Bonolit/Bonolit";
import "bootstrap/dist/css/bootstrap.min.css";
import Keramika from "./comonents/Keramika";
import { ButtonGroup, Container, ToggleButton } from "react-bootstrap";

import {
  PRICEBLOCK,
  DZGI,
  D500,
  D600,
  b20,
  b25,
  b35,
  b50,
  BLOCK,
  KERAMIKA,
  ANY,
  cutEnd,
} from "./files/const";

function App() {
  const [typeCalc, setTypeCalc] = useState(BLOCK);

  const [step, setStep] = useState(1.8);
  const [factory, setFactory] = useState(DZGI);
  const [density, setDensity] = useState(D500);
  const [lenght, setLenght] = useState("600");
  const [width, setWidth] = useState("300");
  const [typeWall, setTypeWall] = useState("wall");
  const [height, setHeight] = useState("250");
  const [percent, setPercent] = useState(0.93);
  const [strength, setStrength] = useState(b35);
  const [float, setFloat] = useState(0);
  const [variant, setVariant] = useState(1);
  const [priceSrc, setPriceSrc] = useState(
    PRICEBLOCK[factory][density][strength][typeWall]
  );
  const [priceView, setPriceView] = useState(cutEnd(priceSrc * percent, float));

  // const [dataVehicles, setDataVehicles] = useState({
  //   truckCount: 0,
  //   truckPrice: 0,
  //   truckText: "Доставка фурой:",
  //   manipulatorCount: 0,
  //   manipulatorPrice: 0,
  //   manipulatorText: "Доставка манипулятором:",
  //   hitchCount: 0,
  //   hitchPrice: 0,
  //   hitchText: "Доставка манипулятором с прицепом:",
  //   unloadingCount: 0,
  //   unloadingPrice: 0,
  //   unloadingText: "Разгрузка:",
  //   distance: "3",
  //   typePrice: "nal",
  // });

  let btnsCalc = [
    { val: BLOCK, name: "Блок" },
    { val: KERAMIKA, name: "Керамика" },
    { val: ANY, name: "Другой" },
  ];

  // bonolit

  // const [dataQuanity, setDataQuanity] = useState({
  //   volume: 0,
  //   thing: 0,
  //   pallet: 0,
  // });
  // const [glayData, setGlayData] = useState({
  //   glay25: 0,
  //   glayFoam: 0,
  //   glay25Price: 350,
  //   glayFoamPrice: 650,
  // });

  // const [result, setResult] = useState({ rows: [] });

  // const calcGlay = (e) => {
  //   const { dataset } = e.target;
  //   let allVolume = result.rows.reduce((acc, item) => {
  //     return (acc += +item.volume);
  //   }, +0);
  //   if (dataset.type === "glay25") {
  //     setGlayData({
  //       ...glayData,
  //       glay25: cutEnd(+allVolume * 1.15, 0),
  //       glayFoam: 0,
  //     });
  //   } else if (dataset.type === "glayFoam") {
  //     setGlayData({
  //       ...glayData,
  //       glayFoam: cutEnd(allVolume / 2, 0),
  //       glay25: 0,
  //     });
  //   } else if (dataset.type === "deleteGlay") {
  //     setGlayData({
  //       ...glayData,
  //       glayFoam: 0,
  //       glay25: 0,
  //     });
  //   }
  // };

  // const calcQuantity = (name, value) => {
  //   let step = calcStep();
  //   if (name === "volume") {
  //     let thing =
  //       (((((value / +lenght) * 1000) / +width) * 1000) / +height) * 1000;
  //     let pallet = value / +step;
  //     setDataQuanity({
  //       ...dataQuanity,
  //       [name]: value,
  //       thing: cutEnd(thing),
  //       pallet: cutEnd(pallet),
  //     });
  //   } else if (name === "thing") {
  //     let volume =
  //       (+lenght / 1000) * (+width / 1000) * (+height / 1000) * value;
  //     let pallet = volume / step;
  //     setDataQuanity({
  //       ...dataQuanity,
  //       [name]: value,
  //       volume: cutEnd(volume, 3),
  //       pallet: cutEnd(pallet),
  //     });
  //   } else if (name === "pallet") {
  //     let volume = value * step;
  //     let thing =
  //       (((((volume / +lenght) * 1000) / +width) * 1000) / +height) * 1000;
  //     setDataQuanity({
  //       ...dataQuanity,
  //       [name]: value,
  //       volume: cutEnd(volume, 3),
  //       thing: cutEnd(thing),
  //     });
  //   }
  // };
  // const calcStep = () => {
  //   let step = 1.8;
  //   if (+lenght === 600) {
  //     if (+width === 400) {
  //       step = factory === SK ? 2.16 : 1.92;
  //     } else if (+width === 350) step = 1.68;
  //     else if (+width === 200 && +height === 200) step = 1.44;
  //     else step = 1.8;
  //   } else if (+lenght === 625) {
  //     if (+width === 400) step = 2;
  //     else if (+width === 100) step = 2;
  //     else if (+width === 200) step = 2;
  //     else if (+width === 350) step = 1.75;
  //     else if (+width === 200) {
  //       setHeight(250);
  //       step = 1.875;
  //     } else {
  //       step = 1.875;
  //     }
  //   } else if (+lenght === 500) {
  //     if (factory === DZGI || factory === SK) {
  //       if (+width === 400) step = 1.2;
  //       if (+width === 375) step = 1.125;
  //     } else {
  //       if (+width === 400) step = 1.8;
  //       if (+width === 375) step = 1.6875;
  //       if (+width === 350) step = 1.575;
  //       if (+width === 300) step = 1.8;
  //       if (+width === 250) step = 1.875;
  //       if (+width === 200) step = 1.8;
  //     }
  //   }
  //   setStep(step);
  //   return step;
  // };

  // const handleInputQuantity = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   calcQuantity(name, value);
  // };

  // const cleanResult = () => {
  //   setResult({ rows: [] });
  //   // setFormData({
  //   //   volume: 0,
  //   //   thing: 0,
  //   //   pallet: 0,
  //   // });
  //   setGlayData({
  //     glay25: 0,
  //     glayFoam: 0,
  //     glay25Price: 350,
  //     glayFoamPrice: 650,
  //   });
  //   setDataVehicles({
  //     truckCount: 0,
  //     truckPrice: 0,
  //     truckText: "Доставка фурой:",
  //     manipulatorCount: 0,
  //     manipulatorPrice: 0,
  //     manipulatorText: "Доставка манипулятором:",
  //     hitchCount: 0,
  //     hitchPrice: 0,
  //     hitchText: "Доставка манипулятором с прицепом:",
  //     unloadingCount: 0,
  //     unloadingPrice: 0,
  //     unloadingText: "Разгрузка:",
  //     distance: "3",
  //     typePrice: "nal",
  //   });
  // };

  // const handleInputEditRow = (e) => {
  //   e.preventDefault();
  //   let type = e.target.dataset.type;
  //   let newRows = [];
  //   if (e.target.dataset.row) {
  //     let val = e.target.value;
  //     newRows = result.rows.map((el, i) => {
  //       if (+e.target.dataset.row === +i) {
  //         if (type === "price") {
  //           return {
  //             ...el,
  //             priceSrc: val,
  //             priceView: val,
  //             priceVxV: cutEnd(
  //               val * (el.lenght === "500" ? el.thing : el.volume),
  //               2
  //             ),
  //             percent: 1,
  //           };
  //         } else if (type === "quantity") {
  //           return {
  //             ...el,
  //             [el.lenght === "500" ? "thing" : "volume"]: val,
  //             priceVxV: cutEnd(val * el.priceView, 2),
  //           };
  //         }
  //       }
  //       return el;
  //     });
  //   }
  //   if (type === "delete") {
  //     newRows = result.rows.filter((el, row) => row !== +e.target.dataset.row);
  //   }
  //   setResult({
  //     ...result,
  //     rows: newRows,
  //   });
  // };
  // const handleInputChangePrice = (e) => {
  //   e.preventDefault();
  //   let price = e.target.value;
  //   setPriceSrc(price);
  //   setPriceView(cutEnd(price * percent, float));
  // };
  // const handleInputChangeGlay = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setGlayData({ ...glayData, [name]: value });
  // };

  // const handleBtn = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "calc") setTypeCalc(value);
  //   if (name === "density") {
  //     setDensity(value);
  //     if (value === D400) setStrength(b25);
  //     else if (value === D500) setStrength(b35);
  //     else if (value === D600) setStrength(b50);
  //   }
  //   if (name === "lenght") {
  //     setLenght(value);
  //   }
  //   if (name === "width") {
  //     setWidth(value);
  //     if (value > 150) setTypeWall("wall");
  //     else if (value > 50) setTypeWall("partition");
  //     else setTypeWall("50");
  //   }
  //   if (name === "height") {
  //     setHeight(value);
  //   }
  //   if (name === "factory") setFactory(value);
  //   if (name === "percent") setPercent(value);
  //   if (name === "strength") setStrength(value);
  //   calcStep();
  // };

  // const addRowBlock = () => {
  //   let resRow = {
  //     density: density,
  //     lenght: lenght,
  //     width: width,
  //     height: height,
  //     priceSrc: priceSrc,
  //     priceView: priceView,
  //     priceVxV: cutEnd(
  //       priceView * (lenght === "500" ? dataQuanity.thing : dataQuanity.volume),
  //       2
  //     ),
  //     percent: percent,
  //     volume: dataQuanity.volume,
  //     pallet: dataQuanity.pallet,
  //     thing: dataQuanity.thing,
  //     strength: strength,
  //   };
  //   setResult({ ...result, rows: [...result.rows, resRow] });
  // };
  // const printVehicles = () => {
  //   let rows = ["truck", "manipulator", "hitch", "unloading"].map(
  //     (vehicles, i) => {
  //       let text = dataVehicles[vehicles + "Text"];
  //       let count = dataVehicles[vehicles + "Count"];
  //       let price = dataVehicles[vehicles + "Price"];
  //       if (count === 1 && price > 0)
  //         return (
  //           <li key={i}>
  //             {vehicles === "truck" ? "Доставка:" : text} {count * price} ₽
  //           </li>
  //         );
  //       else if (count > 1 && price > 0) {
  //         return (
  //           <li key={i}>
  //             {text} {count} шт * {price} ₽ - {count * price} ₽
  //           </li>
  //         );
  //       }
  //       return "";
  //     }
  //   );

  //   return rows;
  // };
  // const printGlay = () => {
  //   let textGlay =
  //     glayData.glay25 > 0 ? (
  //       <li>
  //         Клей bonolit 25 кг - {glayData.glay25} шт * {glayData.glay25Price} ₽ -{" "}
  //         {cutEnd(glayData.glay25 * glayData.glay25Price, float)} ₽
  //       </li>
  //     ) : (
  //       ""
  //     );
  //   let textGlayFoam =
  //     glayData.glayFoam > 0 ? (
  //       <li>
  //         Клей-пена bonolit Формула-тепла - {glayData.glayFoam} шт *{" "}
  //         {glayData.glayFoamPrice} ₽ -{" "}
  //         {cutEnd(glayData.glayFoam * glayData.glayFoamPrice, float)} ₽
  //       </li>
  //     ) : (
  //       ""
  //     );
  //   return textGlay + textGlayFoam;
  // };

  // const printTotal = () => {
  //   let total;
  //   total = result.rows.reduce((acc, row) => {
  //     return (acc += +row.priceVxV);
  //   }, 0);
  //   total +=
  //     glayData.glay25Price * glayData.glay25 +
  //     glayData.glayFoamPrice * glayData.glayFoam +
  //     dataVehicles.hitchCount * dataVehicles.hitchPrice +
  //     dataVehicles.manipulatorCount * dataVehicles.manipulatorPrice +
  //     dataVehicles.truckCount * dataVehicles.truckPrice +
  //     dataVehicles.unloadingCount * dataVehicles.unloadingPrice;
  //   return total ? <li>Итого: {cutEnd(total, 2)} ₽</li> : "";
  // };
  // useEffect(() => {
  //   calcQuantity("volume", dataQuanity.volume);
  //   calcStep();
  //   setPriceSrc(PRICEBLOCK[factory][density][strength][typeWall]);
  // }, [density, factory, typeWall, width, height, lenght, strength]);

  // useEffect(() => {
  //   setPriceView(cutEnd(priceSrc * percent, float));
  // }, [float, percent, priceSrc]);

  return (
    <Container className="App">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="App">
        <h1>Калькулятор</h1>
        <ButtonGroup className="mb-3 w-100">
          {btnsCalc.map((item, idx) => (
            <ToggleButton
              key={idx}
              id={`rbc-${idx}`}
              type="radio"
              variant={"primary"}
              name="calc"
              value={item.val}
              checked={typeCalc === item.val}
              onChange={() => {
                setTypeCalc(item.val);
              }}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        {typeCalc === BLOCK ? (
          <Bonolit
            density={density}
            width={width}
            height={height}
            lenght={lenght}
            strength={strength}
            factory={factory}
            // handleBtn={handleBtn}
          />
        ) : (
          ""
        )}

        {typeCalc === KERAMIKA ? <Keramika /> : ""}
        {typeCalc === ANY ? "" : ""}
        {/* <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="formData-volume">м3</InputGroup.Text>
            <Form.Control
              placeholder="1,8"
              aria-label="Username"
              type="number"
              name="volume"
              value={formData.volume}
              aria-describedby="formData-volume"
              onChange={handleInputQuantity}
            />
            <InputGroup.Text id="formData-thing">шт.</InputGroup.Text>
            <Form.Control
              placeholder="40"
              aria-label="шт."
              type="number"
              name="thing"
              value={formData.thing}
              aria-describedby="formData-quantitything"
              onChange={handleInputQuantity}
            />
            <InputGroup.Text id="formData-pallet">пал</InputGroup.Text>
            <Form.Control
              placeholder="1"
              aria-label="шт."
              type="number"
              name="pallet"
              value={formData.pallet}
              step={1}
              aria-describedby="formData-pallet"
              onChange={handleInputQuantity}
            />
          </InputGroup>
        </div> */}

        {/* <CalcMinus
          priceSrc={priceSrc}
          handleInputChangePrice={handleInputChangePrice}
          setFloat={setFloat}
          float={float}
          setPercent={setPercent}
          percent={percent}
          cutEnd={cutEnd}
        /> */}

        {/* <div className="mb-3">
          <Button className="w-100" variant="success" onClick={addRowBlock}>
            Добавить
          </Button>
        </div> */}

        {/* <div className="mb-3">
          <InputGroup className="mb-1">
            <InputGroup.Text id="basic-glay25">Клей 25 кг</InputGroup.Text>
            <Form.Control
              placeholder="0"
              aria-label="Username"
              type="number"
              name="glay25"
              value={glayData.glay25}
              aria-describedby="basic-glay25"
              onChange={handleInputChangeGlay}
            />
            <InputGroup.Text id="basic-glay25Price">₽</InputGroup.Text>
            <Form.Control
              placeholder="0"
              aria-label="Username"
              type="number"
              name="glay25Price"
              value={glayData.glay25Price}
              aria-describedby="basic-glay25Price"
              onChange={handleInputChangeGlay}
            />
            <Button data-type="glay25" onClick={calcGlay}>
              +
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-glayFoam">Клей-пена</InputGroup.Text>
            <Form.Control
              placeholder="0"
              aria-label="Username"
              type="number"
              name="glayFoam"
              value={glayData.glayFoam}
              aria-describedby="basic-glayFoam"
              onChange={handleInputChangeGlay}
            />
            <InputGroup.Text id="basic-glayFoamPrice">₽</InputGroup.Text>
            <Form.Control
              placeholder="0"
              aria-label="Username"
              type="number"
              name="glayFoamPrice"
              value={glayData.glayFoamPrice}
              aria-describedby="basic-glayFoamPrice"
              onChange={handleInputChangeGlay}
            />
            <Button data-type="glayFoam" onClick={calcGlay}>
              +
            </Button>
          </InputGroup>
          <div>
            <Button className="w-100" data-type="deleteGlay" onClick={calcGlay}>
              Удалить клей
            </Button>
          </div>
        </div> */}
        {/* <Logictics
          dataVehicles={dataVehicles}
          setDataVehicles={setDataVehicles}
        /> */}
        {/* <div className="mb-2">
          <ButtonGroup className="w-100">
            {["Полный", "Мин", "3 строки", "Вход"].map((val, idx) => (
              <ToggleButton
                key={idx}
                id={`rvVariant-${idx}`}
                type="radio"
                variant={"primary"}
                name="variant"
                value={idx}
                checked={variant === idx}
                onChange={() => setVariant(idx)}
              >
                {val}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
        <div className="text-start mb-2">
          <RowResult
            result={result}
            variant={variant}
            step={step}
            copy={true}
            handleInputEditRow={handleInputEditRow}
          />
          {printGlay()}
          {printVehicles()}
          {printTotal()}
        </div>
        <Button className="mb-1 w-100" variant="warning" onClick={copyResult}>
          Скопировать
        </Button>
        <Button className="mb-1 w-100" variant="danger" onClick={cleanResult}>
          Очистить
        </Button>
        <div className="result text-start transparent">
          <RowResult
            result={result}
            variant={variant}
            step={step}
            copy={false}
            handleInputEditRow={handleInputEditRow}
          />
          {printGlay()}
          {printVehicles()}
          {printTotal()}
        </div> */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

export default App;
