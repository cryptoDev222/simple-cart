import DashBoard from "./dashboard";
import { ItemProvider } from "./context/itemContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ItemProvider>
        <DashBoard />
      </ItemProvider>
    </div>
  );
}

export default App;
