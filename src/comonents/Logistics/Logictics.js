import React, { useEffect, useState } from "react";
import LogicticCounter from "./LogicticCounter";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

import {
  MY,
  GLORY,
  radioLogisticType,
  radioGloryDistance,
  PRICEGLORY,
} from "../../files/const";

function Logictics(params) {
  const { dataVehicles, setDataVehicles } = params;
  const [typeLogistick, setTypeLogistic] = useState(MY);

  const vehiclesRemove = (e) => {
    let { vehicles } = e.target.dataset;
    let value;
    value = +dataVehicles[vehicles] - 1;
    value = value < 0 ? 0 : value;
    setDataVehicles({ ...dataVehicles, [vehicles]: value });
  };

  const vehiclesAdd = (e) => {
    let { vehicles } = e.target.dataset;
    let value = +dataVehicles[vehicles] + 1;
    setDataVehicles({ ...dataVehicles, [vehicles]: value });
  };
  const setVehiclesCount = (value, vehicles) => {
    setDataVehicles({ ...dataVehicles, [vehicles + "Count"]: value });
  };
  const setViclesPrice = (e) => {
    let { name, value } = e.target;
    setDataVehicles({
      ...dataVehicles,
      [name]: value,
    });
  };

  const setGloryPrice = (e) => {
    let d = e ? e.target.value : dataVehicles.distance;
    let tp = dataVehicles.typePrice;
    setDataVehicles({
      ...dataVehicles,
      truckPrice: PRICEGLORY.truck[tp][d],
      manipulatorPrice: PRICEGLORY.manipulator[tp][d],
      hitchPrice: PRICEGLORY.hitch[tp][d],
      distance: d,
    });
  };
  const setGloryTypePrice = (e) => {
    setDataVehicles({
      ...dataVehicles,
      typePrice: e.target.value,
    });
  };
  const setGloryPriceZero = (e) => {
    let d = e ? e.target.value : dataVehicles.distance;
    setDataVehicles({
      ...dataVehicles,
      truckPrice: 0,
      manipulatorPrice: 0,
      hitchPrice: 0,
      distance: d,
    });
  };
  useEffect(() => {
    setGloryPrice();
    return;
  }, [dataVehicles.typePrice]);

  return (
    <div className="mb-2">
      <div>
        <ButtonGroup className="mb-2 w-100">
          {radioLogisticType.map((item, idx) => (
            <ToggleButton
              key={idx}
              id={`rtl-${idx}`}
              type="radio"
              variant={"primary"}
              name="logisticType"
              value={item.val}
              checked={typeLogistick === item.val}
              onChange={(e) => {
                setTypeLogistic(item.val);
                if (item.val === "GLORY") setGloryPrice();
                else setGloryPriceZero();
              }}
            >
              {item.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
      {typeLogistick === GLORY ? (
        <div>
          <ButtonGroup className="mb-2 w-100">
            {radioGloryDistance.map((item, idx) => (
              <ToggleButton
                key={idx}
                id={`rgd-${idx}`}
                type="radio"
                variant={"primary"}
                name="gloryDistance"
                value={item.distance}
                checked={dataVehicles.distance === item.distance}
                onChange={setGloryPrice}
              >
                {item.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <ButtonGroup className="mb-2 w-100">
            <ToggleButton
              id={`gloryTypePrice-${1}`}
              type="radio"
              variant={"primary"}
              name="gloryTypePrice"
              value="nal"
              checked={dataVehicles.typePrice === "nal"}
              onChange={setGloryTypePrice}
            >
              НАЛ
            </ToggleButton>
            <ToggleButton
              id={`gloryTypePrice-${2}`}
              type="radio"
              variant={"primary"}
              name="gloryTypePrice"
              value="nds"
              checked={dataVehicles.typePrice === "nds"}
              onChange={setGloryTypePrice}
            >
              НДС
            </ToggleButton>
          </ButtonGroup>
        </div>
      ) : (
        ""
      )}

      <LogicticCounter
        vehicles={"truck"}
        count={dataVehicles.truckCount}
        price={dataVehicles.truckPrice}
        vehiclesAdd={vehiclesAdd}
        vehiclesRemove={vehiclesRemove}
        setViclesPrice={setViclesPrice}
        setVehiclesCount={setVehiclesCount}
        text="Фура"
      />
      <LogicticCounter
        vehicles={"manipulator"}
        count={dataVehicles.manipulatorCount}
        price={dataVehicles.manipulatorPrice}
        vehiclesAdd={vehiclesAdd}
        vehiclesRemove={vehiclesRemove}
        setViclesPrice={setViclesPrice}
        setVehiclesCount={setVehiclesCount}
        text="Маник"
      />
      <LogicticCounter
        vehicles={"hitch"}
        count={dataVehicles.hitchCount}
        price={dataVehicles.hitchPrice}
        vehiclesAdd={vehiclesAdd}
        vehiclesRemove={vehiclesRemove}
        setViclesPrice={setViclesPrice}
        setVehiclesCount={setVehiclesCount}
        text="Сцепка"
      />
      <LogicticCounter
        vehicles={"unloading"}
        count={dataVehicles.unloadingCount}
        price={dataVehicles.unloadingPrice}
        vehiclesAdd={vehiclesAdd}
        vehiclesRemove={vehiclesRemove}
        setViclesPrice={setViclesPrice}
        setVehiclesCount={setVehiclesCount}
        text="Разгрузка"
      />
    </div>
  );
}

export default Logictics;
