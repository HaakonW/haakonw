import React from 'react';
import moment from 'moment';
import img from './profilePic.jpg';
import './App.css';

// function calculateAge(birthday) { // birthday is a date
//   var ageDifMs = Date.now() - birthday;
//   var ageDate = new Date(ageDifMs); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

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
        <span style={{ textDecoration: 'line-through' }}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.oms.no"
          >
            {' '}
            Oslo Market Solutions
          </a>
          , noe jeg har gjort siden Januar 2017 <br />
        </span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.mnemonic.io"
        >
          {' '}
          mnemonic
        </a>
        , noe jeg har gjort siden Desember 2020. <br /> React og TypeScript.
      </p>
    </div>
    <div>
      <h3>Sideprosjekter:</h3>
      <div className="sideProjects">
        <div>
          <h4>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.amexvenn.no"
            >
              Amexvenn.no
            </a>
          </h4>
          <p>
            En nettside som gir en oversikt over hvor en kan bruke american
            express som betalingsmåte i Norge. Laget for å kunne opptjene mest
            mulig eurobonuspoeng via kredittkortet sitt.
          </p>
        </div>
        <div>
          <h4>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.parkettlegger.no"
            >
              Parkettlegger.no
            </a>
          </h4>
          <p>En kalkulator som regner ut hvordan du skal legge parkettgulv.</p>
        </div>
      </div>
    </div>
  </article>
);

export default About;
