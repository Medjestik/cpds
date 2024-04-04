import React from 'react';
import './PageMain.css';
import { Link } from 'react-scroll';

function PageMain() {

  return (
    <main className='page-main'>
      <div className='container'>
        <div className='page-main__container'>
          <div className='page-main__info'>
            <h1 className='page-main__title'><span className='text_color_main'>Межвузовские</span> студенческие проекты</h1>
            <p className='page-main__subtitle'>Российский университет транспорта приглашает студентов других вузов к участию в совместной реализации <span className='text_weight_bold'>проектной деятельности</span></p>
            <button className='page-main__button' type='button'>Цель проекта</button>
          </div>
          <div className='page-main__img'></div>
          <Link className='page-main__arrow' to='project' smooth={true} offset={20} duration={500} spy={true}></Link>
        </div>
      </div>
    </main>
  );
}

export default PageMain;
