import React from 'react';
import moment from 'moment';
import img from './profilePic.jpg';
import './App.css';

const About = () => (
  <article className="rightSide">
    <h2>
      {moment().diff(moment('01/05/1989'), 'years')} år gammel front-end
      utvikler fra Oslo.{' '}
    </h2>
    <div>
      <img
        src={img}
        alt="Profilbilde foran Ørsta Rådhus, itje at he nokke der å gjer"
      />
    </div>
    <div>
      <p>
        Jobber i dag hos
        <span style={{ textDecoration: "line-through" }}  >
          <a rel="noopener noreferrer" target="_blank" href="https://www.oms.no">
            {' '}
            Oslo Market Solutions
          </a>
          , noe jeg har gjort siden Januar 2017 <br /> 
        </span>

        <a rel="noopener noreferrer" target="_blank" href="https://www.mnemonic.io">
          {' '}
          mnemonic
        </a>
        , noe jeg har gjort siden Desember 2020. <br /> React og TypeScript.
      </p>

    </div>
  </article>
);

export default About;
