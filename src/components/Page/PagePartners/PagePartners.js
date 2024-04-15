import React from 'react';
import './PagePartners.css';
import { partners } from '../../../utils/partners.js';
import Carousel from 'react-elastic-carousel';

function PagePartners(windowWidth) {

  const [slideCount, setSlideCount] = React.useState(0);

  React.useEffect(() => {
    if (windowWidth.windowWidth < 1439) {
      if (windowWidth.windowWidth < 767) {
        setSlideCount(1)
      } else {
        setSlideCount(3)
      }
    } else {
      setSlideCount(3)
    }

  }, [windowWidth]);

  return (
      <div className='page-partners' id='partners'>
        <div className='container'>
          <div className='page-partners__container'>
            <h2 className='page-project__title'>Партнеры</h2>
            <ul className='partners__list'>
              <Carousel
              itemsToShow={slideCount} 
              enableAutoPlay={false} 
              autoPlaySpeed={10000}
              >
              {
                partners.map((elem, i) => (
                  <li className='partners__item' key={i}>
                    <a href={elem.link} target='_blank' rel='noreferrer'>
                      <img className='partners__item-img' src={elem.img} alt=' '></img>
                    </a>
                  </li>
                ))
              }
              </Carousel>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default PagePartners;