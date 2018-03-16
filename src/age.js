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

  lifeExpectancy(sex, country) {
    let dobString = this.dob.toISOString().split('T')[0];
    country = country.split(' ').join('%20');
    var response = 'error';
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        response = this.responseText;
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://api.population.io:80/1.0/life-expectancy/total/male/United%20States/1990-03-13/");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "33e18b3a-f9d5-c0cc-02ae-1b3661903395");

    xhr.send(data);

    return response.total_life_expectancy;
    // let request = new XMLHttpRequest();
    // let url = 'http://api.population.io:80/1.0/life-expectancy/total/female/United%20States/1990-03-13/';
    // // let url  = `http://api.population.io:80/1.0/life-expectancy/total/${sex}/${country}/${dobString}/`;
    // let response;
    // request.onreadystatechange = function() {
    //   console.log(this.readyState, this.status);
    //   console.log(this.responseText);
    //   if (this.readyState === 4 && this.status === 200) {
    //     response = JSON.parse(this.responseText);
    //   }
    // }
    // request.open("GET", url, true);
    //
    // request.send();
    // console.log(response);
  }
}

Age.prototype.SECONDSINYEAR = 31536000;
Age.prototype.MERCYEARS = .24;
Age.prototype.VENUSYEARS = .62;
Age.prototype.MARSYEARS = 1.88;
Age.prototype.JUPITERYEARS = 11.86;
