export class Age {
  constructor(dob) {

    this.dob = new Date(dob); //dob expected in yyyy-mm-dd from html form, note this returns
  }

  ageToSec() {
    return (Date.now() - Date.parse(this.dob))/1000;
  }

  dateDifference(date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2);
    return (date2 - date1)/1000;
  }

  agePlanet(planet) {
    let conversion = 1;
    if (planet.toLowerCase() === 'mercury') {
      conversion = .24;
    }
    let converted = conversion * this.ageToSec()/this.SECONDSINYEAR;
    return converted;
  }
}

Age.prototype.SECONDSINYEAR = 31536000;
