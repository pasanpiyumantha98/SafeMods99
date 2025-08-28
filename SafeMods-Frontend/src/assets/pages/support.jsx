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


import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"






function SupportPublic ()
{


  const [filter,setFilter] = useState("Recently Added");

 


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
              <div className="most-popular">
                <div className="row">
                  <div className="col-lg-12">

                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                   <div className="heading-section">
                   <h4>Need Support ? </h4>

                   <p style={{color:"white"}}>Need a helping hand? You’ve come to the right place! Our support team is here to listen, guide, and get you back on track. However, if you need immediate help, please contact us on <b>support@safemods99.com </b></p>
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
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Enter your name"
                            />
                          </div>

                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="name@example.com"
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
                            ></textarea>
                          </div>

                          <div className="d-grid">
                            <button type="submit" className="btn btn-danger" style={{backgroundColor:"#ec6090"}}>
                              Submit Request
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
export default SupportPublic