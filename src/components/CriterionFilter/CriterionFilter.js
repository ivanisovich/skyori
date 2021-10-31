import React from "react";

const CriterionFilter = (props) => {
  const handleCheapest = () => {
    props.setCriterion("cheapest");
  };
  const handleFastest = () => {
    props.setCriterion("fastest");
  };
  return (
    <>
      <ul className={"filter"}>
        <li
          className={
            props.sortCriterion === "cheapest"
              ? "active filter__criterion"
              : " filter__criterion"
          }
          onClick={handleCheapest}
        >
          самый дешевый
        </li>
        <li
          className={
            props.sortCriterion === "fastest"
              ? "active filter__criterion"
              : " filter__criterion"
          }
          onClick={handleFastest}
        >
          самый быстрый
        </li>
      </ul>
    </>
  );
};

export default CriterionFilter;
