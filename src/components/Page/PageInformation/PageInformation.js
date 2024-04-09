import React from 'react';
import './PageInformation.css';
import { Link } from 'react-scroll';
import seminarImg from '../../../images/seminar.svg';
import registrationImg from '../../../images/registration.svg';

function PageInformation() {

  return (
      <div className='page-information' id='information'>
        <div className='container'>
          <div className='page-information__container'>
            <h2 className='page-information__title'>Информация</h2>
            <div className='page-information__block'>
              <div className='page-information__column page-information__column_type_img page-information__column_margin_right'>
                <img className='page-information__block-image' src={seminarImg} alt='изображение'></img>
              </div>
              <div className='page-information__column page-information__column_type_text'>
                <h4 className='page-information__block-title'>Проектная деятельность</h4>
                <p className='page-information__block-subtitle'>Проектная деятельность — ключевой предмет в РУТ (МИИТ), объединяющий студентов разных направлений подготовки.</p>
                <p className='page-information__block-subtitle'>Учебная программа предмета включает изучение инструментов из областей предпринимательства, маркетинга, науки и образования. Команды применяют полученные знания и навыки для решения реальных проблем бизнеса и науки.</p>
                <p className='page-information__block-subtitle'>Некоторые проекты требуют специфических знаний и умений, поэтому университет приглашает студентов из других вузов к участию в совместной работе.</p>
                <a className='page-main__button' href='https://www.youtube.com/watch?v=sItjvDJ3Lsk' target='_blank' rel='noreferrer'>Модель проектной деятельности</a>
              </div>
            </div>
            <div className='page-information__block page-information__block_type_reverse'>
              <div className='page-information__column page-information__column_type_text'>
                <h4 className='page-information__block-title'>Как начать работать вместе со студентами РУТ&nbsp;(МИИТ)?</h4>
                <p className='page-information__block-subtitle'>1. Ознакомьтесь со списком проектов. В карточке каждого проекта указано, кого и для чего ищет команда.</p>
                <p className='page-information__block-subtitle'>2. Нажмите кнопку "Записаться" и заполните анкету.</p>
                <p className='page-information__block-subtitle'>3. После заполнения анкеты с вами свяжется наставник команды и расскажет, что дальше.</p>
                <Link className='page-main__button' to='project' smooth={true} offset={20} duration={500} spy={true}>Выбрать проект</Link>
              </div>
              <div className='page-information__column page-information__column_type_img page-information__column_margin_left'>
                <img className='page-information__block-image' src={registrationImg} alt='изображение'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PageInformation;