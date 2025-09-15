import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Qualification from "./components/qualification/Qualification";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
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
     <Testimonials />
     <div id="test" style={{height: "300px"}}></div>
     </main>
     {/* 

     <section className="services section" id="services">
  <h2 className="section__title">Services</h2>
  <span className="section__subtitle">What I Offer</span>

  <div className="services__container container grid">
    <div className="services__content">
      <div>
        <i className="uil uil-browser services__icon"></i>
        <h3 className="services__title">Landing Page <br /> Development</h3>
      </div>

      <span className="services__button " onClick={() => toggleTab(1)}>
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
        <div className="services__modal-content">
          <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

          <h3 className="services__modal-title">Landing Page Development</h3>
          <p className="services__modal-description">
            I design and build responsive landing pages that are fast,
            modern, and optimized for conversion.
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Create responsive landing pages with React or plain HTML/CSS.
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Optimize SEO and performance for better reach.
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Deploy projects to Netlify, Vercel, or custom servers.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="services__content">
      <div>
        <i className="uil uil-server services__icon"></i>
        <h3 className="services__title">API <br /> Development</h3>
      </div>

      <span className="services__button" onClick={() => toggleTab(2)}>
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
        <div className="services__modal-content">
          <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

          <h3 className="services__modal-title">API Development</h3>
          <p className="services__modal-description">
            I develop secure and scalable REST APIs for various applications.
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Build REST APIs using Golang (Fiber) or Node.js (Express).
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Design and manage databases with PostgreSQL or MySQL.
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Secure APIs with JWT authentication and role-based access.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="services__content">
      <div>
        <i className="uil uil-react services__icon"></i>
        <h3 className="services__title">API Integration <br /> with React</h3>
      </div>

      <span className="services__button" onClick={() => toggleTab(3)}>
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
        <div className="services__modal-content">
          <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

          <h3 className="services__modal-title">API Integration with React</h3>
          <p className="services__modal-description">
            I help connect APIs with frontend applications built in React.
          </p>

          <ul className="services__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Fetch and display data from REST APIs using Axios or Fetch API.
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Implement authentication flow with JWT or OAuth.
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Build reusable components to manage API responses (loading, error, success).
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

     
     */}
    </div>

    
  );
}

export default App;


