import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import RowResult from "./RowResult";
import { copyResult, cutEnd } from "../files/const";

function Result({
  result,
  setResult,
  glayData,
  dataVehicles,
  float,
  cleanResult,
}) {
  const [variant, setVariant] = useState(1);

  const printVehicles = () => {
    let rows = ["truck", "manipulator", "hitch", "unloading"].map(
      (vehicles, i) => {
        let text = dataVehicles[vehicles + "Text"];
        let count = dataVehicles[vehicles + "Count"];
        let price = dataVehicles[vehicles + "Price"];
        if (count === 1 && price > 0)
          return (
            <li key={i}>
              {vehicles === "truck" ? "Доставка:" : text} {count * price} ₽
            </li>
          );
        else if (count > 1 && price > 0) {
          return (
            <li key={i}>
              {text} {count} шт * {price} ₽ - {count * price} ₽
            </li>
          );
        }
        return "";
      }
    );

    return rows;
  };
  const printGlay = () => {
    let textGlay =
      glayData.glay25 > 0 ? (
        <li>
          Клей bonolit 25 кг - {glayData.glay25} шт * {glayData.glay25Price} ₽ -{" "}
          {cutEnd(glayData.glay25 * glayData.glay25Price, float)} ₽
        </li>
      ) : (
        ""
      );
    let textGlayFoam =
      glayData.glayFoam > 0 ? (
        <li>
          Клей-пена bonolit Формула-тепла - {glayData.glayFoam} шт *{" "}
          {glayData.glayFoamPrice} ₽ -{" "}
          {cutEnd(glayData.glayFoam * glayData.glayFoamPrice, float)} ₽
        </li>
      ) : (
        ""
      );
    return textGlay + textGlayFoam;
  };
  const handleInputEditRow = (e) => {
    e.preventDefault();
    let type = e.target.dataset.type;
    let newRows = [];
    if (e.target.dataset.row) {
      let val = e.target.value;
      newRows = result.rows.map((el, i) => {
        if (+e.target.dataset.row === +i) {
          if (type === "price") {
            return {
              ...el,
              priceSrc: val,
              priceView: val,
              priceVxV: cutEnd(
                val * (el.lenght === "500" ? el.thing : el.volume),
                2
              ),
              percent: 1,
            };
          } else if (type === "quantity") {
            return {
              ...el,
              [el.lenght === "500" ? "thing" : "volume"]: val,
              [el.lenght !== "500" ? "volume" : ""]: val,
              priceVxV: cutEnd(val * el.priceView, 2),
            };
          }
        }
        return el;
      });
    }
    if (type === "delete") {
      newRows = result.rows.filter((el, row) => row !== +e.target.dataset.row);
    }
    setResult({
      ...result,
      rows: newRows,
    });
  };
  const printTotal = () => {
    let total;
    total = result.rows.reduce((acc, row) => {
      return (acc += +row.priceVxV);
    }, 0);
    total +=
      glayData.glay25Price * glayData.glay25 +
      glayData.glayFoamPrice * glayData.glayFoam +
      dataVehicles.hitchCount * dataVehicles.hitchPrice +
      dataVehicles.manipulatorCount * dataVehicles.manipulatorPrice +
      dataVehicles.truckCount * dataVehicles.truckPrice +
      dataVehicles.unloadingCount * dataVehicles.unloadingPrice;
    return total ? <li>Итого: {cutEnd(total, 2)} ₽</li> : "";
  };
  return (
    <>
      <div className="mb-2">
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
          //   step={step}
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
          //   step={step}
          copy={false}
          handleInputEditRow={handleInputEditRow}
        />
        {printGlay()}
        {printVehicles()}
        {printTotal()}
      </div>
    </>
  );
}

export default Result;
