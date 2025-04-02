import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

function LogicticCounter(params) {
  const {
    vehicles,
    count,
    price,
    vehiclesAdd,
    vehiclesRemove,
    setViclesPrice,
    setVehiclesCount,
    text,
  } = params;
  return (
    <div className="d-flex">
      <span className="w-50 text-start">{text}</span>
      <InputGroup>
        <Button
          variant="outline-secondary"
          id={`button-remove-${vehicles}`}
          data-vehicles={vehicles + "Count"}
          onClick={vehiclesRemove}
        >
          -
        </Button>
        <Form.Control 
          placeholder="0"
          aria-label="Username"
          type="number"
          name="setVehicles"
          value={count}
          aria-describedby="basic-vehiclesCounter"
          onChange={(e) => {
            setVehiclesCount(+e.target.value, vehicles);
          }}
        />
        <Button
          variant="outline-secondary"
          id={`button-add-${vehicles}`}
          data-vehicles={vehicles + "Count"}
          onClick={vehiclesAdd}
        >
          +
        </Button>
        <Form.Control
          placeholder="0"
          aria-label="Username"
          type="number"
          name={vehicles + "Price"}
          value={price}
          aria-describedby="basic-vehiclesPrice"
          onChange={setViclesPrice}
        />
      </InputGroup>
    </div>
  );
}

export default LogicticCounter;
