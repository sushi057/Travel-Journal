import React from "react";

export default function Card(props) {
  return (
    <div className="main-card">
      <img src={props.item.imageUrl} alt="location" />
      <div className="main-details">
        {/* <img src={} alt='landmark' /> */}
        <p>{props.item.location}</p>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        <h2>{props.itetitle}</h2>
        <p>{props.item.startDate}</p>
        <p>{props.item.endDate}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
