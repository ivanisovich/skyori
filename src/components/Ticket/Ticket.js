import React from "react";

const Ticket = (props) => {
  const data = props.data;

  const price = () => {
    console.log(data.price.toString()[data.price.toString().length - 3]);
    return data.price
      .toString()
      .replace(
        data.price.toString()[data.price.toString().length - 4],
        data.price.toString()[data.price.toString().length - 4] + " "
      );
  };
  const travelTimeHours = (index) => {
    return Math.floor(data.segments[index].duration / 60);
  };
  const travelTimeMinutes = (index) => {
    return data.segments[index].duration % 60;
  };
  const travelDepartureTime = (index) => {
    let time = data.segments[index].date.split("T")[1].split(":00.000Z")[0];

    return time;
  };
  const stops = (index) => {
    return data.segments[index].stops;
  };
  const switchRoute = (array) => {
    const expr = array.length;
    switch (expr) {
      case 0:
        return "пересадок";
      case 1:
        return "пересадка";
      default:
        return "пересадки";
    }
  };
  return (
    <>
      <div className="ticket">
        <div className="ticket__carrier">
          <span className="ticket__price">{price()} Р </span>
          <img
            alt={"carrier logo"}
            src={`${"http://pics.avs.io/99/36/" + data.carrier + ".png"}`}
          ></img>
        </div>
        <div className="ticket__trip">
          <ul className="ticket__trip-chedule">
            <span className="ticket__trip-routes">
              {data.segments[0].origin}-{data.segments[0].destination}
            </span>
            <span className="ticket__trip-date">{travelDepartureTime(0)}</span>
            <span className="ticket__ticket-routes">
              {data.segments[1].origin}-{data.segments[1].destination}
            </span>
            <span className="ticket__trip-date">{travelDepartureTime(1)}</span>
          </ul>
          <ul className="ticket__trip-duration">
            <span>в пути</span>
            <span>
              {travelTimeHours(0)}ч {travelTimeMinutes(0)}м
            </span>
            <span>в пути</span>
            <span>
              {travelTimeHours(1)}ч {travelTimeMinutes(1)}м
            </span>
          </ul>
          <ul className="ticket__trip-stops">
            <span className="ticket__trip-stops__count">
              {stops(0).length} {switchRoute(stops(0))}
            </span>
            <span className="ticket__trip-stops__routes">
              {stops(0).join().replace(",", ", ")}
            </span>
            <span className="ticket__trip-stops__count">
              {stops(1).length} {switchRoute(stops(1))}{" "}
            </span>
            <span className="ticket__trip-stops__routes">
              {stops(1).join().replace(",", ", ")}
            </span>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Ticket;
