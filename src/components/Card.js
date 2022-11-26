import React from "react";

export default function Card(props) {
  return (
    <div className="main-card">
      <img src={props.item.imageUrl} alt="location" />
      <div className="main-details">
        <p>
          <img src="/images/landmark.png" alt="landmark" />
          {props.item.location}{" "}
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </p>

        <h2>{props.item.title}</h2>
        <p>
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
