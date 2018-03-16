export class Age {
  constructor(dob) {
    this.dob = new Date(dob); //dob expected in yyyy-mm-dd from html form, note this returns
  }

  toSec() {
    return this.dob.getTime()/1000;
  }

}
