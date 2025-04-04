import React from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { D500 } from "../files/const";

function RowResult(params) {
  let { result, copy, variant, step } = params;
  // const printRows = (copy) => {
  debugger;
  let res = "";
  res = result.rows.map((i, key) => {
    let string = "";
    let a = (
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Button eventKey="0">Click me!</Button>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Button eventKey="1">Click me!</Button>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );

    if (i.lenght !== "500") {
      debugger;
      if (variant === 0) {
        string = (
          <>
            <li key={key ** 4}>
              Bonolit {i.density} {i.lenght}x{i.width}x{i.height} {i.strength}{" "}
              F100 ГОСТ 31360
            </li>
            <li key={key ** 5}>
              {i.volume} м3 * {i.priceView} ₽ - {i.priceVxV} ₽
            </li>
            {!copy ? a : ""}
          </>
        );
      } else if (variant === 1) {
        string = (
          <li key={key ** 6}>
            {i.density} {i.lenght}x{i.width}x{i.height} {i.strength} -{" "}
            {i.volume} м3 * {i.priceView} ₽ - {i.priceVxV} ₽
          </li>
        );
      } else if (variant === 2) {
        debugger;
        string = (
          <>
            <li className="mb-0" key={key ** 1}>
              {i.density} {i.lenght}x{i.width}x{i.height} {i.strength}
            </li>
            <li className="mb-0" key={key ** 2}>
              {i.pallet} под. по {step} м3 ({i.thing} шт)
            </li>
            <li className="mb-0" key={key ** 3}>
              {i.volume} м3 * {i.priceView} ₽ - {i.priceVxV} ₽
            </li>
          </>
        );
      }
    } else if (variant === 3) {
      debugger;
      string = (
        <>
          <li className="mb-0" key={key ** 1}>
            {i.density} {i.lenght}x{i.width}x{i.height} {i.strength}
          </li>
          <li className="mb-0" key={key ** 2}>
            {i.pallet} под. по {step} м3 ({i.thing} шт)
          </li>
          <li className="mb-0" key={key ** 3}>
            {i.volume} м3 * {i.priceView} ₽ - {i.priceVxV} ₽
          </li>
        </>
      );
    } else if (variant === 4) {
      debugger;
      string = <></>;
    } else {
      string = (
        <li key={key}>
          U- блок {D500} {i.lenght}x{i.width}x{i.height} - {i.thing} шт *{" "}
          {i.priceView} ₽ - {i.priceVxV} ₽
        </li>
      );
    }
    return string;
  });
  return res;
}

export default RowResult;
