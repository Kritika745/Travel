import React ,{ useState, useEffect }from 'react'
import { Container , Row ,Button} from 'reactstrap'
import { NavLink,Link } from 'react-router-dom'
import "./Header.css";

import logo from '../../assets/images/plane (1).png'


const nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
 
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Row>
         <div className="nav__wrapper d-flex align-items-center justify-content-between ">

          <div className="logo text-white">
            <span>TRAVEL</span>
            <img src={logo} alt="" /> 
            <span>VISTA</span>
          </div>
           
          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item,index)=>(
                  <li className="nav__items" key={index}>
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link":"" }>{item.display}</NavLink>
                  </li>
                ))
              }

          </ul>
          </div>
           
          <div className="nav__right d-flex align-items-center gap-4">
          <div className="nav__btns d-flex align-items-center gap-2">
              <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
              <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
          </div>

        <span className="mobile__menu">
        <i class="ri-menu-line"></i>
   
        </span>
        </div>

        
        </div>
            </Row> 
       {/* </Container>  */}
    </header>
  )
}

export default Header
