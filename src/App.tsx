import "./App.css";
import Header from "./components/header/Header";
import Home from "./home/Home";
import TestNotif from "./UseWebSocket";


export function App() {
  return (
    <div className="app">
      {/* <TestNotif /> */}
     <Header />
     <main className="main">
     <Home />
     </main>
    </div>
  );
}

export default App;
