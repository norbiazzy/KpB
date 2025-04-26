import React, { useState } from "react";
import "./App.css";
import Bonolit from "./comonents/Bonolit/Bonolit";
import "bootstrap/dist/css/bootstrap.min.css";
import Keramika from "./comonents/Keramika/Keramika";
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
import Any from "./comonents/Any/Any";

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

  let btnsCalc = [
    { val: BLOCK, name: "Блок" },
    { val: KERAMIKA, name: "Керамика" },
    { val: ANY, name: "Другой" },
  ];


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
          />
        ) : (
          ""
        )}

        {typeCalc === KERAMIKA ? <Keramika /> : ""}
        {typeCalc === ANY ? <Any /> : ""}
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
