import "../css/fontawesome.css"
import "../css/templatemo-cyborg-gaming.css"
import "../css/owl.css"
import "../css/animate.css"
import 'swiper/css'
//import "../js/custom.js"
//import "../js/isotope.js"
import logo from "../images/logo.png"
import NavBar1 from "../components/NavBar1"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { toast } from "react-toastify";


import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import axios from "axios"






function Mod ()
{


const [fname,setFname] = useState("");
const [email,setEmail] = useState("");
const [bgame,setBgame] = useState("");
const [mod,setMod] = useState("");
const [issue,setIssue] = useState("");


async function submitReport(e)
{
  e.preventDefault();

  const response = await axios.post("http://localhost:8080/api/reports/submit",{fname:fname, mail:email, modName:mod, baseGame:bgame, issue:issue})

  if(response.data === "ReportSubmit")
  {
    toast.success("Successfully Reported!")

    setBgame("")
    setEmail("")
    setFname("")
    setIssue("")
    setMod("")

  } else 
  {
    toast.error("Something went wrong!");
  }

}
 

 


 return (
    <div className="bodyy">
        <script src="../js/popup.js"></script>
        <script src="../js/tabs.js"></script>
        <script src="../js/isotope.min.js"></script>
        <script src="../js/owl-carousel.js"></script>
        <script src="../js/custom.js"></script>
        <script src="../js/isotope.js"></script>
        <script src="../vendor/jquery/jquery.min.js"></script>
        <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>


   
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>



     

     
      <NavBar1/>         
        

       <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
            {/* ***** Featured Start ***** */}
            <div className="row">
              <div className="col-lg-12">
                <div className="feature-banner header-text">
                  <div className="row">
                    <div className="col-lg-4">
                      <img
                        src="/assets/images/feature-left.jpg"
                        alt="Feature left"
                        style={{ borderRadius: 23 }}
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="thumb">
                        <img
                          src="/assets/images/feature-right.jpg"
                          alt="Feature right"
                          style={{ borderRadius: 23 }}
                        />
                        <a
                          href="https://www.youtube.com/watch?v=r1b03uKWk_M"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-play" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ***** Featured End ***** */}

            {/* ***** Details Start ***** */}
            <div className="game-details">
              <div className="row">
                <div className="col-lg-12" style={{color:"white"}}>
                  <h2>GTA 6</h2>
                </div>
                <div className="col-lg-12">
                  <div className="content">
                    <div className="row">
                      <div className="col-lg-3">
                        
                      
                      </div>
                      <div className="col-lg-6">
                        <div className="right-info">
                          <ul>
                            <li>
                              <i className="fa fa-star" /> 4.8
                            </li>
                            <li>
                              <i className="fa fa-download" /> 2.3M
                            </li>

                            <li>
                              <i className="fa fa-gamepad" /> Action
                            </li>
                             <li>
                              <i className="fa fa-server" /> 23/22/2025
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        
                      
                      </div>

                      <div className="col-lg-4">
                        <img
                          src="/assets/images/details-01.jpg"
                          alt="Screenshot 1"
                          style={{ borderRadius: 23, marginBottom: 30 }}
                        />
                      </div>
                      <div className="col-lg-4">
                        <img
                          src="/assets/images/details-02.jpg"
                          alt="Screenshot 2"
                          style={{ borderRadius: 23, marginBottom: 30 }}
                        />
                      </div>
                      <div className="col-lg-4">
                        <img
                          src="/assets/images/details-03.jpg"
                          alt="Screenshot 3"
                          style={{ borderRadius: 23, marginBottom: 30 }}
                        />
                      </div>
                      <div className="col-lg-3">
                        <img
                          src="/assets/images/details-03.jpg"
                          alt="Screenshot 3"
                          style={{ borderRadius: 23, marginBottom: 30 }}
                        />
                      </div>

                      <div className="col-lg-12">
                        <p>
                         Grand Theft Auto VI (GTA 6) is one of the most anticipated video game releases of the decade. Rockstar Games, the studio behind the legendary Grand Theft Auto series, has promised to push the boundaries of open-world design, storytelling, and next-generation gameplay. Following the massive success of GTA V, which has sold over 190 million copies worldwide, expectations for GTA 6 are higher than ever.GTA 6 takes players back to Vice City, Rockstar’s fictional version of Miami. Unlike the neon-soaked city of the early 2000s featured in Grand Theft Auto: Vice City, this new world is a sprawling, hyper-detailed reimagining of Miami and its surrounding regions. Leaks and official trailers suggest that GTA 6 will feature not only an urban cityscape but also swamps, beaches, and rural areas, giving players a diverse environment to explore. The scale of the map is expected to surpass anything Rockstar has created before, with new AI systems, advanced NPC behaviors, and dynamic weather enhancing immersion.
                        </p>
                      </div>

                     <center> <div className="col-lg-6">
                        <div className="main-border-button">
                          <a href="#">Explore Mods</a>
                        </div>
                      </div>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ***** Details End ***** */}

            {/* ***** Other Start ***** */}
            <div className="other-games">
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                       Most Downloaded Mods
                    </h4>
                  </div>
                </div>

                {[
                  "/assets/images/game-01.jpg",
                  "/assets/images/game-02.jpg",
                  "/assets/images/game-03.jpg",
                  "/assets/images/game-02.jpg",
                  "/assets/images/game-03.jpg",
                  "/assets/images/game-01.jpg",
                ].map((src, i) => (
                  <div className="col-lg-6" key={i}>
                    <div className="item">
                      <img src={src} alt="Game" className="templatemo-item" />
                      <h4>Dota 2</h4>
                      <span>Sandbox</span>
                      <ul>
                        <li>
                          <i className="fa fa-star" /> 4.8
                        </li>
                        <li>
                          <i className="fa fa-download" /> 2.3M
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* ***** Other End ***** */}
          </div>
        </div>
      </div>
    </div>
    <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2025 <a href="">Safe Mods 99</a>. All rights reserved.
               
              </p>
            </div>
          </div>
        </div>
      </footer>
</div>

)

} 
export default Mod