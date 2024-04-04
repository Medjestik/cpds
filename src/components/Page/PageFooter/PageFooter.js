import React from 'react';
import './PageFooter.css';
import logo from '../../../images/logo/logo_white.png';
import { Link } from 'react-scroll';

function PageFooter() {

  return (
    <footer className='footer' id='footer'>
      <div className='container'>
        <div className='footer__container'>
          <div className='footer__info'>
            <img className='footer__logo' alt='Логотип' src={logo}></img>
          </div>
          <nav className='footer__nav'>
            <div className='footer__column'>
              <h4 className='footer__column-title'>Навигация</h4>
              <Link className='footer__link' to='information' smooth={true} offset={0} duration={1500} spy={true}>Информация</Link>
              <Link className='footer__link' to='project' smooth={true} offset={20} duration={1000} spy={true}>Проекты</Link>
              <Link className='footer__link' to='partners' smooth={true} offset={0} duration={500} spy={true}>Партнеры</Link>
            </div>
            <div className='footer__column footer__column_type_large'>
              <h4 className='footer__column-title'>Ресурсы</h4>
              <a className='footer__link' href='https://www.miit.ru/' target='_blank' rel='noreferrer'>РУТ (МИИТ)</a>
            </div>
          </nav>
        </div>
        <p className='footer__copy'>&#169; 2024 "Российский университет транспорта"</p>
      </div>
    </footer>
  );
}

export default PageFooter;
