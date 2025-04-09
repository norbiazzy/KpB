import React, { useEffect } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import ModalBridge from "../ModalBridge";
import { b20, b25, b35, b50, D400, D600 } from "../../files/const";

function CalcBtns({ handle, data = [], name, curParam, i = 0, disabled = [] }) {
  return (
    <ButtonGroup className="w-100">
      {data.map((value, idx) => {
        if (i === 3 && idx === 2) return <ModalBridge />;
        return (
          <ToggleButton
            key={idx}
            id={name + "r" + idx + i}
            type="radio"
            variant="primary"
            name={name}
            value={value}
            checked={curParam === value}
            onChange={handle}
            disabled={disabled.length > 0 ? disabled[idx] : false}
            // style={{ borderRadius: "12px", border: "2px solid" }}
          >
            {value}
          </ToggleButton>
        );
      })}
    </ButtonGroup>
  );
}

export default CalcBtns;
