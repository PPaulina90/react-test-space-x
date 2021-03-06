import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { boolToString } from "../utils";

const Details = ({ details, upcoming, success, name, links }) => {
  const {
    patch: { small },
  } = links;
  const isUpcoming = boolToString(upcoming);
  const wasSuccess = boolToString(success);

  return (
    <div className="card-details">
      <h3>{name}</h3>
      <img src={small} alt={name} />
      {details && <h4>Details: {details}</h4>}
      <h4>Upcoming: {isUpcoming}</h4>
      <h4>Success: {wasSuccess}</h4>
      <Link to="/">
        <Button type="button" title="Go Back" className="btn" />
      </Link>
    </div>
  );
};

export default Details;
