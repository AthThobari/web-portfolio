import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Home from "./home/Home";

import TestNotif from "./UseWebSocket";


export function App() {
  return (
    <div className="app">
      {/* <TestNotif /> */}
     <Header />
     <main className="main">
     <Home />
     <About />
     <Skills />
     <Services />
     <Qualification />
     <div id="test" style={{height: "300px"}}></div>
     </main>
    </div>
  );
}

export default App;
