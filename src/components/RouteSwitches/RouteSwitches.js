import React, { useState } from "react";

const RouteSwitches = (props) => {
  const switches = props.routeSwitches;
  const [currentSwitches, setCurrentSwitches] = useState([
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
  ]);
  const handleSubmit = () => {};

  const handleChange = (e) => {
    if (currentSwitches.includes(e.target.nextSibling.nextSibling.innerText)) {
      let newSwitches = currentSwitches.filter(
        (item) => item !== e.target.nextSibling.nextSibling.innerText
      );
      setCurrentSwitches(newSwitches);
      props.setSwitches(newSwitches);
    } else {
      let newSwitches = currentSwitches;
      newSwitches.push(e.target.nextSibling.nextSibling.innerText);
      props.setSwitches([...newSwitches]);
    }
  };
  const handleSetAll = (e) => {
    if (currentSwitches.length !== 4) {
      setCurrentSwitches([
        "Без пересадок",
        "1 пересадка",
        "2 пересадки",
        "3 пересадки",
      ]);
      props.setSwitches([
        "Без пересадок",
        "1 пересадка",
        "2 пересадки",
        "3 пересадки",
      ]);
    } else {
      setCurrentSwitches([]);
      props.setSwitches([]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={"route__switches"}>
        <span className={"route__switches__title"}>количество пересадок</span>
        <label class="control control-checkbox">
          <input
            checked={currentSwitches.length === 4 ? true : false}
            onChange={handleSetAll}
            type={"checkbox"}
          ></input>
          <div class="control_indicator"></div>
          <span>Все</span>
        </label>

        {switches.map((item, index) => {
          return (
            <div key={index}>
              <label class="control control-checkbox">
                <input
                  onChange={handleChange}
                  checked={currentSwitches.includes(item)}
                  type={"checkbox"}
                ></input>
                <div class="control_indicator"></div>
                <span>{item}</span>
              </label>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default RouteSwitches;
