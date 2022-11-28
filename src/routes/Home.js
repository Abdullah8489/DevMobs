import React from "react";
import Navbar from '../components/Navbar';
import OfficeSection from "../components/OfficeSection";
import Technology from "../components/Technology";
import Why from "../components/Why";
import Services from "../components/Services";
import WorkCard from "../components/WorkCard";
import Cards from "../components/cards";
import Contact from "../components/contact";
const Home = () => {
  return (
    <>
      <Navbar/>
      <OfficeSection text={"Hello World!"} />
      <Technology/>
      <Why/>
      <Services/>

      <div className="workCard">
          <WorkCard/>
      </div>
      
      <div className="member-cards-wrapper">
        <div className="card-content-portion">
          <h2 style={{fontSize: "3rem"}}>Our Members</h2>
        </div>
        <div className="cards-portion">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
      <div className="contact-wrapper">
        <Contact/>
      </div>
      
    </>
  );
};

export default Home;
