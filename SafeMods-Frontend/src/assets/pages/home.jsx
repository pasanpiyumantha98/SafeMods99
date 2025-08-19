import "../css/fontawesome.css"
import "../css/templatemo-cyborg-gaming.css"
import "../css/owl.css"
import "../css/animate.css"
import "https://unpkg.com/swiper@7/swiper-bundle.min.css"
import "../js/custom.js"
import "../js/isotope.js"
import "../js/isotope.min.js"
import "../js/owl-carousel.js"
import "../js/popup.js"
import "../js/tabs.js"
import 'bootstrap/dist/css/bootstrap.min.css';






function Home ()
{

 return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

      {/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src="assets/images/logo.png" alt="" />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Search End ***** */}
                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>
                {/* ***** Search End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li>
                    <a href="index.html" className="active">Home</a>
                  </li>
                  <li><a href="browse.html">Browse</a></li>
                  <li><a href="details.html">Details</a></li>
                  <li><a href="streams.html">Streams</a></li>
                  <li>
                    <a href="profile.html">
                      Profile <img src="assets/images/profile-header.jpg" alt="" />
                    </a>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              {/* ***** Banner Start ***** */}
              <div className="main-banner">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                      <h6>Welcome To Cyborg</h6>
                      <h4>
                        <em>Browse</em> Our Popular Games Here
                      </h4>
                      <div className="main-button">
                        <a href="browse.html">Browse Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** Banner End ***** */}

              {/* ***** Most Popular Start ***** */}
              <div className="most-popular">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4>
                        <em>Most Popular</em> Right Now
                      </h4>
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
                          <a href="browse.html">Discover Popular</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ***** Most Popular End ***** */}

              {/* ***** Gaming Library Start ***** */}
              <div className="gaming-library">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4>
                      <em>Your Gaming</em> Library
                    </h4>
                  </div>
                  <div className="item">
                    <ul>
                      <li>
                        <img src="assets/images/game-01.jpg" alt="" className="templatemo-item" />
                      </li>
                      <li>
                        <h4>Dota 2</h4><span>Sandbox</span>
                      </li>
                      <li>
                        <h4>Date Added</h4><span>24/08/2036</span>
                      </li>
                      <li>
                        <h4>Hours Played</h4><span>634 H 22 Mins</span>
                      </li>
                      <li>
                        <h4>Currently</h4><span>Downloaded</span>
                      </li>
                      <li>
                        <div className="main-border-button border-no-active">
                          <a href="#">Donwloaded</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li>
                        <img src="assets/images/game-02.jpg" alt="" className="templatemo-item" />
                      </li>
                      <li>
                        <h4>Fortnite</h4><span>Sandbox</span>
                      </li>
                      <li>
                        <h4>Date Added</h4><span>22/06/2036</span>
                      </li>
                      <li>
                        <h4>Hours Played</h4><span>740 H 52 Mins</span>
                      </li>
                      <li>
                        <h4>Currently</h4><span>Downloaded</span>
                      </li>
                      <li>
                        <div className="main-border-button">
                          <a href="#">Donwload</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="item last-item">
                    <ul>
                      <li>
                        <img src="assets/images/game-03.jpg" alt="" className="templatemo-item" />
                      </li>
                      <li>
                        <h4>CS-GO</h4><span>Sandbox</span>
                      </li>
                      <li>
                        <h4>Date Added</h4><span>21/04/2036</span>
                      </li>
                      <li>
                        <h4>Hours Played</h4><span>892 H 14 Mins</span>
                      </li>
                      <li>
                        <h4>Currently</h4><span>Downloaded</span>
                      </li>
                      <li>
                        <div className="main-border-button border-no-active">
                          <a href="#">Donwloaded</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="profile.html">View Your Library</a>
                  </div>
                </div>
              </div>
              {/* ***** Gaming Library End ***** */}
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2036 <a href="#">Cyborg Gaming</a> Company. All rights reserved.
                <br />
                Design:{" "}
                <a
                  href="https://templatemo.com"
                  target="_blank"
                  rel="noreferrer"
                  title="free CSS templates"
                >
                  TemplateMo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );




} 
export default Home