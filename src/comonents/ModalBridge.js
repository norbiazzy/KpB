import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BRIDGES } from "../files/const";
import { Form, InputGroup, ToggleButton } from "react-bootstrap";

function ModalBridge() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBtn = () => {};

  return (
    <>
      <ToggleButton
        variant="primary"
        // style={{ borderRadius: "12px", border: "1px solid" }}
        onClick={handleShow}
      >
        ||
      </ToggleButton>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Перемычки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {BRIDGES.map((bridge, idx) => {
            return (
              <>
                <div className="mb-1">
                  <span className="w-50 text-start d-flex align-items-center">
                    {bridge.short}
                  </span>
                  <InputGroup>
                    <Button
                      variant="outline-secondary"
                      id={`button-remove-${bridge.id}`}
                      data-bridge={"Count"}
                      onClick={handleBtn}
                    >
                      -
                    </Button>
                    <Form.Control
                      placeholder="0"
                      aria-label="Username"
                      type="number"
                      name="setVehicles"
                      // value={count}
                      aria-describedby="basic-vehiclesCounter"
                      onChange={handleBtn}
                    />
                    <Button
                      variant="outline-secondary"
                      id={`button-add-${bridge.idx}`}
                      data-vehicles={handleBtn + "Count"}
                      onClick={handleBtn}
                    >
                      +
                    </Button>
                    <Form.Control
                      placeholder="0"
                      aria-label="Username"
                      type="number"
                      name={"Price"}
                      value={1}
                      aria-describedby="basic-vehiclesPrice"
                      onChange={1}
                    />
                  </InputGroup>
                </div>
                {/* <div className="d-flex justify-content-between">
                  <span>${bridge.short}</span>
                  <span>${bridge.price} ₽</span>
                </div>
                <div class="input-group mb-3">
                  <button
                    class="btn btn-outline-secondary w-auto"
                    type="button"
                    data-countRemove={idx}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    class="form-control"
                    id="${id}"
                    data-countInp="${id}"
                    value="${bridge.count}"
                    aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                  />
                  <button
                    class="btn btn-outline-secondary w-auto"
                    type="button"
                    data-countAdd="${id}"
                  >
                    +
                  </button>
                </div> */}
              </>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBridge;
