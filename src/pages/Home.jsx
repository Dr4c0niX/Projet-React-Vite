import { Link } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";

export default function Home() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="home-content card p-4">
                <h1 className="text-center text-white">Bienvenue sur notre site</h1>
                <div className="d-flex gap-3 mt-4 justify-content-center">
                    <Link to="/apodlist">
                        <button className="btn btn-outline-light">Voir les articles</button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn btn-outline-light">Contactez-nous</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}