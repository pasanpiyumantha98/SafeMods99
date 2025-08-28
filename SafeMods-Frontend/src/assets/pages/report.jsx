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






function Report ()
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
             

              {/* ***** Most Popular Start ***** */}
              <div className="mainb">
                <div className="row">
                  <div className="col-lg-12">

                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                   <div className="heading-section">
                   <h4>Noticed something suspicious?</h4>

                   <p style={{color:"white"}}>See something that doesn’t feel right? We’ve got your back—report it in just a few clicks. if you need immediate help, please contact us on <b>support@safemods99.com </b></p>
                   </div>
              
                        </div>

                   <div className="row">
                      
                  <div className="container vh-50 d-flex justify-content-center align-items-center">
                  <div className="col-12 col-md-6 col-lg-5">
                   <div className="card shadow-lg p-4 rounded-3">
          

                        <form>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter your name"
                              value={fname}
                              onChange={e => setFname(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="name"
                              placeholder="Enter your name"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Mod Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Enter mod name"
                              value={mod}
                              onChange={e => setMod(e.target.value)}
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Base Game
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Enter base game"
                              value={bgame}
                              onChange={e => setBgame(e.target.value)}
                            />
                          </div>
                          

                          <div className="mb-3">
                            <label htmlFor="issue" className="form-label">
                              Issue
                            </label>
                            <textarea
                              className="form-control"
                              id="issue"
                              rows="4"
                              placeholder="Describe your issue..."
                              value={issue}
                              onChange={e => setIssue(e.target.value)}
                            ></textarea>
                          </div>

                          <div className="d-grid">
                            <button type="submit" className="btn btn-danger" style={{backgroundColor:"#ec6090"}} onClick={submitReport}>
                              Report
                            </button>
                          </div>
                        </form>
                        </div>
                      </div>
                    </div>
                      

                      

                      

                    
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** Most Popular End ***** */}

              
            
                      
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
  );




} 
export default Report