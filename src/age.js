export class Age {
  constructor(dob) {
    this.dobString = dob; //dob expected in yyyy-mm-dd from html form
    this.dobMs = Date.parse(dob); 
  }


}
