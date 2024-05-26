import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import RenderRoutes from "./components/RenderRoutes";
import AuthProvider from "./context/AuthProvider";
import LocationProvider from "./context/LocationProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <LocationProvider>
          <Header className="header" />
          <div className="center">
            <Navigation className="navigation" />
            <RenderRoutes className="main" />
          </div>
        </LocationProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
