import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { cutEnd } from "../files/const";

const PERSENTS = [
  { value: 1.05, color: "outline-success", text: "+5" },
  { value: 1.04, color: "success", text: "+4" },
  { value: 1.03, color: "outline-success", text: "+3" },
  { value: 1.02, color: "outline-success", text: "+2" },
  { value: 1, color: "primary", text: "0" },
  { value: 0.97, color: "outline-danger", text: "-3" },
  { value: 0.95, color: "outline-danger", text: "-5" },
  { value: 0.93, color: "danger", text: "-7" },
  { value: 0.9, color: "outline-danger", text: "-10" },
  { value: 0.88, color: "outline-danger", text: "-12" },
];

function CalcMinus({
  priceSrc,
  handleInputChangePrice,
  setFloat,
  float,
  setPercent,
  percent,
}) {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="formData-price">₽</InputGroup.Text>
        <Form.Control
          placeholder="1"
          aria-label="руб"
          type="number"
          name="price"
          value={priceSrc}
          aria-describedby="formData-price"
          onChange={handleInputChangePrice}
        />
        <InputGroup.Text
          onClick={() => setFloat((pF) => (pF === 2 ? 0 : 2))}
          id="formData-price"
        >
          {cutEnd(priceSrc * percent, float)}
        </InputGroup.Text>
        <Form.Control
          className="text-end"
          placeholder="0.97"
          aria-label="Username"
          type="number"
          name="percent"
          value={percent}
          step={0.01}
          aria-describedby="basic-addon1"
          onChange={(e) => setPercent(e.target.value)}
        />
        <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
      </InputGroup>

      <div className="mb-2">
        {PERSENTS.map((btn, idx) => (
          <Button
            className="me-1 mb-1"
            id={`btn-persent${idx}`}
            variant={btn.color}
            data-type="percent"
            value={btn.value}
            onClick={(e) => setPercent(e.target.value)}
          >
            {btn.text}
          </Button>
        ))}
      </div>
    </>
  );
}

export default CalcMinus;
