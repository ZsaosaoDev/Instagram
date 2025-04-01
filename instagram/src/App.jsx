import "./App.css";
import AppRoutes from "./router/App.routes.jsx";
import Headers from "./components/header.jsx";
import {Toaster} from 'react-hot-toast'
const App = () => {
  return (
    <div className="app-container">
      <Headers />
      <AppRoutes />
      <Toaster/>
    </div>
  );
};

export default App;
