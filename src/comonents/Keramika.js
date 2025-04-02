import React, { useState } from "react";
import { GJEL, POROTERM, sizes } from "../files/const";


function Keramika(params) {

  const [factory, setFactory] = useState(GJEL)
  const [size, setSize] = useState(38)
  const [formData, setFormData] = useState({

  })

  const handleBtn = (e) => {
    const { dataset, value } = e.target;
    if (dataset.type === "factory") setFactory(value);
    if (dataset.type === "size") setSize(value);
    calcStep();
  };
  const calcStep = () => {

  }

  return <div>
    <div>
      <button data-type="factory" value={GJEL} onClick={handleBtn}>Гжель</button>
      <button data-type="factory" value={POROTERM} onClick={handleBtn}>Поротерм</button>
    </div>
    <div>
      <button data-type="size" value={'51'} onClick={handleBtn}>51</button>
      <button data-type="size" value={'44'} onClick={handleBtn}>44</button>
      <button data-type="size" value={'38t'} onClick={handleBtn}>38т</button>
      <button data-type="size" value={'38'} onClick={handleBtn}>38</button>
      <button data-type="size" value={'25'} onClick={handleBtn}>25</button>
      <button data-type="size" value={'20'} onClick={handleBtn}>20</button>
      <button data-type="size" value={'12'} onClick={handleBtn}>12</button>
      <button data-type="size" value={'8'} onClick={handleBtn}>8</button>
      <button data-type="size" value={'1.2'} onClick={handleBtn}>1.2</button>
    </div>
  </div>;
}

export default Keramika;
