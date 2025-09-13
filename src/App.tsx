import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
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
     <div id="test"></div>
     </main>
    </div>
  );
}

export default App;
