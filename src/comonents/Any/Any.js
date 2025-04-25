import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import CalcMinus from "../CalcMinus";
import { cutEnd } from "../../files/const";
import Result from "../Result";

function Any(params) {
  const [float, setFloat] = useState(0);
  const [priceSrc, setPriceSrc] = useState("");
  const [percent, setPercent] = useState(1);
  const [name, setName] = useState("");
  const [unOfMe, setUnOfMe] = useState("шт");
  const [quanity, setQuanity] = useState("");

  const [priceView, setPriceView] = useState(cutEnd(priceSrc * percent, float));
  const [result, setResult] = useState({ rows: [] });

  const handleInputChangePrice = (e) => {
    e.preventDefault();
    let price = e.target.value;
    setPriceSrc(price);
    setPriceView(cutEnd(price * percent, float));
  };

  useEffect(() => {
    setPriceView(cutEnd(priceSrc * percent, float));
  }, [float, percent, priceSrc]);

  const addRowBlock = () => {
    let resRow = {
      name: name,
      quanity: quanity,
      unOfMe: unOfMe,
      priceSrc: priceSrc,
      priceView: priceView,
      priceVxV: cutEnd(priceView * quanity, 2),
      percent: percent,
    };
    setResult({ ...result, rows: [...result.rows, resRow] });
  };

  const cleanResult = () => {
    setResult({ rows: [] });
  };
  
  return (
    <div>
      <InputGroup className="mb-2">
        <Form.Control
          placeholder="Кирпич полнотелый 1НФ М200"
          aria-label="руб"
          type="text"
          name="name"
          value={name}
          aria-describedby="formData-price"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button
          variant="danger"
          data-type="delete"
          onClick={() => {
            setName("");
          }}
        >
          X
        </Button>
      </InputGroup>
      <InputGroup className="mb-2">
        <InputGroup.Text id="9999">ед. изм.</InputGroup.Text>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            setUnOfMe(e.target.value);
          }}
        >
          <option value="шт">шт</option>
          <option value="м">м</option>
          <option value="м2">м2</option>
          <option value="м3">м3</option>
          <option value="уп">уп</option>
          <option value="мп">мп</option>
          <option value="меш">меш</option>
          <option value="рул">рул</option>
          <option value="кг">кг</option>
        </Form.Select>
        <Form.Control
          type="text"
          name="quanity"
          value={quanity}
          aria-describedby="formData-price"
          onChange={(e) => {
            setQuanity(e.target.value);
          }}
        />
      </InputGroup>
      <CalcMinus
        priceSrc={priceSrc}
        handleInputChangePrice={handleInputChangePrice}
        setFloat={setFloat}
        float={float}
        setPercent={setPercent}
        percent={percent}
      />
      <Button className="w-100" variant="success" onClick={addRowBlock}>
        Добавить
      </Button>
      <Result
        result={result}
        setResult={setResult}
        float={float}
        cleanResult={cleanResult}
      />
    </div>
  );
}

export default Any;
