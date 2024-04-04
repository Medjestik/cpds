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
          <div className='project-card__status'>
            <div className='project-card__status-icon project-card__status-icon_type_new'></div>
            <span className='project-card__status-text'>Новый проект</span>
          </div>
          :
          <div className='project-card__status'>
            <div className='project-card__status-icon project-card__status-icon_type_progress'></div>
            <span className='project-card__status-text'>Проект продолжается</span>
          </div>
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
