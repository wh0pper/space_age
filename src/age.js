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
    if (planet === 'mercury') {
      conversion = .24;
    } else if (planet === 'venus') {
      conversion = .62
    } else if (planet === 'mars') {
      conversion = 1.88
    } else if (planet === 'jupiter') {
      conversion = 11.86
    }
    let converted = conversion * this.ageToSec()/this.SECONDSINYEAR;
    return converted.toFixed(3);
  }
}

Age.prototype.SECONDSINYEAR = 31536000;
