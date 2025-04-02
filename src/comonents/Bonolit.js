import React from "react";
import { Col, Row } from "react-bootstrap";

function Bonolit(params) {
  const {
    handleBtn,
    density,
    SK,
    DZGI,
    MY,
    D400,
    D500,
    D600,
    b20,
    b25,
    b35,
    b50,
  } = params;

  return (
    <>
      <Row>
        <Col>
          <button data-type="density" value={D400} onClick={handleBtn}>
            D400
          </button>
        </Col>
        <Col>
          <button data-type="density" value={D500} onClick={handleBtn}>
            D500
          </button>
        </Col>
        <Col>
          <button data-type="density" value={D600} onClick={handleBtn}>
            D600
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-type="length" value="500" onClick={handleBtn}>
            500
          </button>
        </Col>
        <Col>
          <button data-type="length" value="600" onClick={handleBtn}>
            600
          </button>
        </Col>
        <Col>
          <button data-type="length" value="625" onClick={handleBtn}>
            625
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-type="widght" value="400" onClick={handleBtn}>
            400
          </button>
          <button data-type="widght" value="375" onClick={handleBtn}>
            375
          </button>
          <button data-type="widght" value="350" onClick={handleBtn}>
            350
          </button>
          <button data-type="widght" value="300" onClick={handleBtn}>
            300
          </button>
        </Col>
        <Col>
          <button data-type="widght" value="250" onClick={handleBtn}>
            250
          </button>
          <button data-type="widght" value="200" onClick={handleBtn}>
            200
          </button>
        </Col>
        <Col>
          <button data-type="widght" value="150" onClick={handleBtn}>
            150
          </button>
          <button data-type="widght" value="100" onClick={handleBtn}>
            100
          </button>
          <button data-type="widght" value="50" onClick={handleBtn}>
            50
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-type="height" value="250" onClick={handleBtn}>
            250
          </button>
        </Col>
        <Col>
          <button data-type="height" value="200" onClick={handleBtn}>
            200
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button
            data-type="strength"
            value={b20}
            disabled={density === D500 || density === D600}
            onClick={handleBtn}
          >
            b2.0
          </button>
        </Col>
        <Col>
          <button
            data-type="strength"
            value={b25}
            disabled={density === D600}
            onClick={handleBtn}
          >
            b2.5
          </button>
        </Col>
        <Col>
          <button
            data-type="strength"
            value={b35}
            disabled={density === D400}
            onClick={handleBtn}
          >
            b3.5
          </button>
        </Col>
        <Col>
          <button
            data-type="strength"
            value={b50}
            disabled={density === D400 || density === D500}
            onClick={handleBtn}
          >
            b5.0
          </button>
        </Col>
      </Row>
      <Row>
        <Col>
          <button data-type="factory" value={SK} onClick={handleBtn}>
            СК
          </button>
        </Col>
        <Col>
          <button data-type="factory" value={DZGI} onClick={handleBtn}>
            ДЗГИ
          </button>
        </Col>
        <Col>
          <button data-type="factory" value={MY} onClick={handleBtn}>
            МЯ
          </button>
        </Col>
      </Row>
    </>
  );
}

export default Bonolit;
