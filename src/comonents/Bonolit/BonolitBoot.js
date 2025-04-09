import React, { useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Modal,
  Row,
  ToggleButton,
} from "react-bootstrap";
import ModalBridge from "../ModalBridge";

function BonolitBoot(params) {
  const {
    handleBtn,
    density,
    lenght,
    width,
    height,
    strength,
    factory,

    SK,
    DZGI,
    MY,
    D400,
    D500,
    D600,
    b20,
    b25,
    b35,
    b50,
  } = params;
  const radiosDensity = ["D400", "D500", "D600"];
  const radiosLenght = ["500", "600", "625"];
  const radiosWidth = [
    ["400", "375", "350"],
    ["300", "250", "200"],
    ["150", "125", "100"],
    ["75", "50", "*_*"],
  ];

  const radiosStrength = [b20, b25, b35, b50];
  const radiosFactory = [
    { val: SK, name: "СК" },
    { val: DZGI, name: "ДЗГИ" },
    { val: MY, name: "МЯ" },
  ];

  const radiosHeight = ["250", "200"];
  useEffect(() => {
    return () => {};
  }, [density]);

  return (
    <>
      <div>
        <ButtonGroup className="mb-2 w-100">
          {radiosDensity.map((val, idx) => (
            <ToggleButton
              key={idx}
              id={`rd-${idx}`}
              type="radio"
              variant={"primary"}
              name="density"
              value={val}
              checked={density === val}
              onChange={(e) => {
                handleBtn(e);
              }}
            >
              {val}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup className="mb-2 w-100">
          {radiosLenght.map((val, idx) => (
            <ToggleButton
              key={idx}
              id={`rl-${idx}`}
              type="radio"
              variant={"primary"}
              name="lenght"
              value={val}
              checked={lenght === val}
              onChange={(e) => {
                handleBtn(e);
              }}
            >
              {val}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div>
        {radiosWidth.map((row, i) => (
          <div>
            <ButtonGroup className="mb-1 w-100">
              {row.map((val, idx) => {
                if (i === 3 && idx === 2) return <ModalBridge />;
                return (
                  <ToggleButton
                    key={idx}
                    id={`rw${i}-${idx}`}
                    type="radio"
                    variant={"primary"}
                    name="width"
                    value={val}
                    checked={width === val}
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
      <div>
        <ButtonGroup className="mb-2 w-100">
          {radiosHeight.map((val, idx) => (
            <ToggleButton
              key={idx}
              id={`rh-${idx}`}
              type="radio"
              variant={"primary"}
              name="height"
              value={val}
              checked={height === val}
              onChange={handleBtn}
            >
              {val}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup className="mb-2 w-100">
          {radiosStrength.map((val, idx) => (
            <ToggleButton
              key={idx}
              id={`rStrength-${idx}`}
              type="radio"
              variant={"primary"}
              disabled={
                val === b20
                  ? density !== D400
                  : val === b25
                  ? density === D600
                  : val === b35
                  ? density === D400
                  : val === b50
                  ? density !== D600
                  : false
              }
              name="strength"
              value={val}
              checked={strength === val}
              onChange={handleBtn}
            >
              {val}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div>
        <ButtonGroup className="mb-3 w-100">
          {radiosFactory.map((item, idx) => (
            <ToggleButton
              key={idx}
              id={`rf-${idx}`}
              type="radio"
              variant={"primary"}
              name="factory"
              value={item.val}
              checked={factory === item.val}
              onChange={handleBtn}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </>
  );
}

export default BonolitBoot;
