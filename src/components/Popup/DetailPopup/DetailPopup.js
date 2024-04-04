import React from 'react';
import Popup from '../Popup.js';
import './DetailPopup.css';

function DetailPopup({ isOpen, onClose, popupName, project, isLoadingRequest }) {

  const isShowRequestError = {
    isShow: false,
    text: 'Запись на проекты закрыта',
  }

  const isBlockSubmitButton = false;


  function handleSubmit(e) {
    e.preventDefault();

    //onConfirm(project);
  }

  const getParagraphs = (text) => {
    return text.split('\n').map((paragraph, index) => (
      <p className='detail__text' key={index}>{paragraph}</p>
    ));
  };

	React.useEffect(() => {
    return(() => {

    })
		// eslint-disable-next-line
	}, [isOpen]);

  return (
    <Popup
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={handleSubmit}
    formWidth={'large'}
    formName={popupName}
    >

      {
        project.status && project.status === 'new'
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

      <h2 className='popup__title popup__title_margin_top'>{project.name}</h2>

      <div className='popup__field'>
        <h4 className='popup__input-caption'>Описание:</h4>
        <p className='detail__text'>{project.problem}</p>
      </div>

      <div className='popup__field'>
        <h4 className='popup__input-caption'>Задание:</h4>
        <p className='detail__text'>{project.task}</p>
      </div>

      <div className='popup__field'>
        <h4 className='popup__input-caption'>Человек в команде:</h4>
        <p className='detail__text'>{project.team_size}</p>
      </div>

      <div className='popup__field'>
        <h4 className='popup__input-caption'>Кто нам нужен:</h4>
        <p className='detail__text'>{project.required_by}</p>
      </div>
      
      <div className='popup__field'>
        <h4 className='popup__input-caption'>Функционал:</h4>
        <p className='detail__text'>{project.functionality}</p>
      </div>

      <div className='popup__field'>
        <h4 className='popup__input-caption'>Наставники:</h4>
        <p className='detail__text'>{project.mentor_full_name}</p>
      </div>

      <div className='popup__btn-container'>
        <button className='popup__btn-cancel' type='button' onClick={() => onClose()}>Назад</button>
        {
          isLoadingRequest ? 
          <button className='popup__btn-save popup__btn-save_type_loading' disabled type='button'>Сохранение..</button>
          :
          <a className={`popup__btn-save`} href={project.request_link || ''} target='_blank' rel='noreferrer'>Записаться</a>
        }
      </div>
      <span className={`popup__input-error ${isShowRequestError.isShow && 'popup__input-error_status_show'}`}>{isShowRequestError.text}</span>
    </Popup>
  )
}

export default DetailPopup;
