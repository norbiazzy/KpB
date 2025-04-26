import React, { useState } from "react";
import { cutEnd, GJEL, POROTERM, sizes } from "../../files/const";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import CalcBtns from "../CalcBtns";
import Quantity from "../Quantity";

const radiosSize = [
  ["51", "44", "38"],
  ["38т", "25", "20"],
  ["12", "8", "2.1"],
];
const radiosFactory = [
  { value: GJEL, name: "Гжель" },
  { value: POROTERM, name: "Поротерм" },
];

function Keramika(params) {
  const [factory, setFactory] = useState(GJEL);
  const [size, setSize] = useState("38");
  const [lenght, setLenght] = useState("250");
  const [width, setWidth] = useState("380");
  const [height, setHeight] = useState("219");
  const [formData, setFormData] = useState({});
  const [dataQuanity, setDataQuanity] = useState({
    volume: 0,
    thing: 0,
    pallet: 0,
  });

  const calcStep = () => { };

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
  const handleBtn = (e) => {
    const { name, value } = e.target;
    if (name === "factory") setFactory(value);
    if (name === "size") setSize(value);
    calcStep();
  };
  const setSide = (size) => {
    switch (size) {
      case '51':
        setLenght('250')
        setWidth('510')
        setHeight('219')
        break;
      case '44':
        setLenght('250')
        setWidth('440')
        setHeight('219')
        break;
      case '38':
        setLenght('250')
        setWidth('380')
        setHeight('219')
        break;
      case '38t':
        setLenght('250')
        setWidth('380')
        setHeight('219')
        break;
      case '25':
        setLenght('380')
        setWidth('250')
        setHeight('219')
        break;
      case '20':
        setLenght('400')
        setWidth('200')
        setHeight('219')
        break;
      case '12':
        setLenght('510')
        setWidth('120')
        setHeight('219')
        break;
      case '8':
        setLenght('510')
        setWidth('80')
        setHeight('219')
        break;
      case '2.1':
        setLenght('250')
        setWidth('120')
        setHeight('138')
        break;

      default:
        break;
    }
  }

  const handleInputQuantity = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    calcQuantity(name, value);
  };




  return (
    <div>
      <div>

        <ButtonGroup className="mb-3 w-100">
          {radiosFactory.map((item, idx) => (
            <ToggleButton
              key={idx}
              id={`rfk-${idx}`}
              type="radio"
              variant={"primary"}
              name="factory"
              value={item.value}
              checked={factory === item.value}
              onChange={handleBtn}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div>
        {radiosSize.map((row, i) => (
          <div>
            <ButtonGroup className="mb-1 w-100">
              {row.map((val, idx) => {
                return (
                  <ToggleButton
                    key={idx}
                    id={`rsk${i}-${idx}`}
                    type="radio"
                    variant={"primary"}
                    name="size"
                    value={val}
                    data-type="size"
                    checked={size === val}
                    onChange={(e) => {
                      handleBtn(e);
                    }}
                  >
                    {val}
                  </ToggleButton>
                );
              })}
            </ButtonGroup>
          </div>
        ))}
      </div>
      <Quantity
        handleInputQuantity={handleInputQuantity}
        dataQuanity={dataQuanity}
      />
    </div>
  );
}

export default Keramika;
