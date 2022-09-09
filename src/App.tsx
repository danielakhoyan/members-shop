import "./App.css";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";
import MainRoutes from "./routes/MainRoutes";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
