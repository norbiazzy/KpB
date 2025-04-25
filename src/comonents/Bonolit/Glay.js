import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { cutEnd } from "../../files/const";

function Glay({ glayData, setGlayData, result }) {
  const calcGlay = (e) => {
    const { dataset } = e.target;
    let allVolume = result.rows.reduce((acc, item) => {
      return (acc += +item.volume);
    }, +0);
    if (dataset.type === "glay25") {
      setGlayData({
        ...glayData,
        glay25: cutEnd(+allVolume * 1.15, 0),
        glayFoam: 0,
      });
    } else if (dataset.type === "glayFoam") {
      setGlayData({
        ...glayData,
        glayFoam: cutEnd(allVolume * 0.5, 0),
        glay25: 0,
      });
    } else if (dataset.type === "deleteGlay") {
      setGlayData({
        ...glayData,
        glayFoam: 0,
        glay25: 0,
      });
    }
  };

  const handleInputChangeGlay = (e) => {
    const { name, value } = e.target;
    setGlayData({ ...glayData, [name]: value });
  };
  return (
    <div className="mb-3">
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-glay25">Клей 25 кг</InputGroup.Text>
        <Form.Control
          placeholder="0"
          aria-label="Username"
          type="number"
          name="glay25"
          value={glayData.glay25}
          aria-describedby="basic-glay25"
          onChange={handleInputChangeGlay}
        />
        <InputGroup.Text id="basic-glay25Price">₽</InputGroup.Text>
        <Form.Control
          placeholder="0"
          aria-label="Username"
          type="number"
          name="glay25Price"
          value={glayData.glay25Price}
          aria-describedby="basic-glay25Price"
          onChange={handleInputChangeGlay}
        />
        <Button data-type="glay25" onClick={calcGlay}>
          +
        </Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-glayFoam">Клей-пена</InputGroup.Text>
        <Form.Control
          placeholder="0"
          aria-label="Username"
          type="number"
          name="glayFoam"
          value={glayData.glayFoam}
          aria-describedby="basic-glayFoam"
          onChange={handleInputChangeGlay}
        />
        <InputGroup.Text id="basic-glayFoamPrice">₽</InputGroup.Text>
        <Form.Control
          placeholder="0"
          aria-label="Username"
          type="number"
          name="glayFoamPrice"
          value={glayData.glayFoamPrice}
          aria-describedby="basic-glayFoamPrice"
          onChange={handleInputChangeGlay}
        />
        <Button data-type="glayFoam" onClick={calcGlay}>
          +
        </Button>
      </InputGroup>
      <div>
        <Button className="w-100" data-type="deleteGlay" onClick={calcGlay}>
          Удалить клей
        </Button>
      </div>
    </div>
  );
}

export default Glay;
