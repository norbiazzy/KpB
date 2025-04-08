import React from "react";
import {
  Accordion,
  Button,
  Card,
  Form,
  InputGroup,
  useAccordionButton,
} from "react-bootstrap";
import { D500 } from "../files/const";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <Button
      type="button"
      style={{
        position: "absolute",
        top: "50%",
        right: "0",
        transform: "translate(-50%, -50%)",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

function RowResult(params) {
  let { result, copy, variant, step, handleInputEditRow } = params;

  let res = "";
  res = result.rows.map((i, key) => {
    let string = "";

    if (i.lenght !== "500") {
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
      } else if (variant === 3) {
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
        string = <></>;
      }
    } else {
      string = (
        <li key={key}>
          U-блок {D500} {i.lenght}x{i.width}x{i.height} - {i.thing} шт *{" "}
          {i.priceView} ₽ - {i.priceVxV} ₽
        </li>
      );
    }
    if (copy)
      return (
        <Card>
          <Card.Header className="position-relative border-none background-none">
            {string}
            <CustomToggle className="position-absolute" eventKey={key}>
              ...
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={key}>
            <Card.Body>
              <InputGroup>
                <Form.Control
                  placeholder={step}
                  type="number"
                  name={"quantity-" + key}
                  data-row={key}
                  data-type="quantity"
                  value={i.lenght === "500" ? i.thing : i.volume}
                  onChange={handleInputEditRow}
                />
                <InputGroup.Text id="formData-volume">₽</InputGroup.Text>
                <Form.Control
                  type="number"
                  name={"price-" + key}
                  data-row={key}
                  data-type="price"
                  value={i.priceView}
                  onChange={handleInputEditRow}
                />
                <InputGroup.Text id="formData-volume">
                  {i.lenght === "500" ? "шт." : "м3"}
                </InputGroup.Text>
                <Button
                  variant="danger"
                  data-type="delete"
                  data-row={key}
                  onClick={handleInputEditRow}
                >
                  X
                </Button>
              </InputGroup>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    else return string;
  });
  if (copy) return <Accordion> {res}</Accordion>;
  return res;
}

export default RowResult;
