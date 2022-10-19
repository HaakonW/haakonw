import React from 'react';
import img from './profilePic.jpg';

const unpaidSideHustlesWithBigDreams = [
  {
    name: 'Amexvenn.no',
    url: 'https://www.amexvenn.no',
    desc: 'En nettside som gir en oversikt over hvor en kan bruke american express som betalingsmåte i Norge. Laget for å kunne opptjene mest mulig eurobonuspoeng via kredittkortet sitt.',
  },

  {
    name: 'Parkettlegger.no',
    url: 'https://www.parkettlegger.no',
    desc: 'En kalkulator som regner ut hvordan du skal legge parkettgulv. Laget i forbindelse med oppussing av leilghet og at det var tungvindt å regne ut hele tiden.',
  },
  {
    name: 'Petimeter.io',
    url: 'https://petimeter.io',
    desc: 'En webapp som for regsitrering av avvik i servicebransjen. Laget med firebase og cloud functions',
  },
];
export const About = () => {
  return (
    <div className="aboutSection">
      <img
        src={img}
        alt="Profilbilde foran Ørsta Rådhus, itje at he nokke der å gjer"
      />
      <div>
        <div>
          <h4>Jobb</h4>
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
              , noe jeg har gjort siden Januar 2017
            </span>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.mnemonic.io"
            >
              {' '}
              mnemonic
            </a>
            , noe jeg har gjort siden Desember 2020. Utvikling i React og
            TypeScript.
          </p>
        </div>
        <div>
          <h4>Sideprosjekter</h4>
          {unpaidSideHustlesWithBigDreams.map((item) => (
            <div key={item.name}>
              <h5>
                <a rel="noopener noreferrer" target="_blank" href={item.url}>
                  {item.name}
                </a>
              </h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
