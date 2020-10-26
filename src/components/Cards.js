import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 id="navigate">Portfolio</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={require('../images/cocktellme.png')}
              text='Application using UI Kit and APIs which allows users to take personality assessment and be paired with perfect cocktail.'
              label='CockTell Me'
              path='https://oksimone.github.io/cocktellme/'
            />
            <CardItem
              src={require('../images/musiquery.png')}
              text='App using Sequelize and Express which allows musicians to search for other industry professionals.'
              label='MusiQuery'
              path='http://project-2-agrc.herokuapp.com/'
            />
            <CardItem
              src={require('../images/equippe.png')}
              text='React based app with a functional shopping cart which allows users to purchase PPE products.'
              label='EquiPPE'
              path='https://vast-ravine-19894.herokuapp.com/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
