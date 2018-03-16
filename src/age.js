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
      conversion = this.MERCYEARS;
    } else if (planet === 'venus') {
      conversion = this.VENUSYEARS;
    } else if (planet === 'mars') {
      conversion = this.MARSYEARS;
    } else if (planet === 'jupiter') {
      conversion = this.JUPITERYEARS;
    }
    let converted = conversion * this.ageToSec()/this.SECONDSINYEAR;
    return converted.toFixed(3);
  }
}

Age.prototype.SECONDSINYEAR = 31536000;
Age.prototype.MERCYEARS = .24;
Age.prototype.VENUSYEARS = .62;
Age.prototype.MARSYEARS = 1.88;
Age.prototype.JUPITERYEARS = 11.86;
