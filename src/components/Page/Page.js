import React from 'react';
import './Page.css';
import * as api from '../../utils/api.js';
import Preloader from '../Preloader/Preloader.js';
import PageHeader from './PageHeader/PageHeader';
import PageMain from './PageMain/PageMain';
import PageProject from './PageProject/PageProject';
import PageFooter from './PageFooter/PageFooter';
import DetailPopup from '../Popup/DetailPopup/DetailPopup.js';

function Page() {

  const [projects, setProjects] = React.useState([]);
  const [currentProject, setCurrentProject] = React.useState({});

  const [isShowDetailPopup, setIsShowDetailPopup] = React.useState(false);

  const [isLoadingPage, setIsLoadingPage] = React.useState(true);

  function getProjects() {
    Promise.all([
      api.getProjects(),
    ])
    .then(([res]) => {
      setProjects(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setIsLoadingPage(false);
    })
  }

  function openDetailPopup(item) {
    setCurrentProject(item);
    setIsShowDetailPopup(true);
  }

  function closeDetailPopup() {
    setIsShowDetailPopup(false);
  }

  React.useEffect(() => {
    getProjects();
    return(() => {
      setIsShowDetailPopup(false);
      setProjects([]);
      setCurrentProject({});
    })
  }, []);

  return (
    <>
    {
      isLoadingPage
      ?
      <Preloader />
      :
      <div className='page'>
        <PageHeader />
        <PageMain />
        <PageProject projects={projects} onDetail={openDetailPopup} />
        <PageFooter />

        {
          isShowDetailPopup &&
          <DetailPopup 
            isOpen={isShowDetailPopup} 
            onClose={closeDetailPopup} 
            popupName={'project-detail'} 
            project={currentProject}
            isLoadingRequest={false}
          />
        }
      </div>
    }
    </>
  );
}

export default Page;  
