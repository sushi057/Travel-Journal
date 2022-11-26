import "../styles/card.css";

export default function Card(props) {
  return (
    <div className="main-card">
      <img className="main-location" src={props.item.imageUrl} alt="location" />
      <div className="main-details">
        <p className="main-top">
          <img className="landmark" src="/images/landmark.png" alt="landmark" />
          <span className="main-place">{props.item.location}</span>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </p>

        <h2>{props.item.title}</h2>
        <p className="main-date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="main-description">{props.item.description}</p>
      </div>
    </div>
  );
}
