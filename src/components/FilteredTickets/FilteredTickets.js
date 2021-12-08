import React, { useEffect, useState } from "react";
import Ticket from "../Ticket/Ticket";

const FilteredTickets = (props) => {
  const unsortedTickets = props.unsortedTickets;
  const [filteredTickets, setFilteredTickets] = useState([]);
  const routeSwitches = props.routeSwitches;
  const findCheapestTickets = () => {
    return unsortedTickets.sort((a, b) => a.price - b.price);
  };

  const findFastestTickets = () => {
    return unsortedTickets.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
    );
  };
  const findExactRouteSwitches = (number) => {
    setFilteredTickets(
      unsortedTickets
        .filter(
          (item) =>
            item.segments[0].stops.length <= number &&
            item.segments[1].stops.length <= number
        )
        .slice(0, 5)
    );
  };
  const checkSortCryterion = () => {
    if (props.sortCriterion === "cheapest") {
      setFilteredTickets(findCheapestTickets().slice(0, 5));
    }
    if (props.sortCriterion === "fastest") {
      setFilteredTickets(findFastestTickets().slice(0, 5));
    }
  };

  useEffect(() => {
    checkSortCryterion();
    if (routeSwitches.includes("3 пересадки")) {
      findExactRouteSwitches(3);
    } else if (routeSwitches.includes("2 пересадки")) {
      findExactRouteSwitches(2);
    } else if (routeSwitches.includes("1 пересадка")) {
      findExactRouteSwitches(1);
    } else if (routeSwitches.includes("Без пересадок")) {
      findExactRouteSwitches(0);
    } else {
      checkSortCryterion();
    }
  });

  return (
    <>
      <ul className="filtered-tickets">
        {filteredTickets.map((item, index) => {
          return <Ticket data={item} key={index}></Ticket>;
        })}
      </ul>
    </>
  );
};

export default FilteredTickets;
