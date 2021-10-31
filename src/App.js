import React, { useEffect, useState } from "react";
import CriterionFilter from "../src/components/CriterionFilter/CriterionFilter";
import FilteredTickets from "./components/FilteredTickets/FilteredTickets";
import Logo from "../src/img/Logo.png";
import Spinner from "../src/components/Spinner/Spinner";
import { getSearchId, loadAviaTickets } from "../src/api/index";
import RouteSwitches from "./components/RouteSwitches/RouteSwitches";

const App = () => {
  const [sortCriterion, setCriterion] = useState("cheapest");
  const routeSwitches =  [
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 пересадки",
  ]
  const [currentRouteSwitches, setCurrentRouteSwitches] = useState([
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
  ]);
  const [unsortedTickets, setTickets] = useState([]);

  useEffect(() => {
    getSearchId().then((data) => {
      const searchId = data.searchId;
      loadAviaTickets(searchId).then((data) => {
        setTickets(data.tickets);
      });
    });
  }, []);

  return (
    <>
      <div className="header__logo">
        <img src={Logo} alt={"skyori logo"}></img>
      </div>

      <div className="filtered__tickets__wrapper">
        <RouteSwitches
          routeSwitches={routeSwitches}
          setSwitches={setCurrentRouteSwitches}
        ></RouteSwitches>
        <div>
          <CriterionFilter
            sortCriterion={sortCriterion}
            setCriterion={setCriterion}
          ></CriterionFilter>
          {unsortedTickets.length !== 0 ? (
            <FilteredTickets
              routeSwitches={currentRouteSwitches}
              unsortedTickets={unsortedTickets}
              sortCriterion={sortCriterion}
            ></FilteredTickets>
          ) : (
            <Spinner></Spinner>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
