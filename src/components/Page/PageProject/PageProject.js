import React from 'react';
import './PageProject.css';
import ProjectCard from '../../ProjectCard/ProjectCard';

function PageProject({ projects, onDetail }) {

  return (
    <div className='page-project' id='project'>
      <div className='container'>
        <div className='page-project__container'>
          <h2 className='page-project__title'>Проекты</h2>
          <ul className='page-project__list'>
            {
              projects.map((elem) => (
                <li className='page-project__item' key={elem.id} id={elem.id}>
                  <ProjectCard card={elem} onDetail={onDetail} />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PageProject;
