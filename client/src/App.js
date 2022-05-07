import "./App.css";
import Chatcomponent from "./components/Chatcomponent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />

        {/* Chat component */}
        <Chatcomponent />
      </div>
    </div>
  );
}

export default App;
