import './App.css';
import AppRoutes from './router/App.routes.jsx';
import Headers from './components/Header';
const App = () => {

    return (
        <div className="app-container">
            <Headers />
            <AppRoutes />
        </div>
    );
};

export default App;