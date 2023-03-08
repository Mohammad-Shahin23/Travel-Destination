
// import './Home.css';
import Welcom from "../header/ Header";
import Footer from "../footer/Footer";
import Target from "../tours/Tours";
const data = require ("../../data/ db.json");


function Home() {
  return (
    <>
      <Welcom />
     
      <Target arryData={data}/>

      <Footer/>
      
    </>
  );
}

export default Home;