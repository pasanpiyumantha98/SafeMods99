import "../css/fontawesome.css"
import "../css/templatemo-cyborg-gaming.css"
import "../css/owl.css"
import "../css/animate.css"
import 'swiper/css'
//import "../js/custom.js"
//import "../js/isotope.js"
import logo from "../images/logo.png"
import { Route,Link } from "react-router-dom"



import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar1()
{

return(
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


{/* ***** Header Area Start ***** */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src={logo} alt="" />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Search End ***** */}
                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Search Mods"
                      id="searchText"
                      name="searchKeyword"
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>
                {/* ***** Search End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li><Link   className="active" to="/">Home</Link></li>
                  <li><Link   className="active" to="/games">Games</Link></li>
                  <li><Link  className="active" to="/mods">Mods</Link></li>
                  <li><Link  className="active" to="/contact">Support</Link></li>
                  
                  <li>
                   <Link className="active" to="/report">
                      Report <img src="../images/profile-header.jpg" alt="" />
                    </Link>
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

      </div>

)


}

export default NavBar1;