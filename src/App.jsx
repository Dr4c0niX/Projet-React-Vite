import Router from "./routes/Router";
import "./App.css";

import { AuthProvider } from "./auth/AuthProvider";

export default function App() {
  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="galaxy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}