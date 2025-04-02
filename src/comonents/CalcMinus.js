import React from "react";
import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";

function CalcMinus(params) {
  let {
    priceSrc,
    handleInputChangePrice,
    setFloat,
    float,
    setPercent,
    percent,
    PERSENTS,
    cutEnd,
  } = params
  return (<>
    <div>
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
    </div>
    <div>
      <ButtonGroup className="w-100 mb-2">
        {PERSENTS.map((btn, idx) => (
          <Button
            id={`btn-persent${idx}`}
            variant={btn.color}
            data-type="percent"
            value={btn.value}
            onClick={(e) => setPercent(e.target.value)}
          >
            {btn.text}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  </>
  );
}

export default CalcMinus;
