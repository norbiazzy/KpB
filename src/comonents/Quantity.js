import React from "react";
import { Form, InputGroup } from "react-bootstrap";

function Quantity({ dataQuanity, handleInputQuantity }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="formData-volume">м3</InputGroup.Text>
        <Form.Control
          placeholder="1,8"
          aria-label="Username"
          type="number"
          name="volume"
          value={dataQuanity.volume}
          aria-describedby="formData-volume"
          onChange={handleInputQuantity}
        />
        <InputGroup.Text id="formData-thing">шт.</InputGroup.Text>
        <Form.Control
          placeholder="40"
          aria-label="шт."
          type="number"
          name="thing"
          value={dataQuanity.thing}
          aria-describedby="formData-thing"
          onChange={handleInputQuantity}
        />
        <InputGroup.Text id="formData-pallet">пал</InputGroup.Text>
        <Form.Control
          placeholder="1"
          aria-label="шт."
          type="number"
          name="pallet"
          value={dataQuanity.pallet}
          step={1}
          aria-describedby="formData-pallet"
          onChange={handleInputQuantity}
        />
      </InputGroup>
    </div>
  );
}

export default Quantity;
