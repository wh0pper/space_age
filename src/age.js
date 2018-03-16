export class Age {
  constructor(dob) {
    const secondsInYear = 31536000;
    this.dob = new Date(dob); //dob expected in yyyy-mm-dd from html form, note this returns
  }

  ageToSec() {
    return (Date.now() - Date.parse(this.dob))/1000;
  }

}
