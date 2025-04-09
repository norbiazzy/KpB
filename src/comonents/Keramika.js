import React, { useState } from "react";
import { GJEL, POROTERM, sizes } from "../files/const";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const radiosSize = [
  ["51", "44", "38"],
  ["38т", "25", "20"],
  ["12", "8", "2.1"],
];
const radiosFactory = [
  { val: GJEL, name: "Гжель" },
  { val: POROTERM, name: "Поротерм" },
];

function Keramika(params) {
  const [factory, setFactory] = useState(GJEL);
  const [size, setSize] = useState(38);
  const [formData, setFormData] = useState({});

  const handleBtn = (e) => {
    const { dataset, value } = e.target;
    if (dataset.type === "factory") setFactory(value);
    if (dataset.type === "size") setSize(value);
    calcStep();
  };
  const calcStep = () => {};

  return (
    <div>
      <div>
        <ButtonGroup className="mb-3 w-100">
          {radiosFactory.map((item, idx) => (
            <ToggleButton
              key={idx}
              id={`rf-${idx}`}
              type="radio"
              variant={"primary"}
              name="factory"
              value={item.val}
              checked={factory === item.val}
              onChange={handleBtn}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      <div>
        {radiosSize.map((row, i) => (
          <div>
            <ButtonGroup className="mb-1 w-100">
              {row.map((val, idx) => {
                return (
                  <ToggleButton
                    key={idx}
                    id={`rw${i}-${idx}`}
                    type="radio"
                    variant={"primary"}
                    name="width"
                    value={val}
                    data-type="size"
                    checked={1 === val}
                    onChange={(e) => {
                      handleBtn(e);
                    }}
                  >
                    {val}
                  </ToggleButton>
                );
              })}
            </ButtonGroup>
          </div>
        ))}
        {/* <button data-type="size" value={"51"} onClick={handleBtn}>
          51
        </button>
        <button data-type="size" value={"44"} onClick={handleBtn}>
          44
        </button>
        <button data-type="size" value={"38t"} onClick={handleBtn}>
          38т
        </button>
        <button data-type="size" value={"38"} onClick={handleBtn}>
          38
        </button>
        <button data-type="size" value={"25"} onClick={handleBtn}>
          25
        </button>
        <button data-type="size" value={"20"} onClick={handleBtn}>
          20
        </button>
        <button data-type="size" value={"12"} onClick={handleBtn}>
          12
        </button>
        <button data-type="size" value={"8"} onClick={handleBtn}>
          8
        </button>
        <button data-type="size" value={"1.2"} onClick={handleBtn}>
          1.2
        </button> */}
      </div>
    </div>
  );
}

export default Keramika;
