import React from 'react'
import logo from '../../assets/img/logo-small.png'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

function Header() {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <>
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/"><img src={logo} className='img-fluid'/></Link>
        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" className={`btn ${currentLanguage === 'RU' ? 'fw-bold' : ''}`} onClick={() => changeLanguage('RU')}>RU</button>
          <button type="button" className={`btn ${currentLanguage === 'EN' ? 'fw-bold' : ''}`} onClick={() => changeLanguage('EN')}>EN</button>
        </div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">DentalDoor</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a href="/" className="nav-link" aria-current="page">{currentLanguage === 'EN' ? 'Home' : 'Главная'}</a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link">{currentLanguage === 'EN' ? 'About' : 'О нас'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/treatments">{currentLanguage === 'EN' ? 'Treatments' : 'Лечение'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">{currentLanguage === 'EN' ? 'Gallery' : 'Галерея'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/price">{currentLanguage === 'EN' ? 'Price List' : 'Прайс-лист'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contacts">{currentLanguage === 'EN' ? 'Contacts' : 'Контакты'}</a>
              </li>
              
                <div className='d-flex'>
                <a className="nav-link me-5" href="https://wa.me/905333324640"><i className="bi bi-whatsapp"></i></a>
                <a className="nav-link" href="/contacts"><i className="bi bi-facebook"></i></a>
                </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <nav className="navbar bg-warning-subtle">
      <div className="container d-flex justify-content-center">
        {currentLanguage === 'EN' ? 'Guaranteed Dental Treatment' : 'Гарантированное стоматологическое лечение'}
      </div>
    </nav>
    </>
  )
}

export default Header
