import React from 'react';
import moment from 'moment';
import img from './profilePic.jpg';
import './App.css';

const About = () => {
  const birthDay = moment().set({ year: 1989, month: 5, day: 1 });
  return (
    <article className="rightSide">
      <h2>Om meg</h2>
      <div>
        <img
          src={img}
          alt="Profilbilde foran Ørsta Rådhus, itje at he nokke der å gjer"
        />
      </div>
      <div>
        <p>
          Jeg er {moment().diff(birthDay, 'years')} år gammel front-end utvikler
          fra Oslo. Jeg jobber i dag hos
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.oms.no"
          >
            {' '}
            Oslo Market Solutions
          </a>
          , noe jeg har gjort siden Januar 2017. Jeg er god i React og
          JavaScript.
        </p>
      </div>
    </article>
  );
};

export default About;
