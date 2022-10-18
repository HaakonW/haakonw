import React from 'react';

import './App.css';

function calculateAge(birthday) {
  // birthday is a date
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const AboutHeading = () => (
  <h2>
    {calculateAge(new Date('05/01/1989'))} år gammel front-end utvikler fra
    Oslo.{' '}
  </h2>
);

export default AboutHeading;
