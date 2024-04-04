import React from 'react';
import './PageHeader.css';
import logo from '../../../images/logo/logo_black.png';
import { Link } from 'react-scroll';

function PageHeader() {

  return (
    <header className='page-header' id='main'>
      <div className='container'>
        <div className='page-header__container'>
          <img className='page-header__logo' alt='Логотип' src={logo}></img>
          <nav className='page-header__nav'>
            <ul className='page-header__nav-list'>
              <li className='page-header__nav-item'><Link  to='information' smooth={true} offset={20} duration={500} spy={true}>Информация</Link></li>
              <li className='page-header__nav-item'><Link  to='project' smooth={true} offset={20} duration={1000} spy={true}>Проекты</Link></li>
              <li className='page-header__nav-item'><Link  to='partners' smooth={true} offset={20} duration={1500} spy={true}>Партнеры</Link></li>
              <li className='page-header__nav-item'><Link  to='footer' smooth={true} offset={0} duration={2000} spy={true}>Контакты</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
