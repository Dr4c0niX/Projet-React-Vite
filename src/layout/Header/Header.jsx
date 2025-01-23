import "./header.scss";
import { Link } from "react-router";
import { useAuth } from "../../auth/AuthProvider";

export default function Header() {
    const { user } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/apodlist" className="nav-link">
                            Articlesss
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                        {user ? (
                            <Link to="/loginout-page" className="nav-link">
                                {user.username}
                            </Link>
                        ) : (
                            <Link to="/loginout-page" className="nav-link">
                                Connexion
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}