import ApiFetch from "../../api/ApiFetch";
import Comments from "../Comments/Comments";
import "./fetchapod.scss";

export default function APODList() {
  return (
    <div>
      <h2 className="page-title">Vous êtes sur la page des photos</h2>
      <ApiFetch>
        {(data) => (
          <div className="apod-list__container">
            {data.map((apod) => (
              <div key={apod.date} className="apod-item">
                <h3>{apod.title}</h3>
                <p>{apod.date}</p>
                <img src={apod.url} alt={apod.title} className="apod-image" />
                <p>{apod.explanation}</p>
                <Comments apodId={apod.date} />
              </div>
            ))}
          </div>
        )}
      </ApiFetch>
    </div>
  );
}