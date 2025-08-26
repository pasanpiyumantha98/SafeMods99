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






function Mods ()
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
                   <h4>Search Mods </h4>
                   </div>
                  
                  {/* ***** Filter Dropdown Start ***** */}
                  <div className="dropdown" >
                    <button
                      className="btn btn-danger dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{background:"black"}}
                    >
                      {filter}
                    </button>
                    <ul className="dropdown-menu">
                      <li><button className="dropdown-item" type="button" value="Recently Added" onClick={e => setFilter(e.target.value)}>Recently Added</button></li>
                      <li><button className="dropdown-item" type="button" value="Most Downloads" onClick={e => setFilter(e.target.value)}>Most Downloads</button></li>
                      <li><button className="dropdown-item" type="button" value="Editor's Choice" onClick={e =>setFilter(e.target.value)}>Editor's Choice</button></li>
                    </ul>
                  </div>
                  {/* ***** Filter Dropdown End ***** */}

                   </div>

                   <div className="row">
                      <div className="col-lg-3 col-sm-6">
                        <div className="item">
                          <img src="assets/images/popular-01.jpg" alt="" />
                          <h4>
                            Fortnite<br /><span>Sandbox</span>
                          </h4>
                          <ul>
                            <li><i className="fa fa-star"></i> 4.8</li>
                            <li><i className="fa fa-download"></i> 2.3M</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="item">
                          <img src="assets/images/popular-02.jpg" alt="" />
                          <h4>
                            PubG<br /><span>Battle S</span>
                          </h4>
                          <ul>
                            <li><i className="fa fa-star"></i> 4.8</li>
                            <li><i className="fa fa-download"></i> 2.3M</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="item">
                          <img src="assets/images/popular-03.jpg" alt="" />
                          <h4>
                            Dota2<br /><span>Steam-X</span>
                          </h4>
                          <ul>
                            <li><i className="fa fa-star"></i> 4.8</li>
                            <li><i className="fa fa-download"></i> 2.3M</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="item">
                          <img src="assets/images/popular-04.jpg" alt="" />
                          <h4>
                            CS-GO<br /><span>Legendary</span>
                          </h4>
                          <ul>
                            <li><i className="fa fa-star"></i> 4.8</li>
                            <li><i className="fa fa-download"></i> 2.3M</li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="item">
                          <div className="row">
                            <div className="col-lg-6 col-sm-6">
                              <div className="item inner-item">
                                <img src="assets/images/popular-05.jpg" alt="" />
                                <h4>
                                  Mini Craft<br /><span>Legendary</span>
                                </h4>
                                <ul>
                                  <li><i className="fa fa-star"></i> 4.8</li>
                                  <li><i className="fa fa-download"></i> 2.3M</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                              <div className="item">
                                <img src="assets/images/popular-06.jpg" alt="" />
                                <h4>
                                  Eagles Fly<br /><span>Matrix Games</span>
                                </h4>
                                <ul>
                                  <li><i className="fa fa-star"></i> 4.8</li>
                                  <li><i className="fa fa-download"></i> 2.3M</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-3 col-sm-6">
                        <div className="item">
                          <img src="assets/images/popular-07.jpg" alt="" />
                          <h4>
                            Warface<br /><span>Max 3D</span>
                          </h4>
                          <ul>
                            <li><i className="fa fa-star"></i> 4.8</li>
                            <li><i className="fa fa-download"></i> 2.3M</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="item">
                          <img src="assets/images/popular-08.jpg" alt="" />
                          <h4>
                            Warcraft<br /><span>Legend</span>
                          </h4>
                          <ul>
                            <li><i className="fa fa-star"></i> 4.8</li>
                            <li><i className="fa fa-download"></i> 2.3M</li>
                          </ul>
                        </div>
                      </div>

                      

                      <div className="col-lg-12">
                        <div className="main-button">
                          <a href="browse.html">Next ></a>
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
export default Mods