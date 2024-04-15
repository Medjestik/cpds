import React from 'react';
import './ProjectCard.css';

function ProjectCard({ card, onDetail }) {

  return (
    <div className='project-card'>
      <div className='project-card__header'>
        {
          card.image
          ?
          <img className='project-card__img' src={card.image} alt=' ' />
          :
          <div className='project-card__img-stub'></div>
        }
        <ul className='project-card__tag-container'>
          <li className='project-card__tag'>#{card.customer}</li>
        </ul>
      </div>
      <div className='project-card__main'>
        {
          card.status && card.status === 'new'
          ?
          <>
          <div className='project-card__status'>
            <div className='project-card__status-icon project-card__status-icon_type_new'></div>
            <span className='project-card__status-text'>Начинающийся проект</span>
            <div className='project-card__tooltip project-card__tooltip_type_new'>Это проект, работа над которым только началась или начнётся. Это означает, что у вас есть возможность подключиться к команде в самом начале пути и поучаствовать во всех стадиях, начиная с аналитики проблемы и генерации идей её решения.</div>
          </div>
          
          </>
          :
          <>
          <div className='project-card__status'>
            <div className='project-card__status-icon project-card__status-icon_type_progress'></div>
            <span className='project-card__status-text'>Продолжающийся проект</span>
            <div className='project-card__tooltip project-card__tooltip_type_progress'>Это проект, работа над которым идёт более полугода. За это время команда проекта обычно успевает провести аналитику и разработать конечный образ решения. Чаще всего для таких проектов ищут специалистов или людей, которые имеют представление о конкретных областях и технологиях.</div>
          </div>
          
          </>
        }
        <h4 className='project-card__title'>{card.name || ''}</h4>
        <p className='project-card__subtitle'>{card.problem || ''}</p>
        <div className='project-card__section'>
          <h6 className='project-card__section-title'>Кого мы ищем</h6>
          <ul className='project-card__section-list'>
            {
              card.required_by.split(';').map((elem, i) => (
              <li key={i} className='project-card__section-item'>{i + 1}. {elem}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <button className='project-card__button' type='button' onClick={() => onDetail(card)}>Подробнее</button>
    </div>
  );
}

export default ProjectCard;
